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
              src: "https://widget.xapp.ai/xapp-chat-widget.js?key=32046c1c-e65a-42ef-8653-e8f6038f369b",
            },
          },
        ],
      };
    },
  };
};
