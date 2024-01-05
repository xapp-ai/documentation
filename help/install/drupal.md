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

2. **Add the JavaScript Snippet**

   - In the theme settings, look for an option to add custom JavaScript or HTML.
   - Insert the following snippet:
     ```html
     <script
       id="xapp-js"
       src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
     ></script>
     ```
     
3. **Save and Clear Cache**

   - After adding the snippet, save the changes.
   - Clear your site's cache from `Configuration` > `Performance`.

4. **Verify Installation**
   - Visit your site to ensure the XAPP Chat Widget appears and functions correctly.

## Troubleshooting

- **Widget Not Displaying**: Ensure the snippet is correctly added and the cache is cleared.
- **Check for Conflicts**: Look for JavaScript conflicts or errors in the browser's console.

For further assistance, contact XAPP support.
