---
title: Chat Widget
sidebar_label: Chat Widget
---

## What is the chat widget channel?

The chat widget is a channel provided by OC Studio that you can customize and embed on your website.

## Connecting to a Backend

The chat widget requires a backend for it to communicate with. The widget has two primary modes of communication with a backend, either direct or through a web sockets server. The direct connection is expecting an endpoint that leverages stentor request & response models.

### Connecting to existing Lex Channel

If you have an existing Lex Channel with a PostText URL, you can use this as your chat widgets server.

When you copy and paste the URL, you must post-fix the PostText URL with `/studio` and select "Direct Connection". For example, if you have a PostText URL of:

```
https://kfo7ubarz9t0.execute-api.us-east-1.amazonaws.com/prod
```

Then you want to append `/studio` like so:

```
https://kfo7ubarz9t0.execute-api.us-east-1.amazonaws.com/prod/studio
```

## Installing the Widget

To install the widget, go to your chat widget channel within OC Studio and click the puzzle piece icon in the header. Click on the text to copy it to your clipboard.

It will look something like this:

```html
<script
  id="xapp-js"
  src="https://widget.xapp.ai/xapp-chat-widget.js?key=your-unique-key"
></script>
```

The loaded script is self-contained and does not rely on loading of other elements so it can be placed near the bottom of the page to ensure nothing is blocking on load.

Add this snippet just inside the `</body>` tag on the site you want the widget to appear on.

:::note
The script itself does not make any blocking network calls and does not depend on any other elements or scripts to load so you can safely place it anywhere. Placing it in right before the `</body>` tag as opposed to within the `<head>` tags provides a slight increase in page load.
:::

:::note
The script is hosted on a CDN however when making configuration updates, the first time loading the widget after a save will be slower than all subsequent calls as the cached scripted is invalidated and the cache updated.  
:::

## Configuring the Widget
