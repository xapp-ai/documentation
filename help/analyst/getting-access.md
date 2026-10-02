---
title: Getting Access to XAPP Analyst
sidebar_label: Getting Access
---

XAPP Analyst works inside ChatGPT and Claude. You connect it once, sign in with your **XAPP Studio login**, and it's available in every conversation after that.

:::tip Use your XAPP Studio login
There's no separate XAPP Analyst account. When asked to sign in, use the same email and password (or Google sign-in) you use for [XAPP Studio](https://studio.xapp.ai). You'll see exactly the companies and locations you can see in Studio.
:::

## ChatGPT

1. Open the [XAPP Analyst app for ChatGPT](https://chatgpt.com/plugins/plugin_asdk_app_69fc98bbd57c8191af97c7fce043570f).
2. Click **Connect**.
3. Sign in with your XAPP Studio login and approve access.
4. Start a new chat and ask a question, for example: _"Use XAPP Analyst to show my leads from last month."_

You can also find it from ChatGPT by going to **Settings → Apps** and searching for **XAPP Analyst**.

## Claude

1. In Claude, go to **Settings → Connectors** and click **Add custom connector**.
2. Enter:
   - **Name:** `XAPP Analyst`
   - **URL:** `https://agentic.xapp.ai/mcp`
3. Click **Add**, then **Connect**.
4. Sign in with your XAPP Studio login and approve access.
5. Start a new chat and ask a question, for example: _"Use XAPP Analyst to show my leads from last month."_

Custom connectors require a paid Claude plan (Pro, Max, Team, or Enterprise). On Team and Enterprise plans, an owner may need to add the connector for the organization first.

## What you'll see

What XAPP Analyst shows depends on your XAPP Studio access:

| Your Studio access | What XAPP Analyst shows |
|---|---|
| A single business | That business's leads and reports |
| A company with several locations (franchise group, agency) | Every location in your company, with side-by-side comparisons |

## Troubleshooting

- **"I can't sign in."** Make sure you can sign in at [studio.xapp.ai](https://studio.xapp.ai) with the same login. If you've forgotten your password, reset it there first.
- **"I don't see one of my locations."** XAPP Analyst only shows locations your Studio login has access to. Ask your account admin to add you, then start a new chat.
- **"The assistant isn't using XAPP Analyst."** Mention it by name — _"Use XAPP Analyst to…"_ — and check that the app or connector is turned on for the chat.
- **Still stuck?** [Contact support](/help/support).
