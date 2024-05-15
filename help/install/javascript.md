---
title: Manual Installation with Javascript
sidebar_label: Manual Installation
---

This guide provides step-by-step instructions on how to install the XAPP Chat Widget on your website using a JavaScript snippet. The key part of this process is placing the snippet right before the closing `</body>` tag in your website's HTML.

## Prerequisites

Before you begin, ensure you have the following:

- Access to your website's HTML code.
- Your unique `key` for the XAPP Chat Widget.

## Installation Steps

1. **Locate Your Unique Key**

   Each XAPP widget (Chat, Search, Form/Scheduler) requires a unique `key`. This key should have been provided to you by XAPP. It will be used in the JavaScript snippet to uniquely identify your widget.

2. **Insert the JavaScript Snippets**

   Insert the following JavaScript snippets into the HTML of your website. It is crucial to place the snippets just before the closing `</body>` tag for optimal performance.

   **Chat Snippet**

   ```html
   <script
     id="xapp-js"
     src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
   ></script>
   ```

   **Form / Scheduler Snippet**

   ```html
   <script
     id="xapp-form-js"
     src="https://form.xapp.ai/xapp-form-widget.js?key=YOUR_FORM_KEY"
   ></script>
   ```

   **Search Snippet**

   ```html
   <script
     id="xapp-search-js"
     src="https://search.xapp.ai/xapp-search-bar.js?key=YOUR_SEARCH_KEY"
   ></script>
   ```

   :::important
   For the **search** bar, you will also need to setup a button on your website to trigger the search bar pop over, please see these [instructions](/help/channels/intelligent-search#triggering-search-with-a-button-press).
   :::

3. **Save and Upload Changes**

   After inserting the snippets with your unique key, save the changes to your HTML file. If your website is hosted on a server, upload the modified file to your server.

4. **Verify Installation**

   Once uploaded, visit your website to ensure all installed widgets are visible and functioning correctly. If you encounter any issues, double-check the key and the placement of the snippet in your HTML file.

## Troubleshooting

- **Widget Not Appearing**: Ensure the snippet is placed correctly in your HTML and that the `key` is accurate.
- **Functionality Issues**: Check for any JavaScript errors in your browser's console that might be related to the widget.

For further assistance, contact XAPP support.
