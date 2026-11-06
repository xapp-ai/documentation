const fs = require("node:fs");
const path = require("node:path");

/**
 * The white-label install guides: one Markdown partial per website platform in
 * help/install/_partials. The help pages import them, and the build writes each one to
 * /help/install/<platform>/guide.json for the partner API to embed. See the README there.
 */
const PARTIALS_DIR = path.join(__dirname, "../../help/install/_partials");

const SNIPPET_PLACEHOLDER = "{{snippet}}";

/** Our names, which must never reach a partner's customer. */
const BRAND = /xapp|studio|stentor/i;

/** A screenshot on a line of its own: shown on the help page, dropped from guide.json. */
const IMAGE_LINE = /^[ \t]*!\[[^\]]*\]\([^)]*\)[ \t]*$/gm;

function parseGuide(source) {
  const match = /^---\n([\s\S]*?)\n---\n/.exec(source);
  if (!match) {
    throw new Error("no front matter");
  }
  const title = /^title:\s*(.+?)\s*$/m.exec(match[1]);
  if (!title) {
    throw new Error("no title in front matter");
  }
  return { title: title[1], body: source.slice(match[0].length).trim() };
}

function toPartnerMarkdown(body) {
  return body
    .replace(IMAGE_LINE, "")
    .replace(/\n[ \t]*(\n[ \t]*)+\n/g, "\n\n")
    .trim();
}

function withoutCode(markdown) {
  return markdown.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
}

/** Every way the guide would break white-label or read badly in an email. Empty when fine. */
function validateGuide(platform, markdown) {
  const problems = [];
  if (!/^[a-z0-9-]+$/.test(platform)) {
    problems.push(`platform slug "${platform}" must be lowercase letters, digits and dashes`);
  }
  const placeholders = markdown.split(SNIPPET_PLACEHOLDER).length - 1;
  const fenced = /```html\n[ \t]*\{\{snippet\}\}\n[ \t]*```/.test(markdown);
  if (placeholders !== 1 || !fenced) {
    problems.push("needs exactly one {{snippet}}, alone in an ```html block");
  }
  if (BRAND.test(markdown)) {
    problems.push(`mentions a brand name (${BRAND.exec(markdown)[0]})`);
  }
  const prose = withoutCode(markdown);
  if (/!\[/.test(prose)) {
    problems.push("has an image that is not on a line of its own");
  } else if (/\]\(/.test(prose)) {
    problems.push("has a link");
  }
  if (/<\/?[A-Za-z][^>]*>/.test(prose)) {
    problems.push("has an HTML or JSX tag outside code");
  }
  if (/^\s*:::/m.test(prose)) {
    problems.push("has an admonition (:::)");
  }
  return problems;
}

function loadGuides(dir = PARTIALS_DIR) {
  const files = fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && file !== "README.md")
    .sort();
  const problems = [];
  const guides = [];
  for (const file of files) {
    const platform = path.basename(file, ".md");
    try {
      const { title, body } = parseGuide(fs.readFileSync(path.join(dir, file), "utf8"));
      const markdown = toPartnerMarkdown(body);
      problems.push(...validateGuide(platform, markdown).map((problem) => `${file}: ${problem}`));
      guides.push({ platform, title, markdown });
    } catch (error) {
      problems.push(`${file}: ${error.message}`);
    }
  }
  if (problems.length) {
    throw new Error(`Install guides break the white-label rules:\n  ${problems.join("\n  ")}`);
  }
  return guides;
}

function writeGuideFiles(outDir, guides, commit) {
  const installDir = path.join(outDir, "help/install");
  const index = { commit, guides: [] };
  for (const guide of guides) {
    const dir = path.join(installDir, guide.platform);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "guide.json"), `${JSON.stringify({ ...guide, commit }, null, 2)}\n`);
    index.guides.push({
      platform: guide.platform,
      title: guide.title,
      path: `/help/install/${guide.platform}/guide.json`,
    });
  }
  fs.mkdirSync(installDir, { recursive: true });
  fs.writeFileSync(path.join(installDir, "guides.json"), `${JSON.stringify(index, null, 2)}\n`);
}

module.exports = {
  PARTIALS_DIR,
  SNIPPET_PLACEHOLDER,
  loadGuides,
  parseGuide,
  toPartnerMarkdown,
  validateGuide,
  writeGuideFiles,
};
