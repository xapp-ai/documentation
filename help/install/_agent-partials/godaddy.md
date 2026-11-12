---
title: GoDaddy Website Builder
---

# Help AI assistants find your business on GoDaddy Website Builder

AI assistants such as ChatGPT, Claude and Gemini can ask your business questions and send you leads directly, through a connection made for AI agents. When the website widget loads, it adds tags to your page that tell assistants where that connection is.

On other platforms you can also add these tags to the page header, for assistants that read a page without running its scripts. GoDaddy Website Builder doesn't allow code in the page header: custom code only goes in a section on a page. So there is nothing to add here. The website widget's own tags do the job.

## What to do

Make sure the website widget is installed and showing on your site. That is all GoDaddy Website Builder needs.

## Check it worked

1. Open your website in a browser and wait for the website widget to appear.
2. Open the browser's developer tools (`F12` on Windows, `Option+Cmd+I` on a Mac) and look at the `Elements` tab.
3. Search for `mcp-server`. You should find it inside the page's `<head>`, added by the widget.

## Troubleshooting

- **No `mcp-server` tag:** check that the website widget appears on your site. The tags come with it, so if the widget isn't loading, they aren't there either.
- **You searched the page source instead:** the page source shows the page before its scripts run, so it won't have the widget's tags. Use the developer tools as above.
