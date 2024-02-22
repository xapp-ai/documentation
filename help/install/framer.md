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

4. **Add the JavaScript Snippet**

   - Paste in the snippet to the end of the body tag

     ```html
     <script
       id="xapp-js"
       src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
     ></script>
     ```

5. **Update and Publish**

6. **Verify Installation**

   - Navigate to your site and verify the chat widget appears on the page.

## References

- [Framer - Add Custom Code globally or to a single page](https://www.framer.com/academy/lessons/custom-code)
