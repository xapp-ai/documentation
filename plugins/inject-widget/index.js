module.exports = async function myPlugin(context, options) {
  // ...
  return {
    name: "inject-widget",
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
              id: "xapp-js",
              src: "https://widget.xapp.ai/xapp-chat-widget.js?key=40a4bbca-bc93-453b-b151-0c63beb97ffb",
            },
          },
        ],
      };
    },
  };
};
