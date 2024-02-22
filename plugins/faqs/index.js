module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: "faqs",
    async loadContent() {
      /* ... */
    },
    async contentLoaded({ content, actions }) {
      /* ... */
    },
    /* other lifecycle API */
    injectHtmlTags({ content }) {
      return {
        headTags: [],
        preBodyTags: [],
      };
    },
  };
};
