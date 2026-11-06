---
title: WordPress
---

# Add the website widget to WordPress

The simplest way to add the widget to every page of a WordPress site is with a free header-and-footer code plugin.

## Before you start

- You need administrator access to your WordPress site.

## Steps

1. Log in to your WordPress admin dashboard.

2. In the left sidebar, go to `Plugins` > `Add New`.

3. Search for `WPCode`, then click `Install Now` on "WPCode – Insert Headers and Footers", and click `Activate`.

4. In the left sidebar, go to `Code Snippets` > `Header & Footer`.

5. Paste the code below into the `Footer` box:

   ```html
   {{snippet}}
   ```

6. Click `Save Changes`.

## Check it worked

Visit your website. The widget button should appear on every page. It can take a few minutes to show up; if you use a caching plugin, clear its cache, then reload the page in a private window.

## Troubleshooting

- **Widget not appearing**: make sure the code is in the `Footer` box (not the Header or Body box) and that you clicked `Save Changes`.
- **Still not appearing**: clear any caching plugin or hosting cache (for example WP Rocket, W3 Total Cache or your host's cache) and reload.
- **Can't install plugins**: you need an administrator account. Some managed WordPress plans also restrict plugins, so check with your host.
