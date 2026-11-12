---
title: Shopify
---

# Help AI assistants find your business on Shopify

AI assistants such as ChatGPT, Claude and Gemini can ask your business questions and send you leads directly, through a connection made for AI agents. When the website widget loads, it adds tags to your page that tell assistants where that connection is. Some assistants read a page without running its scripts, so they never see those tags. Adding the same tags to your site's page header reaches them too. Having the tags in both places does no harm: when the page already has them, the widget leaves them as they are.

## Steps

1. In your Shopify admin, go to `Online Store` > `Themes`.

2. Find your current theme and click `Actions` (or the `...` button) > `Edit code`.

3. Under Layout, open the `theme.liquid` file.

4. Find the closing `</head>` tag near the top of the file.

5. Paste the code below just before the closing `</head>` tag:

   ```html
   {{tags}}
   ```

6. Click `Save`.

## Check it worked

1. Open your website in a browser.
2. View the page source (`Ctrl+U` on Windows, `Option+Cmd+U` on a Mac).
3. Search for `mcp-server`. You should find it near the top of the page, in the header.

## Troubleshooting

- **The tags don't appear:** make sure you published or saved the change, then clear your browser cache and reload.
- **The tags are in the page body, not the header:** move them into the header setting, not a section or block on the page.
