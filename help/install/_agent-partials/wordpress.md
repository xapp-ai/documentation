---
title: WordPress
---

# Help AI assistants find your business on WordPress

AI assistants such as ChatGPT, Claude and Gemini can ask your business questions and send you leads directly, through a connection made for AI agents. When the website widget loads, it adds tags to your page that tell assistants where that connection is. Some assistants read a page without running its scripts, so they never see those tags. Adding the same tags to your site's page header reaches them too. Having the tags in both places does no harm: when the page already has them, the widget leaves them as they are.

## Before you start

- You need administrator access to your WordPress dashboard.

## Steps

1. Log in to your WordPress admin dashboard.

2. If you don't already have it, install the free `WPCode` plugin: go to `Plugins` > `Add New`, search for `WPCode`, click `Install Now` on "WPCode – Insert Headers and Footers", and click `Activate`.

3. In the left sidebar, go to `Code Snippets` > `Header & Footer`.

4. Paste the code below into the `Header` box:

   ```html
   {{tags}}
   ```

5. Click `Save Changes`.

## Check it worked

1. Open your website in a browser.
2. View the page source (`Ctrl+U` on Windows, `Option+Cmd+U` on a Mac).
3. Search for `mcp-server`. You should find it near the top of the page, in the header.

## Troubleshooting

- **The tags don't appear:** make sure you published or saved the change, then clear your browser cache and reload.
- **The tags are in the page body, not the header:** move them into the header setting, not a section or block on the page.
