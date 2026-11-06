---
title: Any website
---

# Add the website widget to your site

These steps work for almost any website where you, or your web person, can edit the site's HTML.

## Before you start

- You need access to edit your website's HTML or page template.

## Steps

1. Open the HTML of your website, or the shared template or footer that every page uses.

2. Find the closing `</body>` tag.

3. Paste the code below just before the closing `</body>` tag:

   ```html
   {{snippet}}
   ```

   It needs to be on every page where you want the widget to appear. If your site has a shared footer or layout file, paste it there once.

4. Save your changes. If your site is hosted on a server, upload the updated file.

## Check it worked

Visit your website. The widget button should appear on the page. It can take a few minutes to show up; if you don't see it, clear your browser cache or open the site in a private window.

## Troubleshooting

- **Widget not appearing**: make sure the code was pasted exactly as provided, just before `</body>`, and that the change was saved and uploaded.
- **Only some pages show it**: the code is on those pages only. Add it to the shared template or footer so every page gets it.
- **Still nothing**: open your browser's developer console and look for script errors on the page.
