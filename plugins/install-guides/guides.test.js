const { test, describe } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const {
  AGENT_GUIDES,
  checkAgentCoverage,
  PARTIALS_DIR,
  SNIPPET_PLACEHOLDER,
  TAGS_PLACEHOLDER,
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

  test("reads a file saved with Windows line endings the same as one without", () => {
    const guide = parseGuide(GOOD.replace(/\n/g, "\r\n"));
    assert.equal(guide.title, "Drupal");
    assert.ok(!guide.body.includes("\r"));
    assert.deepEqual(validateGuide("drupal", toPartnerMarkdown(guide.body)), []);
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

const AGENT_GOOD = `---
title: Drupal
---

# Help AI assistants find your business on Drupal

The website widget already adds these tags when it loads.

## Steps

1. Paste the code below before \`</head>\`:

   \`\`\`html
   {{tags}}
   \`\`\`

## Check it worked

View the page source.
`;

describe("agent guides", () => {
  const markdown = toPartnerMarkdown(parseGuide(AGENT_GOOD).body);

  test("pass with one {{tags}} block", () => {
    assert.deepEqual(validateGuide("drupal", markdown, AGENT_GUIDES), []);
  });

  test("pass with no placeholder only for a platform listed as having nowhere to put head code", () => {
    const empty = markdown.replace(/```html\n\s*\{\{tags\}\}\n\s*```/, "Nothing to add.");
    assert.deepEqual(validateGuide("godaddy", empty, AGENT_GUIDES), []);
    assert.match(validateGuide("wix", empty, AGENT_GUIDES).join("\n"), /exactly one \{\{tags\}\}/);
  });

  test("reject two placeholders, or the widget's placeholder", () => {
    assert.match(validateGuide("drupal", `${markdown}\n\n${TAGS_PLACEHOLDER}`, AGENT_GUIDES).join("\n"), /exactly one \{\{tags\}\}/);
    assert.match(validateGuide("drupal", `${markdown}\n\n${SNIPPET_PLACEHOLDER}`, AGENT_GUIDES).join("\n"), /\{\{snippet\}\}/);
  });

  test("follow the same white-label rules", () => {
    assert.match(validateGuide("drupal", `${markdown}\n\nAsk XAPP.`, AGENT_GUIDES).join("\n"), /brand/);
    assert.match(validateGuide("drupal", `${markdown}\n\nSee [x](/y).`, AGENT_GUIDES).join("\n"), /link/);
  });

  test("the build refuses a widget platform without an agent guide, and an agent guide for no widget", () => {
    const g = (platform) => ({ platform, title: platform, markdown: "" });
    assert.doesNotThrow(() => checkAgentCoverage([g("drupal"), g("wix")], [g("drupal"), g("wix")]));
    assert.throws(() => checkAgentCoverage([g("drupal"), g("wix")], [g("drupal")]), /no agent guide for wix/);
    assert.throws(() => checkAgentCoverage([g("drupal")], [g("drupal"), g("zyro")]), /agent guide for zyro has no widget guide/);
  });

  test("share their intro, check and troubleshooting word for word, apart from GoDaddy's", () => {
    // The intro is everything between the title and the first section; the tail, from the check on.
    const sections = (markdown) => {
      const intro = markdown.slice(markdown.indexOf("\n") + 1, markdown.indexOf("\n## ")).trim();
      const tail = markdown.slice(markdown.indexOf("## Check it worked"));
      return { intro, tail };
    };
    const guides = loadGuides(AGENT_GUIDES.dir, AGENT_GUIDES).filter((g) => g.platform !== "godaddy");
    const first = sections(guides[0].markdown);
    for (const guide of guides) {
      assert.deepEqual(sections(guide.markdown), first, `${guide.platform} differs`);
    }
  });

  test("every agent guide in the repo follows the rules, one for each widget guide's platform", () => {
    const agent = loadGuides(AGENT_GUIDES.dir, AGENT_GUIDES).map((g) => g.platform);
    const widget = loadGuides(PARTIALS_DIR).map((g) => g.platform);
    assert.deepEqual(agent, widget);
  });
});

describe("writeGuideFiles", () => {
  test("writes agent guides beside the widget guides, under their own names", () => {
    const outDir = tempDir();
    writeGuideFiles(outDir, [{ platform: "drupal", title: "Drupal", markdown: "{{tags}}" }], "abc123", AGENT_GUIDES);

    const guide = JSON.parse(fs.readFileSync(path.join(outDir, "help/install/drupal/agent-guide.json"), "utf8"));
    assert.deepEqual(guide, { platform: "drupal", title: "Drupal", markdown: "{{tags}}", commit: "abc123" });
    const index = JSON.parse(fs.readFileSync(path.join(outDir, "help/install/agent-guides.json"), "utf8"));
    assert.deepEqual(index.guides, [{ platform: "drupal", title: "Drupal", path: "/help/install/drupal/agent-guide.json" }]);
    assert.ok(!fs.existsSync(path.join(outDir, "help/install/guides.json")));
  });

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

  test("fills the agent guides' {{tags}} block with the tags it is given", () => {
    const tree = { type: "root", children: [{ type: "code", lang: "html", value: TAGS_PLACEHOLDER }] };
    remarkSnippet({ snippet: "<script></script>", tags: "<link rel=\"mcp-server\">" })(tree);
    assert.equal(tree.children[0].value, "<link rel=\"mcp-server\">");
  });

  test("demotes an embedded agent guide's headings a level, so its help page keeps one title", () => {
    const tree = {
      type: "root",
      children: [
        { type: "heading", depth: 1, children: [] },
        { type: "heading", depth: 2, children: [] },
      ],
    };
    remarkSnippet({ snippet: "s", tags: "t" })(tree, { path: "/site/help/install/_agent-partials/wix.md" });
    assert.deepEqual(tree.children.map((h) => h.depth), [2, 3]);

    const widget = { type: "root", children: [{ type: "heading", depth: 1, children: [] }] };
    remarkSnippet({ snippet: "s", tags: "t" })(widget, { path: "/site/help/install/_partials/wix.md" });
    assert.equal(widget.children[0].depth, 1);
  });

  test("throws on a {{tags}} block when it was given no tags, rather than show the placeholder", () => {
    const tree = { type: "root", children: [{ type: "code", lang: "html", value: TAGS_PLACEHOLDER }] };
    assert.throws(() => remarkSnippet({ snippet: "<script></script>" })(tree), /tags/);
  });

  test("throws without a snippet, so a misconfigured site fails to build", () => {
    assert.throws(() => remarkSnippet({}), /snippet/);
  });
});
