---
title: Installation on Weebly
sidebar_label: Weebly
---

This guide will help you add the XAPP widgets to every page of your Weebly site using the site-wide Footer Code setting.

## Prerequisites

- Access to your Weebly site editor
- Your unique script snippet or widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Open Your Site Editor**

   - Log in to Weebly and click `Edit Site`.

2. **Go to SEO Settings**

   - Click `Settings` at the top of the editor, then select `SEO`.
   - If your editor has no `Settings` tab, look for the site's SEO settings under `Website` in your site dashboard instead.

3. **Insert the JavaScript Snippets in Footer Code**

   - Paste the following snippets into the `Footer Code` box. Code here is added just before the closing `</body>` tag on every page.

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

4. **Save Your Changes**

   - Click `Save`.

5. **Publish Your Site**

   - Click `Publish` in the top right of the editor. Changes to header and footer code don't go live until you publish.

6. **Verify Installation**

   - Open your live site in a new browser tab (or a private window, so you are not seeing a cached copy).
   - Look for the chat button in the bottom corner of the page. If you installed the Form / Scheduler snippet, check that your Book button appears and opens the scheduler.
   - Visit a second page to confirm the widgets load site-wide.

## Troubleshooting

- **Widget Not Appearing**: Make sure the snippet is in the site-wide `Footer Code` box under `Settings` > `SEO` (not a single page's SEO settings) and that you published after saving.
- **Script Errors**: Check your browser's console for JavaScript errors, and confirm the key in the snippet matches the one in Studio.

## References

- [Weebly Support - Site Settings](https://www.weebly.com/app/help/us/en/topics/site-settings)

For additional support, reach out to XAPP support.
