# Agent install guides

White-label guides for adding the MCP discovery tags to a website's `<head>`, one Markdown partial per website platform. They pair with the widget guides in `../_partials`: same platforms, same slugs, same rules (see that README). The differences:

- The placeholder is a fenced `html` block whose only content is `{{tags}}`. The help pages fill it with the three `<link rel="mcp-…">` tags using `YOUR_APP_ID`, which `?appId=` fills in. The partner API fills it with the business's own tags.
- A platform with nowhere to put head code may have no placeholder and say so instead (`godaddy.md`). The widget adds the tags itself either way.
- The build writes each one to `/help/install/<platform>/agent-guide.json`, with an index at `/help/install/agent-guides.json`.

`plugins/install-guides/guides.js` enforces the rules, and the build requires an agent guide for every widget guide's platform.

- **Shared wording:** the intro, "Check it worked" and "Troubleshooting" are word for word the same in every guide except a platform with no header code; a test holds them to that. To change the wording, change it in all of them.
- **A platform with no header code:** add its slug to `withoutPlaceholder` in `guides.js`, and write its intro, check and troubleshooting for what the widget does instead (see `godaddy.md`).
- **Headings on the help pages:** a help page embeds the agent guide under the widget guide, so `remark-snippet` demotes the agent guide's headings a level there. The `agent-guide.json` partners get keeps them as written.
