# Install guides

White-label installation guides for the website widget, one Markdown partial per website platform. Each guide is the single source for two things:

- **The help page.** `help/install/<platform>.md(x)` imports the partial. At build time the `{{snippet}}` block is filled with our script tags (`plugins/install-guides/remark-snippet.js`, configured in `docusaurus.config.js`), and the page adds our own notes after it.
- **`/help/install/<platform>/guide.json`.** `plugins/install-guides` writes `{platform, title, markdown, commit}` for each partial when the site builds, plus an index at `/help/install/guides.json`. The partner API embeds that Markdown, replacing `{{snippet}}` with the business's real script tag(s), and partners paste the result into emails to their own customers.

Docusaurus publishes nothing from a folder whose name starts with `_`, so this README and the partials have no pages of their own.

A partner sees an edit only after the site is deployed and the partner API re-syncs from `guides.json`.

## Files

| File             | Platform                                           |
| ---------------- | -------------------------------------------------- |
| `generic.md`     | Any website (paste before `</body>` on every page) |
| `wordpress.md`   | WordPress                                          |
| `wix.md`         | Wix                                                |
| `squarespace.md` | Squarespace                                        |
| `shopify.md`     | Shopify                                            |
| `godaddy.md`     | GoDaddy Website Builder                            |
| `duda.md`        | Duda                                               |
| `framer.md`      | Framer                                             |
| `drupal.md`      | Drupal                                             |
| `joomla.md`      | Joomla                                             |
| `zyro.md`        | Hostinger Website Builder (formerly Zyro)          |

The file name (without `.md`) is the platform slug the partner API uses.

Voolt and the hosted landing page have no guide here: Voolt does not allow custom scripts, so the widget snippet cannot be installed there.

## Rules for every guide

`plugins/install-guides/guides.js` enforces these: a guide that breaks one fails `yarn test` and `yarn build`.

1. **Front matter** is exactly three lines: `---`, `title: <Platform name>`, `---`. The title is the human platform name, for example "WordPress" or "Any website".
2. **No branding.** Our company or product names must not appear anywhere (case-insensitive), and there are no links to our sites or help pages. Say "the website widget" or "your widget".
3. **Plain CommonMark only.** Headings, numbered lists, inline code and fenced code. No MDX/JSX or HTML tags, no `:::` admonitions, no links. It has to read well in an email.
   - **Screenshots** are the one exception: `![alt](/img/install/...)` on a line of its own. The help page shows it and `guide.json` drops it, so the steps must make sense without it.
4. **Exactly one placeholder**, a fenced `html` block whose only content is `{{snippet}}`. No example script tags or keys, and no instructions about finding a key; the snippet is supplied.
5. **Accurate platform steps.** Keep menu names, where to paste, and plan requirements (for example Wix needs a paid plan with a connected domain; Squarespace needs Business or higher) true to the platform. Chat/form widget only; no search-bar content.
6. **Second person, to the business owner or their web person.** Short steps, ending with a "Check it worked" section and a brief troubleshooting list. No support contact lines.
