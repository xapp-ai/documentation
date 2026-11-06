---
title: Shopify
---

# Add the website widget to Shopify

## Before you start

- You need access to your Shopify admin with permission to edit themes.

## Steps

1. In your Shopify admin, go to `Online Store` > `Themes`.

2. Find your current theme and click `Actions` (or the `...` button) > `Edit code`.

3. Under Layout, open the `theme.liquid` file.

4. Find the closing `</body>` tag near the bottom of the file.

5. Paste the code below just before the closing `</body>` tag:

   ```html
   {{snippet}}
   ```

6. Click `Save`.

## Check it worked

Visit your store. The widget button should appear on the page. It can take a few minutes to show up; if you don't see it, clear your browser cache or open the store in a private window.

## Troubleshooting

- **Widget not appearing**: make sure the code is just before `</body>` in `theme.liquid` of your published theme, and that you clicked `Save`.
- **Theme conflicts**: some themes or apps add scripts that interfere with new widgets. Check your browser's developer console for script errors.
- **Changed themes**: if you publish a different theme later, add the code to that theme's `theme.liquid` too.
