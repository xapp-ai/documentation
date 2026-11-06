# Partner install guides

White-label installation guides for the website widget, one plain-Markdown file per website platform.

These files are not part of the documentation site. Docusaurus only builds `docs/`, `help/` and `blog/`, so nothing in this folder is published here.

## Who uses them

The stentor-api partner API embeds these files verbatim. It fetches them from this repo at a pinned commit, replaces the `{{snippet}}` placeholder with the business's real script tag(s), and returns the result to partners, who paste it into emails to their own customers.

Because the commit is pinned, **an edit here reaches partners only after stentor-api is updated to the new commit**. Merge here first, then bump the pinned commit in stentor-api.

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

Voolt and the hosted landing page are not here: Voolt does not allow custom scripts, so the widget snippet cannot be installed there.

## Rules for every guide

The consumer's tests enforce these, so a guide that breaks one fails stentor-api's CI when the pinned commit is bumped.

1. **Front matter** is exactly three lines: `---`, `title: <Platform name>`, `---`. The title is the human platform name, for example "WordPress" or "Any website".
2. **No branding.** Our company or product names must not appear anywhere (case-insensitive), and there are no links to our sites or help pages. Say "the website widget" or "your widget".
3. **Plain CommonMark only.** Headings, numbered lists, inline code and fenced code. No images, no MDX/JSX components, no `:::` admonitions, no relative links. It has to read well in an email.
4. **Exactly one placeholder**, a fenced `html` block whose only content is `{{snippet}}`. No example script tags or keys, and no instructions about finding a key; the snippet is supplied.
5. **Accurate platform steps.** Keep menu names, where to paste, and plan requirements (for example Wix needs a paid plan with a connected domain; Squarespace needs Business or higher) true to the platform. Chat/form widget only; no search-bar content.
6. **Second person, to the business owner or their web person.** Short steps, ending with a "Check it worked" section and a brief troubleshooting list. No support contact lines.
