const { SNIPPET_PLACEHOLDER, TAGS_PLACEHOLDER } = require("./guides");

/**
 * Fills the install guides' {{snippet}} code block with our own script tags, so a help page that
 * imports a partner guide shows the same steps with the code our customers paste.
 */
module.exports = function remarkSnippet(options = {}) {
  if (!options.snippet) {
    throw new Error("remark-snippet needs a snippet option");
  }
  const visit = (node) => {
    if (node.type === "code" && node.value.trim() === SNIPPET_PLACEHOLDER) {
      node.value = options.snippet;
    } else if (node.type === "code" && options.tags && node.value.trim() === TAGS_PLACEHOLDER) {
      node.value = options.tags;
    }
    (node.children || []).forEach(visit);
  };
  return visit;
};
