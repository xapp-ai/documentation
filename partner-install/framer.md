---
title: Framer
---

# Add the website widget to Framer

## Before you start

- You need access to your Framer project.

## Steps

1. Open your project in the Framer editor.

2. Open the project's Site Settings.

3. Scroll down to the `Custom Code` section.

4. Paste the code below into the "End of `<body>` tag" box:

   ```html
   {{snippet}}
   ```

5. Save, then publish your site so the change goes live.

## Check it worked

Visit your live site. The widget button should appear on the page. It can take a few minutes to show up; if you don't see it, clear your browser cache or open the site in a private window.

## Troubleshooting

- **Widget not appearing**: make sure the code is in the end-of-body box (not the head) and that you published the site.
- **Still nothing**: open your browser's developer console and look for script errors on the page.
