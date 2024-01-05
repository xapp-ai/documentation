---
title: Website Chat
sidebar_label: Website Chat
---

## Installation

You can find our installation guides [here](/help/install), all of them require either copy pasting a line of code or your widget's key. Both of these can be found on your chat widgets settings page, then click the puzzle piece in the header.

   <div className="centered-image-container">
   <img src="/img/channel/widget/chat-widget-installation-snippet.png" alt="Widget Key"/>
   </div>

The key is used primarily for the [WordPress plugin](/help/install/wordpress) and the script snippet is used for all others.

:::important

This documentation is dynamic, in some cases you unique snippet will be presented to you in the installation guides. It will be noted below the snippet if it is unique to you or if you need to modify it.

:::

## Customization

All customization can be done from within Studio. Once you save, the changes will be made immediately however you will need to refresh your website to see the changes.

### Theme Color

You can quickly change the theme color which will set a default color for many parts of the widget at once. For most, this is all you need to do.

   <div className="centered-image-container">
   <img src="/img/channel/widget/chat-widget-change-color.gif" alt="Change Widget Color"/>
   </div>

You can then override specific parts, such as header or footer colors, to your liking by digging into the individual elements and changing those.

You can set the color with RGB, HSL, or HEX values. You can even select the color picker to select parts of the screen. This is helpul to quickly match the colors already on your website.

### Z-Index

You may find that the widget is hidden or partially obstructed by other elements on your website. To fix this, you can try increasing the Z-Index, or the height of the button on the page, to move the button in front of the obstruction.

### Size

The size of the opened widget can be changed to your liking. Expand the Size, click "Override" and adjust the width and height accordingly.

### Button Position

You may have other widgets installed and occupying the bottom right corner of your website (the default position of the button). You can make adjustments to the button to account for this interference.

   <div className="centered-image-container">
   <img src="/img/channel/widget/widget-button-overlap.png" alt="Change Widget Preview"/>
   </div>

The following settings, overriding bottom margin to 80px, will move the button up and should be sufficient to overcome the above obstruction.

   <div className="centered-image-container">
   <img src="/img/channel/widget/chat-widget-adjust-button-position.png" alt="Change Widget Preview"/>
   </div>

## Advanced Customization

### Auto-open the Widget

You can make the chat widget auto-open by page width or by matching specific pages of your website.

Click the widget button settings in the header and you will then see numerous options. At the top are the auto-open settings.

   <div className="centered-image-container">
   <img src="/img/channel/widget/chat-widget-auto-open-settings.png" alt="Change Widget Preview"/>
   </div>

The first field, when set, will auto-open the chat widget when the provided width of the website is met. A value of 600 will auto-open the widget on tablets and desktop widths but not mobile.

The second field, as configured in the screenshot, will always auto-open when on the [xapp.ai/about](https://xapp.ai/about) page. This configuration can be helpful for about or contact us pages where you would prefer the visitor uses the widget to communicate.

## Preview and Sharing

You can preview your widget by clicking the preview link, which will open a new tab with the widget as it would appear on a website. This link can be shared for testing and feedback purposes and does not require a Studio login.

   <div className="centered-image-container">
   <img src="/img/channel/widget/chat-widget-preview-link.png" alt="Change Widget Preview"/>
   </div>

## Disabling

You may temporarily disable the widget on your website from Studio, which will stop the chat button from displaying and make it inaccessible to users.

   <div className="centered-image-container">
   <img src="/img/channel/widget/chat-widget-disable.png" alt="Change Widget Disable"/>
   </div>

Once disabled, the button will change from green to red.

   <div className="centered-image-container">
   <img src="/img/disable-the-widget.gif" alt="Change Widget Disable"/>
   </div>

## Additional Resources

- [Advanced Chat Widget Documentation](/docs/channels/channel-chat-widget)
