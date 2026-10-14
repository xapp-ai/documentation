---
title: Installation on Webflow
sidebar_label: Webflow
---

:::important

**Note**: Webflow only allows custom code on sites with a paid **Site plan** (or sites in a paid Core, Growth, Agency or Freelancer Workspace). Free Starter sites cannot add custom code.

:::

This guide will help you add the XAPP widgets to every page of your Webflow site using the site-wide Footer code setting.

## Prerequisites

- Site manager or Designer access to your Webflow site
- A paid Webflow Site plan or eligible Workspace plan
- Your unique script snippet or widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Open Your Site Settings**

   - From the Webflow Dashboard, open your site's `Site settings` (you can also reach them from the Webflow menu inside the Designer).

2. **Select the Custom Code Tab**

   - Click the `Custom code` tab.

3. **Insert the JavaScript Snippets in Footer Code**

   - Paste the following snippets into the `Footer code` section. Code in this section is added before the closing `</body>` tag on every page of your site.

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

   - Click `Save changes`.

5. **Publish Your Site**

   - Custom code only runs on the published site, not in the Designer canvas. Publish your site to your Webflow subdomain and/or custom domain.

6. **Verify Installation**

   - Open your live site in a new browser tab (or a private window, so you are not seeing a cached copy).
   - Look for the chat button in the bottom corner of the page. If you installed the Form / Scheduler snippet, check that your Book button appears and opens the scheduler.
   - Visit a second page to confirm the widgets load site-wide.

## Troubleshooting

- **Widget Not Appearing**: Confirm the snippet is in `Footer code` (not a single page's settings), that you clicked `Save changes`, and that you published afterward. Check your site plan if the Custom code tab is unavailable.
- **Script Errors**: Check your browser's console for JavaScript errors, and confirm the key in the snippet matches the one in Studio.

## References

- [Webflow - Custom code in head and body tags](https://help.webflow.com/hc/en-us/articles/33961357265299-Custom-code-in-head-and-body-tags)

For additional support, reach out to XAPP support.
