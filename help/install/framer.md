---
title: Installation on Framer
sidebar_label: Framer
---

## Prerequisites

- Access to your Framer site editor
- Your unique script snippet or widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Open your Site Editor**

2. **Go to Project Site Settings**

   - Click Open Settings

<div className="centered-image-container">
<img src="/img/install/framer/framer-site-settings.png" alt="Framer Site Settings"/>
</div>

3. **Scroll down to the custom code section**

<div className="centered-image-container">
<img src="/img/install/framer/framer-custom-code.png" alt="Framer Custom Code"/>
</div>

4. **Add the JavaScript Snippets**

   - Paste in the snippets to the end of the body tag:

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

6. **Verify Installation**

   - Navigate to your site and verify the chat widget appears on the page.

## References

- [Framer - Add Custom Code globally or to a single page](https://www.framer.com/academy/lessons/custom-code)
