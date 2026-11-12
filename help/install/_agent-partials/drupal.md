---
title: Drupal
---

# Help AI assistants find your business on Drupal

AI assistants such as ChatGPT, Claude and Gemini can ask your business questions and send you leads directly, through a connection made for AI agents. When the website widget loads, it adds tags to your page that tell assistants where that connection is. Some assistants read a page without running its scripts, so they never see those tags. Adding the same tags to your site's page header reaches them too. Having the tags in both places does no harm: when the page already has them, the widget leaves them as they are.

## Before you start

- You need access to your site's theme files, or a web developer who has it.

## Steps

1. Open your active theme's folder and find the `html.html.twig` template in its `templates` folder. If your theme doesn't have one, copy it from your base theme first.

2. Find the closing `</head>` tag.

3. Paste the code below just before the closing `</head>` tag:

   ```html
   {{tags}}
   ```

4. Save the file and upload it to your site.

5. Clear your site's cache from `Configuration` > `Performance`.

## Check it worked

1. Open your website in a browser.
2. View the page source (`Ctrl+U` on Windows, `Option+Cmd+U` on a Mac).
3. Search for `mcp-server`. You should find it near the top of the page, in the header.

## Troubleshooting

- **The tags don't appear:** make sure you published or saved the change, then clear your browser cache and reload.
- **The tags are in the page body, not the header:** move them into the header setting, not a section or block on the page.
