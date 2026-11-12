---
title: Wix
---

# Help AI assistants find your business on Wix

AI assistants such as ChatGPT, Claude and Gemini can ask your business questions and send you leads directly, through a connection made for AI agents. When the website widget loads, it adds tags to your page that tell assistants where that connection is. Some assistants read a page without running its scripts, so they never see those tags. Adding the same tags to your site's page header reaches them too. Having the tags in both places does no harm: when the page already has them, the widget leaves them as they are.

## Before you start

- You need access to your Wix site's dashboard.
- Your site must be on a paid Wix plan, published, and connected to a custom domain. Free Wix sites do not support custom code.

## Steps

1. Log in to Wix and open your site's dashboard.

2. Go to `Settings`, then under the Advanced section choose `Custom code`.

3. Click `+ Add Custom Code` at the top right.

4. Paste the code below into the code box:

   ```html
   {{tags}}
   ```

5. Set up the code:

   - Give it a name, for example "AI assistant tags".
   - Under "Add Code to Pages", choose `All pages` and `Load code once`.
   - Under "Place Code in", choose `Head`.

6. Click `Apply`, then publish your site so the change goes live.

## Check it worked

1. Open your website in a browser.
2. View the page source (`Ctrl+U` on Windows, `Option+Cmd+U` on a Mac).
3. Search for `mcp-server`. You should find it near the top of the page, in the header.

## Troubleshooting

- **The tags don't appear:** make sure you published or saved the change, then clear your browser cache and reload.
- **The tags are in the page body, not the header:** move them into the header setting, not a section or block on the page.
