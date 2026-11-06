---
title: Joomla
---

# Add the website widget to Joomla

The code needs to go just before the closing `</body>` tag so the widget appears on every page.

## Before you start

- You need administrator access to your Joomla site.

## Steps

1. Log in to your Joomla administrator panel.

2. Go to `Extensions` > `Templates` > `Templates`, and click your current template's name to edit it.

3. Open the `index.php` file and scroll to the closing `</body>` tag at the bottom.

4. Paste the code below just before the closing `</body>` tag:

   ```html
   {{snippet}}
   ```

5. Click `Save` or `Save & Close`.

If you would rather not edit the template, you can paste the same code into a module instead: go to `Extensions` > `Modules`, click `New`, choose `Custom HTML`, paste the code, assign the module to a position that is active on all pages (such as `debug`), set the status to `Published`, set `Menu Assignment` to `On all pages`, and click `Save & Close`.

## Check it worked

Visit your website. The widget button should appear on every page. It can take a few minutes to show up; if you don't see it, clear your browser cache or open the site in a private window.

## Troubleshooting

- **Widget not appearing**: make sure the template change was saved, or that the module is published and assigned to all pages.
- **Some editors strip the code**: if you used a Custom HTML module and the code disappeared after saving, your text editor may be removing scripts. Switch the editor to `None` or `CodeMirror` for that module, or use the template method.
- **Script conflicts**: other extensions can interfere with new scripts. Check your browser's developer console for script errors.
