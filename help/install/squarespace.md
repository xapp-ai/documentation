---
title: Installation on Squarespace
sidebar_label: Squarespace
---

This guide will assist you in adding the XAPP Chat Widget to your Squarespace website using a JavaScript snippet.

## Prerequisites

- Administrative access to your Squarespace account.
- Your unique `key` for the XAPP Chat Widget.

## Installation Steps

1. **Access Your Squarespace Website**

   - Log in to your Squarespace dashboard.
   - Navigate to `Website`.
  
  <div className="centered-image-container">
<img src="/img/install/squarespace/sq-sp-1.png" width="150px" height="150px" alt="Select website"/>
</div>

2. **Select Pages**

  <div className="centered-image-container">
<img src="/img/install/squarespace/sq-sp-2.png" width="150px" height="150px" alt="Select pages"/>
</div>

3. **Select Utilies -> Website Tools**

  <div className="centered-image-container">
<img src="/img/install/squarespace/sq-sp-3.png" width="150px" height="150px" alt="Select website tools"/>
</div>

4. **In the Custom code section, select Code Injection**

  <div className="centered-image-container">
<img src="/img/install/squarespace/sq-sp-4.png" width="150px" height="150px" alt="Select code injection"/>
</div>

5. **Insert the JavaScript Snippet in Code Injection**

   - Click on `Code Injection`.
   - In the `Footer` section, paste the following snippet:
     ```html
     <script
       id="xapp-js"
       src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
     ></script>
     ```

  <div className="centered-image-container">
<img src="/img/install/squarespace/sq-sp-5.png" width="250px" height="250px" alt="Inject Snippet"/>
</div>

6. **Save Your Changes**

   - Click `Save` to apply the changes.

7. **Verify Installation**
   - Refresh your website to ensure the XAPP Chat Widget is visible and functional.

## Troubleshooting

- **Widget Not Appearing**: Confirm that the code was entered correctly and in the `Footer` section.
- **Functionality Issues**: Check for any JavaScript errors in your browser's console.

For additional support or queries, contact XAPP support.
