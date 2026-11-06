const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const {
  PARTIALS_DIR,
  SNIPPET_PLACEHOLDER,
  loadGuides,
  parseGuide,
  toPartnerMarkdown,
  validateGuide,
  writeGuideFiles,
} = require("./guides");
const remarkSnippet = require("./remark-snippet");

const GOOD = `---
title: Drupal
---

# Add the website widget to Drupal

## Steps

1. Open the theme settings.

   ![Theme settings](/img/install/drupal/settings.png)

2. Paste the code below:

   \`\`\`html
   {{snippet}}
   \`\`\`

## Check it worked

Visit your site.
`;

function tempDir() {
  return fs.mkdtempSync(path.join(os.tmpdir(), "install-guides-"));
}

describe("parseGuide", () => {
  test("returns the title and the body without front matter", () => {
    const guide = parseGuide(GOOD);
    assert.equal(guide.title, "Drupal");
    assert.ok(guide.body.startsWith("# Add the website widget to Drupal"));
    assert.ok(!guide.body.includes("title:"));
  });

  test("throws without front matter", () => {
    assert.throws(() => parseGuide("# No front matter"), /no front matter/);
  });

  test("throws without a title", () => {
    assert.throws(() => parseGuide("---\nsidebar_label: x\n---\n\nbody"), /no title/);
  });
});

describe("toPartnerMarkdown", () => {
  test("drops screenshots, which only the help pages show", () => {
    const markdown = toPartnerMarkdown(parseGuide(GOOD).body);
    assert.ok(!markdown.includes("!["));
    assert.ok(!markdown.includes("/img/"));
    assert.ok(!/\n\s*\n\s*\n/.test(markdown), "no blank-line runs where the image was");
    assert.ok(markdown.includes(SNIPPET_PLACEHOLDER));
    assert.ok(markdown.endsWith("Visit your site."));
  });
});

describe("validateGuide", () => {
  const markdown = toPartnerMarkdown(parseGuide(GOOD).body);

  test("passes a white-label guide", () => {
    assert.deepEqual(validateGuide("drupal", markdown), []);
  });

  test("rejects a guide without the placeholder", () => {
    const problems = validateGuide("drupal", markdown.replace(SNIPPET_PLACEHOLDER, ""));
    assert.match(problems.join("\n"), /exactly one \{\{snippet\}\}/);
  });

  test("rejects a guide with two placeholders", () => {
    const problems = validateGuide("drupal", `${markdown}\n\n${SNIPPET_PLACEHOLDER}`);
    assert.match(problems.join("\n"), /exactly one \{\{snippet\}\}/);
  });

  for (const brand of ["XAPP", "Studio", "stentor"]) {
    test(`rejects the brand name ${brand}`, () => {
      const problems = validateGuide("drupal", `${markdown}\n\nContact ${brand} support.`);
      assert.match(problems.join("\n"), /brand/);
    });
  }

  test("rejects links", () => {
    const problems = validateGuide("drupal", `${markdown}\n\nSee [the docs](/help/x).`);
    assert.match(problems.join("\n"), /link/);
  });

  test("rejects images left inline in a paragraph", () => {
    const problems = validateGuide("drupal", `${markdown}\n\nLike this ![x](/img/x.png) one.`);
    assert.match(problems.join("\n"), /image/);
  });

  test("rejects HTML and JSX tags outside code", () => {
    assert.match(validateGuide("drupal", `${markdown}\n\n<BrowserFrame />`).join("\n"), /tag/);
    assert.match(validateGuide("drupal", `${markdown}\n\n<img src="/x.png" />`).join("\n"), /tag/);
  });

  test("allows tags inside code", () => {
    assert.deepEqual(validateGuide("drupal", `${markdown}\n\nPaste it before \`</body>\`.`), []);
  });

  test("rejects admonitions", () => {
    const problems = validateGuide("drupal", `${markdown}\n\n:::important\nHi\n:::`);
    assert.match(problems.join("\n"), /admonition/);
  });

  test("rejects platform slugs that are not lowercase words", () => {
    assert.match(validateGuide("Drupal", markdown).join("\n"), /slug/);
  });
});

describe("loadGuides", () => {
  test("loads every partial, sorted by platform, skipping the README", () => {
    const dir = tempDir();
    fs.writeFileSync(path.join(dir, "zyro.md"), GOOD.replace("Drupal", "Zyro"));
    fs.writeFileSync(path.join(dir, "drupal.md"), GOOD);
    fs.writeFileSync(path.join(dir, "README.md"), "# Rules");
    const guides = loadGuides(dir);
    assert.deepEqual(
      guides.map((g) => [g.platform, g.title]),
      [
        ["drupal", "Drupal"],
        ["zyro", "Zyro"],
      ],
    );
    assert.ok(!guides[0].markdown.includes("!["));
  });

  test("throws one error naming every broken guide", () => {
    const dir = tempDir();
    fs.writeFileSync(path.join(dir, "drupal.md"), GOOD.replace("Visit your site.", "Ask XAPP."));
    fs.writeFileSync(path.join(dir, "wix.md"), GOOD.replace("{{snippet}}", ""));
    assert.throws(() => loadGuides(dir), (error) => /drupal\.md/.test(error.message) && /wix\.md/.test(error.message));
  });

  test("every guide in the repo follows the rules", () => {
    const guides = loadGuides(PARTIALS_DIR);
    assert.ok(guides.length >= 11);
    assert.ok(guides.some((g) => g.platform === "generic"));
  });
});

describe("writeGuideFiles", () => {
  test("writes one guide.json per platform and an index with the commit", () => {
    const outDir = tempDir();
    const guides = [{ platform: "drupal", title: "Drupal", markdown: "# Hi\n\n{{snippet}}" }];
    writeGuideFiles(outDir, guides, "abc123");

    const guide = JSON.parse(fs.readFileSync(path.join(outDir, "help/install/drupal/guide.json"), "utf8"));
    assert.deepEqual(guide, { platform: "drupal", title: "Drupal", markdown: "# Hi\n\n{{snippet}}", commit: "abc123" });

    const index = JSON.parse(fs.readFileSync(path.join(outDir, "help/install/guides.json"), "utf8"));
    assert.deepEqual(index, {
      commit: "abc123",
      guides: [{ platform: "drupal", title: "Drupal", path: "/help/install/drupal/guide.json" }],
    });
  });
});

describe("remarkSnippet", () => {
  test("replaces the placeholder code block and leaves other code alone", () => {
    const tree = {
      type: "root",
      children: [
        { type: "list", children: [{ type: "code", lang: "html", value: SNIPPET_PLACEHOLDER }] },
        { type: "code", lang: "js", value: "console.log(1)" },
      ],
    };
    remarkSnippet({ snippet: "<script></script>" })(tree);
    assert.equal(tree.children[0].children[0].value, "<script></script>");
    assert.equal(tree.children[1].value, "console.log(1)");
  });

  test("throws without a snippet, so a misconfigured site fails to build", () => {
    assert.throws(() => remarkSnippet({}), /snippet/);
  });
});
