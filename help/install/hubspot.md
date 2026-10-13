---
title: Installation on HubSpot CMS
sidebar_label: HubSpot CMS
---

This guide will help you add the XAPP widgets to every page of a website hosted on HubSpot (Content Hub) using the site-wide Site Footer HTML setting.

## Prerequisites

- A HubSpot user with **Website settings** permission
- Your website pages hosted on HubSpot
- Your unique script snippet or widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Open Your HubSpot Settings**

   - In your HubSpot account, click the settings (gear) icon in the top navigation bar.

2. **Go to Page Settings**

   - In the left sidebar menu, navigate to `Content` > `Pages`.

3. **Choose the Domain**

   - Use the `Choose a domain to edit its settings` dropdown. Keep the default settings to install on all of your domains, or select a specific domain.
   - If you selected a specific domain, click `Override default settings` in the `Site Footer HTML` section.

4. **Insert the JavaScript Snippets in Site Footer HTML**

   - Paste the following snippets into the `Site Footer HTML` field. This code is added near the closing `</body>` tag on the pages for that domain.

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

   - Click `Save` in the bottom left.

6. **Check Your Pages Are Live**

   - Site footer HTML is applied to your published pages. If the widget doesn't appear on a page after a few minutes, open that page in the editor and click `Update` to republish it.

7. **Verify Installation**

   - Open your live site in a new browser tab (or a private window, so you are not seeing a cached copy).
   - Look for the chat button in the bottom corner of the page. If you installed the Form / Scheduler snippet, check that your Book button appears and opens the scheduler.
   - Visit a second page to confirm the widgets load site-wide.

## Troubleshooting

- **Widget Not Appearing**: Confirm you saved the snippet for the right domain (a domain-level override replaces the default settings for that domain). Custom-coded templates must include the `{{ standard_footer_includes }}` tag for site footer HTML to load; HubSpot's standard themes include it.
- **Script Errors**: Check your browser's console for JavaScript errors, and confirm the key in the snippet matches the one in Studio.

## References

- [HubSpot - Use code snippets with HubSpot content](https://knowledge.hubspot.com/website-pages/add-code-to-the-head-or-footer-html-of-hubspot-content)

For additional support, reach out to XAPP support.
