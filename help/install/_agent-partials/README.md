# Agent install guides

White-label guides for adding the MCP discovery tags to a website's `<head>`, one Markdown partial per website platform. They pair with the widget guides in `../_partials`: same platforms, same slugs, same rules (see that README). The differences:

- The placeholder is a fenced `html` block whose only content is `{{tags}}`. The help pages fill it with the three `<link rel="mcp-…">` tags using `YOUR_APP_ID`, which `?appId=` fills in. The partner API fills it with the business's own tags.
- A platform with nowhere to put head code may have no placeholder and say so instead (`godaddy.md`). The widget adds the tags itself either way.
- The build writes each one to `/help/install/<platform>/agent-guide.json`, with an index at `/help/install/agent-guides.json`.

`plugins/install-guides/guides.js` enforces the rules, and requires an agent guide for every widget guide's platform.
