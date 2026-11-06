---
title: Wix
---

# Add the website widget to Wix

## Before you start

- You need access to your Wix site's dashboard.
- Your site must be on a paid Wix plan, published, and connected to a custom domain. Free Wix sites do not support custom code.

## Steps

1. Log in to Wix and open your site's dashboard.

2. Go to `Settings`, then under the Advanced section choose `Custom code`.

3. Click `+ Add Custom Code` at the top right.

4. Paste the code below into the code box:

   ```html
   {{snippet}}
   ```

5. Set up the code:

   - Give it a name, for example "Website widget".
   - Under "Add Code to Pages", choose `All pages` and `Load code once`.
   - Under "Place Code in", choose `Body - end`.

6. Click `Apply`, then publish your site so the change goes live.

## Check it worked

Visit your live site (not the editor preview). The widget button should appear on the page. It can take a few minutes to show up; if you don't see it, clear your browser cache or open the site in a private window.

## Troubleshooting

- **Widget not appearing**: check that the custom code was saved, is set to `All pages` and `Body - end`, and that you published the site.
- **No Custom code option**: custom code needs a paid plan with a connected domain.
- **Still nothing**: open your browser's developer console and look for script errors on the page.
