---
title: Installation on Shopify
sidebar_label: Shopify
---

This guide will help you add the XAPP Chat Widget to your Shopify store.

## Prerequisites

- Access to your Shopify admin panel.
- Your unique `key` for the XAPP Chat Widget.

## Installation Steps

1. **Edit Your Theme**

   - In your Shopify admin, go to `Online Store` > `Themes`.
   - Find your current theme and click `Actions` > `Edit code`.

2. **Modify the Theme.liquid File**

   - In the theme editor, open the `theme.liquid` file.
   - Find the closing `</body>` tag.

3. **Insert the JavaScript Snippet**

   - Add the following snippet just before the closing `</body>` tag:
     ```html
     <script
       id="xapp-js"
       src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
     ></script>
     ```

4. **Save the Changes**

   - Click `Save` to apply your changes.

5. **Verify Installation**
   - Preview your store to check if the XAPP Chat Widget is appearing correctly.

## Troubleshooting

- **Widget Not Displaying**: Confirm the snippet's placement and the correct key.
- **Check for Theme Conflicts**: Some themes may have specific settings or scripts that interfere with new widgets.

For further assistance, contact XAPP support.
