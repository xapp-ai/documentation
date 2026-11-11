---
title: AI Agent Discovery
sidebar_label: AI Agent Discovery
---

More and more people ask an AI assistant to find and contact a local business for them: ChatGPT's agent, Claude, or an assistant built into the browser. These agents read a page the way a script does. A form built for people is hard for them to fill in, and text on the page is easy for them to misread.

Every business set up through XAPP AI gets an endpoint made for these agents, and the website snippet tells agents where it is. Nothing extra needs to be installed or switched on.

## What every business gets

### Its own MCP server

Each business has a public [Model Context Protocol](https://modelcontextprotocol.io) (MCP) server. MCP is the open standard AI assistants use to call tools. The server answers at:

```
https://agentic.xapp.ai/{business}/mcp
```

It speaks Streamable HTTP and needs no sign-in, so any agent can use it. Its tools:

| Tool | What it does |
|---|---|
| `get_business_context` | The business profile: services, service areas, hours, location and contact details |
| `search_knowledge_base` | Answers a question from the business's FAQs and website content |
| `collect_contact_info` | Checks the homeowner's contact details and sends them to the business as a lead |
| `get_my_data` | Shows the homeowner what the business's assistant has stored about them |
| `forget_me` | Deletes what the assistant has stored about the homeowner, on their request |

A lead from an agent reaches the business the same way as any other lead, through the same integrations.

### A manifest and a server card

Two files describe the server, so an agent can find out what it does before connecting:

| File | Where |
|---|---|
| MCP manifest | `https://agentic.xapp.ai/{business}/.well-known/mcp/manifest.json` |
| MCP server card | `https://agentic.xapp.ai/{business}/mcp/server-card` |

Both name the business, what the assistant can do, the transport, and that no sign-in is needed.

### Tags on the business's website

When the chat widget loads, it adds three tags to the page's `<head>`:

```html
<link rel="mcp-server" href="https://agentic.xapp.ai/{business}/mcp">
<link rel="mcp-manifest" href="https://agentic.xapp.ai/{business}/.well-known/mcp/manifest.json">
<link rel="mcp-server-card" href="https://agentic.xapp.ai/{business}/mcp/server-card">
```

An agent browsing the site can follow them to the server and use it instead of scraping the page. The tags come with the snippet, so they are there as soon as the snippet is installed. A disabled widget adds none.

## Options for each business

Two more options are off unless they are turned on for a business, in Studio on its chat widget channel:

| Option | What it does |
|---|---|
| **Agent notice** | When the widget detects an AI agent, it shows the agent a short note that points it at the MCP server |
| **Site tools (WebMCP)** | Registers the MCP server's tools with the browser's own agent through [WebMCP](https://webmachinelearning.github.io/webmcp/), for browsers that support it |

Partners: ask XAPP AI to turn either one on for your businesses.

## Measuring it

The widget tells AI agents and crawlers apart from people when it loads, and the page view, session and source counts for people leave out the ones it recognizes.

The [partner API](/docs/partners/partner-integration) reports agent activity for each business:

- **Business reads:** `agent` gives the business's `mcpUrl`, `manifestUrl` and `serverCardUrl`.
- **Analytics:** `agents` gives agent activity over the date range:
  - AI agents that visited the site, and how many of them submitted a form, overall and by agent
  - people an AI assistant sent to the site, by assistant
  - crawlers
