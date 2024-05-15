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

3. **Insert the JavaScript Snippets**

   - Add the following snippets just before the closing `</body>` tag:

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

4. **Save the Changes**

   - Click `Save` to apply your changes.

5. **Verify Installation**
   - Preview your store to check if the XAPP Chat Widget is appearing correctly.

## Troubleshooting

- **Widget Not Displaying**: Confirm the snippet's placement and the correct key.
- **Check for Theme Conflicts**: Some themes may have specific settings or scripts that interfere with new widgets.

For further assistance, contact XAPP support.
