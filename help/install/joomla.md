---
title: Installation on Joomla
sidebar_label: Joomla
---

This guide will walk you through the process of adding the XAPP Chat Widget to your Joomla website. It's important to place the JavaScript snippet right before the closing `</body>` tag in your Joomla template or module to ensure it appears on every page.

## Prerequisites

- Administrative access to your Joomla site.
- Your unique `key` for the XAPP Chat Widget.

## Installation Steps

### Option 1: Adding to the Template

1. **Access the Template Editor**

   - Log in to your Joomla administrator panel.
   - Navigate to `Extensions` > `Templates` > `Templates`.
   - Click on your current template's name to edit it.

2. **Edit the HTML**

   - In the template editor, locate the `index.php` file.
   - Scroll to the bottom of this file and find the closing `</body>` tag.

3. **Insert the JavaScript Snippets**

   - Insert the following snippets just before the closing `</body>` tag:

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

4. **Save Changes**
   - Click `Save` or `Save & Close` to apply the changes.

### Option 2: Using a Custom HTML Module

1. **Create a New Module**

   - Navigate to `Extensions` > `Modules`.
   - Click `New` and select `Custom HTML`.

2. **Add the JavaScript Snippet**

   - In the Custom HTML module, paste the JavaScript snippet:
     ```html
     <script
       id="xapp-js"
       src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_UNIQUE_KEY"
     ></script>
     ```
   - Replace `YOUR_UNIQUE_KEY` with your provided key.

3. **Configure the Module**

   - Assign the module to a position that is active on all pages, typically `debug` or a similar position.
   - Set the status to `Published`.
   - Assign to `All Pages` under `Menu Assignment`.

4. **Save and Publish**
   - Click `Save` or `Save & Close` to activate the module.

## Verifying the Installation

- Visit your website to confirm the XAPP Chat Widget appears and functions correctly on all pages.
- If the widget does not appear, check if the unique key is correctly inserted and if the module/template changes are saved.

## Troubleshooting

- **Widget Not Displaying**: Ensure the module is published, assigned to all pages, and the `key` is correct.
- **Check for Conflicts**: Sometimes, other extensions or scripts can conflict with the widget. Check for JavaScript errors in the browser's console.

For further assistance or if you encounter any issues, contact XAPP support.
