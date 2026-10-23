---
title: GoHighLevel
sidebar_label: GoHighLevel
---

Send every lead your AI captures straight into [GoHighLevel](https://www.gohighlevel.com) (also sold as LeadConnector and under many agency white-label brands).

:::info Native integration coming soon

A native GoHighLevel integration is on the way. It will connect your GoHighLevel account directly, with no workflow to build. Until then, use our **Webhook** integration, described below. It works today and needs no Zapier account.

:::

## When to use this

A common setup for home service businesses:

- Website form fills and chat leads need to land in **GoHighLevel**, because that is where the automated follow-up lives: instant texts, email sequences, and reminders.
- Jobs and estimates are managed in a **separate** field service or production tool. Leads don't need to go there first.

If that sounds like you, send your leads to GoHighLevel with the Webhook integration. They arrive within seconds of being captured and can kick off your follow-up sequences right away.

## What you need

- A paid XAPP AI plan (integrations are not available on Starter)
- Access to **Automation → Workflows** in the GoHighLevel sub-account that should receive the leads

:::note

In GoHighLevel, **Inbound Webhook** is a *premium* workflow trigger. HighLevel (or the agency that provides your account) may charge a small amount per run. Check your sub-account's billing settings if you're unsure.

:::

---

## Step 1: Create the workflow in GoHighLevel

1. In your sub-account, go to **Automation → Workflows** and click **Create Workflow → Start from Scratch**.
2. Click **Add New Trigger** and choose **Inbound Webhook**.
3. Copy the **webhook URL** it shows you. You'll paste it into XAPP AI in the next step.

:::caution

Treat this URL like a password. Anyone who has it can send data into your workflow, so don't post it publicly or share it outside your team. If it does leak, delete the Inbound Webhook trigger, add a new one, and paste the new URL into XAPP AI.

:::

Leave this tab open. You'll come back here to map fields once a test lead has been sent.

## Step 2: Connect the webhook in XAPP AI

1. In XAPP AI, click **Website settings**, then **Integrations**.
2. Select **Webhook**.
3. Paste the GoHighLevel URL into **Webhook Endpoint URL**.
4. Check **Send simplified (flat) payload**. This sends each lead as one flat list of fields, like `first_name`, `phone`, and `email`, which is what GoHighLevel's field picker expects.
5. Leave **Service** and **HTTP Headers** blank, then save.

## Step 3: Send a test lead

Submit a lead from your website chat or form, using a real email or phone number you can recognize. GoHighLevel needs an email or a phone number to create a contact.

Back in GoHighLevel, open the **Inbound Webhook** trigger and click **Fetch Sample Requests**. Choose your test lead as the **Mapping Reference** and save the trigger.

## Step 4: Create the contact

1. Add the action **Create Contact** (some accounts call it **Create/Update Contact**).
2. For each GoHighLevel field, open the value picker and choose the matching field from **Inbound Webhook Trigger**.

| GoHighLevel field | Pick from the webhook |
|---|---|
| First Name | `first_name` |
| Last Name | `last_name` |
| Email | `email` |
| Phone | `phone` |
| Postal Code | `zip` |
| Street Address | `address` |
| Source | `source` |

3. Save the action.
4. Add your follow-up next. For example, use **Add to Workflow** or **Add Contact Tag** to start the sequence you already use for new leads.
5. Switch the workflow from **Draft** to **Publish** and save.

### Useful extra fields

The simplified payload also includes our AI's read on each lead. Each one is a regular field, so you can store it in a GoHighLevel custom field or use it in an **If/Else** branch:

| Field | What it holds |
|---|---|
| `summary` / `concise_summary` | A plain-English summary of what the customer needs |
| `urgency` | How urgent the request is: `LOW`, `MEDIUM`, `HIGH`, `URGENT` or `NOT_SPECIFIED` |
| `job_type` / `service_type` | The kind of work requested |
| `high_value_lead` | `true` when the lead looks like a high-value job |
| `preferred_day`, `preferred_time_start`, `preferred_time_end` | When the customer asked to be contacted or scheduled |
| `transcript_text` | The full conversation |
| `utm_source`, `utm_campaign`, `gclid`, … | Ad and campaign attribution |

For example, you could send leads where `urgency` is `URGENT` to a faster text sequence.

`transcript_text` contains the whole conversation, including anything personal the customer typed. Only store it where your team would keep other customer records.

A field that is unknown for a given lead is sent empty. The full list of keys is the same on every lead, so you only need to map them once.

## Troubleshooting

**No sample request shows up.** Make sure the integration is saved in XAPP AI, then send another test lead. Leads are delivered a few seconds after they're captured, once our AI has analyzed them.

**Contacts are missing names or fields.** Make sure **Send simplified (flat) payload** is checked in XAPP AI. If you turned it on after building the workflow, click **Fetch Sample Requests** again, pick a new Mapping Reference, and re-map the fields.

**Duplicate contacts.** GoHighLevel matches existing contacts using your sub-account's **Allow Duplicate Contact** setting. Turn duplicates off there to have repeat leads update the existing contact. The setting's location in GoHighLevel can change, so search the [GoHighLevel Help Center](https://help.gohighlevel.com/) for "Allow Duplicate Contact" if you can't find it.

## More information

- [GoHighLevel Help Center](https://help.gohighlevel.com/)
- [Integrations overview](/help/integrations)
