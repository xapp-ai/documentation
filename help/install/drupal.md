---
title: Installation on Drupal
sidebar_label: Drupal
---

This guide explains how to add the XAPP Chat Widget to your Drupal website using a JavaScript snippet.

## Prerequisites

- Administrative access to your Drupal site.
- Your unique `key` for the XAPP Chat Widget.

## Installation Steps

1. **Access the Theme Settings**

   - Log in to your Drupal admin panel.
   - Navigate to `Appearance` and click on the 'Settings' of your active theme.

2. **Add the JavaScript Snippets**

   - In the theme settings, look for an option to add custom JavaScript or HTML.

   - Insert the following snippets:

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

3. **Save and Clear Cache**

   - After adding the snippet, save the changes.
   - Clear your site's cache from `Configuration` > `Performance`.

4. **Verify Installation**
   - Visit your site to ensure the XAPP Chat Widget appears and functions correctly.

## Troubleshooting

- **Widget Not Displaying**: Ensure the snippet is correctly added and the cache is cleared.
- **Check for Conflicts**: Look for JavaScript conflicts or errors in the browser's console.

For further assistance, contact XAPP support.
