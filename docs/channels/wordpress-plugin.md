---
title: WordPress Plugin
---

Our WordPress plugin, AI for Home Services (`oc-studio-integration` on wordpress.org), installs the XAPP AI widget on every page of a WordPress site. The widget loads the AI Chat Agent and the Book Online button. Both are configured in XAPP AI Studio, so the plugin only needs the Widget Key.

For step-by-step installation and setup, see [Installation on WordPress](/help/install/wordpress).

## What the Plugin Does

- **Loads the widget** from `https://widget.xapp.ai/xapp-chat-widget.js?key=<Widget Key>` on every page. The key is set under Settings -> XAPP AI.
- **Per-page widgets (version 1.4 and later)** let you load a different widget on part of a site. For example, you can have one widget per location and a support widget on your support pages, with the default widget everywhere else. A page uses the rule with the longest path its URL starts with. See [Different Widgets on Different Pages](/help/install/wordpress#different-widgets-on-different-pages-multiple-locations).
- **AI Agent Discovery (version 1.2 and later)** publishes the business's assistant at `/.well-known/mcp/server-card.json` and the related `/.well-known` paths, so AI agents can find it. It's on by default and can be turned off in the plugin's settings. See [AI Agent Discovery](/docs/ai-agents/ai-agent-discovery).

## Deprecated Settings

- **Scheduling Widget Key** loaded the standalone form widget from `https://form.xapp.ai`. The widget now loads the scheduling form itself, and it skips its own form when the page already has the form script. While a site still has this key saved, it loads only on pages with no per-page rule. Turn on the scheduling form for the widget in Studio, then clear the key.
- **Intelligent Search** and its `xapp-search-button` class were removed in version 1.2.
