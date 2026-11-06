---
title: Drupal
---

# Add the website widget to Drupal

## Before you start

- You need administrator access to your Drupal site.

## Steps

1. Log in to your Drupal admin panel.

2. Go to `Appearance` and click `Settings` for your active theme.

3. Find the theme's option for adding custom JavaScript or HTML.

4. Paste the code below:

   ```html
   {{snippet}}
   ```

5. Save your changes.

6. Clear your site's cache from `Configuration` > `Performance`.

## Check it worked

Visit your website. The widget button should appear on the page. It can take a few minutes to show up; if you don't see it, clear your browser cache or open the site in a private window.

## Troubleshooting

- **Widget not appearing**: make sure the code was saved and that you cleared the cache under `Configuration` > `Performance`.
- **Script conflicts**: other modules can interfere with new scripts. Check your browser's developer console for script errors.
