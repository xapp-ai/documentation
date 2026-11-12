---
title: Any website
---

# Help AI assistants find your business on your website

AI assistants such as ChatGPT, Claude and Gemini can ask your business questions and send you leads directly, through a connection made for AI agents. When the website widget loads, it adds tags to your page that tell assistants where that connection is. Some assistants read a page without running its scripts, so they never see those tags. Adding the same tags to your site's page header reaches them too. Having the tags in both places does no harm: when the page already has them, the widget leaves them as they are.

## Steps

1. Open the HTML of your website, or the shared template or header that every page uses.

2. Find the closing `</head>` tag.

3. Paste the code below just before the closing `</head>` tag:

   ```html
   {{tags}}
   ```

   It needs to be on every page. If your site has a shared header or layout file, paste it there once.

4. Save your changes. If your site is hosted on a server, upload the updated file.

## Check it worked

1. Open your website in a browser.
2. View the page source (`Ctrl+U` on Windows, `Option+Cmd+U` on a Mac).
3. Search for `mcp-server`. You should find it near the top of the page, in the header.

## Troubleshooting

- **The tags don't appear:** make sure you published or saved the change, then clear your browser cache and reload.
- **The tags are in the page body, not the header:** move them into the header setting, not a section or block on the page.
