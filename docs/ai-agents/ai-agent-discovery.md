---
title: AI Agent Discovery
sidebar_label: AI Agent Discovery
---

More and more people ask an AI assistant to find and contact a local business for them: ChatGPT's agent, Claude, Gemini, or an assistant built into the browser. These agents read a page the way a script does. A form built for people is hard for them to fill in, and text on the page is easy for them to misread.

Every business on XAPP AI gets an endpoint made for these agents, and XAPP AI tells agents where to find it in three ways: the chat widget, the WordPress plugin, and tags you can add to your site's HTML yourself.

## What every business gets

### Its own MCP server

Each business has a public [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server. MCP is the open standard AI assistants use to call tools. The server answers at:

```
https://agentic.xapp.ai/{appId}/mcp
```

It speaks Streamable HTTP and needs no sign-in, so any agent can use it. Its tools:

| Tool | What it does |
|---|---|
| `get_business_context` | The business profile: services, service areas, hours, location and contact details |
| `search_knowledge_base` | Answers a question from the business's FAQs and website content |
| `collect_contact_info` | Checks the homeowner's contact details and sends them to the business as a lead |
| `get_my_data` | Shows the homeowner what the business's assistant has stored about them |
| `forget_me` | Deletes what the assistant has stored about the homeowner, on their request |

A lead from an agent reaches the business the same way as any other lead, through the same email and integrations.

### A manifest and a server card

Two files describe the server, so an agent can find out what it does before connecting:

| File | Where |
|---|---|
| MCP manifest | `https://agentic.xapp.ai/{appId}/.well-known/mcp/manifest.json` |
| MCP server card | `https://agentic.xapp.ai/{appId}/mcp/server-card` |

Both name the business, what the assistant can do, the transport, and that no sign-in is needed.

## How agents find it

### The chat widget

When the chat widget loads, it adds three tags to the page's `<head>`:

```html
<link rel="mcp-server" href="https://agentic.xapp.ai/{appId}/mcp">
<link rel="mcp-manifest" href="https://agentic.xapp.ai/{appId}/.well-known/mcp/manifest.json">
<link rel="mcp-server-card" href="https://agentic.xapp.ai/{appId}/mcp/server-card">
```

An agent browsing the site can follow them to the server and use it instead of scraping the page. They come with the widget, so there is nothing to set up. A disabled widget adds none.

### The WordPress plugin

The [AI for Home Services](https://wordpress.org/plugins/oc-studio-integration/) plugin for WordPress (1.2 and later) also publishes the business's server card and manifest on the site itself, at the `/.well-known/` addresses agents check:

| Address on your site | Serves |
|---|---|
| `/.well-known/mcp/server-card.json` | The MCP server card |
| `/.well-known/mcp-server-card` | The MCP server card |
| `/.well-known/mcp.json` | The MCP server card |
| `/.well-known/mcp/manifest.json` | The MCP manifest |

- **Setup:** none beyond the Chat Widget Key. The plugin reads the app ID from the chat widget's configuration, or you can enter one in its settings.
- **Default:** on. Turn it off under **Settings → XAPP AI**.
- **Caching:** the plugin caches the documents for an hour and serves them as JSON that any origin can read.
- **Requirement:** WordPress must answer at the root of your domain, because `/.well-known/` is always at the root.

### Tags in your site's HTML

The widget adds its tags with JavaScript, so an agent that reads a page without running scripts doesn't see them. To reach those agents too, add the tags to the `<head>` of every page yourself. This also works on a site that doesn't load the chat widget.

Your app ID is in [XAPP AI Studio](https://studio.xapp.ai). The link to this page from your app's chat widget settings fills it in below.

```html
<link rel="mcp-server" href="https://agentic.xapp.ai/YOUR_APP_ID/mcp">
<link rel="mcp-manifest" href="https://agentic.xapp.ai/YOUR_APP_ID/.well-known/mcp/manifest.json">
<link rel="mcp-server-card" href="https://agentic.xapp.ai/YOUR_APP_ID/mcp/server-card">
```

Most site builders have a place for code in the header; the [installation guides](/help/install) show where it is on each one. The tags don't conflict with the widget: when a page already has them, the widget leaves them as they are and adds none of its own.

## Options for each business

Two more options are off unless they are turned on, in Studio on the app's chat widget channel:

| Option | What it does |
|---|---|
| **Agent notice** | When the widget detects an AI agent, it shows the agent a short note that points it at the MCP server |
| **Site tools (WebMCP)** | Registers the MCP server's tools with the browser's own agent through [WebMCP](https://webmachinelearning.github.io/webmcp/), for browsers that support it |

## Measuring it

When the widget loads, it tells AI agents and crawlers apart from people. The page view, session and source counts for people leave out the ones it recognizes. Studio's traffic reports show agent visits separately.

Partners get the same numbers from the [partner API](/docs/partners/partner-integration):

- **Business reads:** `agent` gives the business's `mcpUrl`, `manifestUrl` and `serverCardUrl`.
- **Analytics:** `agents` gives agent activity over the date range:
  - AI agents that visited the site, and how many of them submitted a form, overall and by agent
  - people an AI assistant sent to the site, by assistant
  - crawlers
