module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: "inject-search",
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
        preBodyTags: [
          {
            tagName: "script",
            attributes: {
              id: "xapp-search-js",
              src: "https://search.xapp.ai/xapp-search-bar.js?key=baefaf35-7e48-42d7-b365-a9ed48c92027",
            },
          },
        ],
      };
    },
  };
};
