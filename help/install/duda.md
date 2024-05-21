---
title: Installation on Duda
sidebar_label: Duda
---

## Prerequisites

- Access to your Duda site editor

- Your unique script snippet or widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Open your Site Editor**

2. **Click Widgets on the left side**

3. **Search and select HTML**

   - In the widgets panel, search for and select the HTML panel

4. **Add the JavaScript Snippets**

   - In the HTML Content panel, paste in the snippet

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

5. **Update and Publish**

   - Click update to close out the HTML content panel
   - Click Republish to update your live site

6. **Verify Installation**

   - Visit your site and look for the chat widget button at the bottom of the page.

## References

- [Duda Support - I have custom code, where do I place it?](https://support.duda.co/hc/en-us/articles/4410652583191-I-Have-Custom-Code-Where-Do-I-Place-It)
