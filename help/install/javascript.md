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

   Each XAPP Chat Widget requires a unique `key`. This key should have been provided to you by XAPP. It will be used in the JavaScript snippet to uniquely identify your widget.

2. **Insert the JavaScript Snippet**

   Insert the following JavaScript snippet into the HTML of your website. It is crucial to place this snippet just before the closing `</body>` tag for optimal performance.

   ```html
   <script
     id="xapp-js"
     src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_UNIQUE_KEY"
   ></script>
   ```

   Replace `YOUR_UNIQUE_KEY` with the unique key you obtained in the previous
   step.

3. **Save and Upload Changes**

   After inserting the snippet with your unique key, save the changes to your HTML file. If your website is hosted on a server, upload the modified file to your server.

4. **Verify Installation**

   Once uploaded, visit your website to ensure the XAPP Chat Widget is visible and functioning correctly. If you encounter any issues, double-check the key and the placement of the snippet in your HTML file.

## Troubleshooting

- **Widget Not Appearing**: Ensure the snippet is placed correctly in your HTML and that the `key` is accurate.
- **Functionality Issues**: Check for any JavaScript errors in your browser's console that might be related to the widget.

For further assistance, contact XAPP support.
