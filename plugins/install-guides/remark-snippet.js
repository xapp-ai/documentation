const path = require("node:path");

const { AGENT_PARTIALS_DIR, SNIPPET_PLACEHOLDER, TAGS_PLACEHOLDER } = require("./guides");

/**
 * Fills the install guides' {{snippet}} code block with our own script tags, so a help page that
 * imports a partner guide shows the same steps with the code our customers paste. The agent
 * guides' {{tags}} block is filled with `tags` the same way; a {{tags}} block without them fails
 * the build rather than show the placeholder.
 */
module.exports = function remarkSnippet(options = {}) {
  if (!options.snippet) {
    throw new Error("remark-snippet needs a snippet option");
  }
  // An agent guide is embedded under its platform's widget guide, whose title is the page's.
  const demote = (node) => {
    if (node.type === "heading") {
      node.depth = Math.min(node.depth + 1, 6);
    }
    (node.children || []).forEach(demote);
  };
  return (tree, file) => {
    visit(tree);
    if (file && file.path && path.resolve(String(file.path)).startsWith(AGENT_PARTIALS_DIR + path.sep)) {
      demote(tree);
    }
  };

  function visit(node) {
    if (node.type === "code" && node.value.trim() === SNIPPET_PLACEHOLDER) {
      node.value = options.snippet;
    } else if (node.type === "code" && node.value.trim() === TAGS_PLACEHOLDER) {
      if (!options.tags) {
        throw new Error("remark-snippet needs a tags option for a page with a {{tags}} block");
      }
      node.value = options.tags;
    }
    (node.children || []).forEach(visit);
  }
};
