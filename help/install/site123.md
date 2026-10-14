---
title: Installation on SITE123
sidebar_label: SITE123
---

:::important

**Note**: SITE123 only allows plugins and custom code on a Premium plan. The free plan cannot add custom code.

:::

This guide will help you add the XAPP widgets to every page of your SITE123 website using a custom code plugin.

## Prerequisites

- Access to your SITE123 website editor
- A SITE123 Premium plan
- Your unique script snippet or widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Open Your Website Editor**

   - Log in to SITE123 and open the website you want to edit.

2. **Open the Plugins Settings**

   - In the editor, click `Settings` (the gear icon) and select `Plugins`.

3. **Add Custom Code**

   - Click `Add New` > `Add New Custom Code`.
   - Enter a name to identify the code (e.g., XAPP Widgets).
   - Set `Enable` to `Yes`.
   - Set the location to `Before closing the body tag`.

4. **Insert the JavaScript Snippets**

   - Paste the following snippets into the code editor exactly as shown, including the `<script>` tags:

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

5. **Save Your Changes**

   - Click `Save`.

6. **Publish Your Website**

   - If your editor shows a `Publish` button with pending changes, click it so the code goes live.

7. **Verify Installation**

   - Open your live site in a new browser tab (or a private window, so you are not seeing a cached copy).
   - Look for the chat button in the bottom corner of the page. If you installed the Form / Scheduler snippet, check that your Book button appears and opens the scheduler.
   - Visit a second page to confirm the widgets load site-wide.

## Troubleshooting

- **Widget Not Appearing**: Confirm the custom code entry is set to `Enable: Yes`, uses the `Before closing the body tag` location, and that you saved and published. Check your plan if you cannot add custom code.
- **Script Errors**: Check your browser's console for JavaScript errors, and confirm the key in the snippet matches the one in Studio.

## References

- [SITE123 - Add Plugins or Custom Code](https://www.site123.com/support/7168957-add-plugins-or-custom-code)

For additional support, reach out to XAPP support.
