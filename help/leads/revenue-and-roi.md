---
title: Revenue and ROI Tracking
sidebar_label: Revenue and ROI
---

This document explains how to record what your leads turned into — quotes, jobs, and invoices — and what they cost you, so XAPP Studio can show the revenue and return on investment (ROI) behind your leads.

## Overview

Revenue and ROI Tracking connects each lead to its outcome. For every lead you can record where it stands (its **stage**), what the job was quoted at, what was invoiced, and what the lead cost you to get (for example, a Local Services Ads charge or an Angi fee). Studio adds these up for you.

The totals appear as a row of cards on your Studio dashboard:

| Card | What it shows |
|---|---|
| **Revenue** | The invoiced value recorded on your leads. |
| **Quoted Pipeline** | The quoted value of leads that are not lost and not invoiced yet. |
| **Lead Costs** | The acquisition costs recorded on your leads, plus your XAPP subscription spread across your leads (when a subscription cost is set for your account). |
| **ROI** | What your leads earned compared with what they cost. Click the info icon next to the number to see exactly how it was worked out. |

The cards follow the dashboard's date range and filters. To see revenue and ROI **by channel or by source**, add a **Channel** or **Referring Source** filter on the dashboard; the cards update to show only the matching leads. You can also filter by lifecycle stage.

## How ROI is calculated

ROI compares the money your leads brought in with the money they cost:

**ROI = (Revenue − Lead Costs) ÷ Lead Costs**, shown as a percentage.

For example, if your leads this month were invoiced at $5,000 and cost $1,000, ROI is ($5,000 − $1,000) ÷ $1,000 = **400%**.

A few things to know:

- **Only invoiced revenue counts.** A quoted value shows in Quoted Pipeline, but it doesn't count toward Revenue or ROI until you record an invoiced value.
- **Your XAPP subscription is included in Lead Costs** when a subscription cost is set for your account. It's calculated per lead: your last 30 days of subscription divided by the leads you received in those 30 days. If no subscription cost is set, it's left out rather than guessed.

### Before you track revenue

Until a lead in the selected period has a quoted or invoiced value, the four cards show a dash (—) instead of numbers, with a short note pointing you here. Once you record a value on any lead, the cards fill in.

### Why you may see N/A

The ROI card shows **N/A** when:

- **No invoiced revenue** has been recorded for the leads in the selected period.
- **No lead costs** have been recorded for those leads.
- **Costs are more than the invoiced revenue** in the period.

The info icon next to ROI tells you which of these applies. In a lead's change history, a dash (—) means the field had no value before that change.

## Add revenue in Studio

1. Open **Leads** in XAPP Studio and click the lead you want to update.
2. In the lead's header, click the **Lifecycle** icon (hover over it to see the lead's current stage). If the lead already has lifecycle details, you can also click the summary box at the top of the lead.
3. Choose a **Stage**:
   - **New** — not followed up yet.
   - **Current** — already your customer before this lead. Not counted as a conversion.
   - **Contacted** — you've reached out.
   - **Quoted** — you've given a quote or estimate.
   - **Verbal** — the customer said yes, but nothing is booked or signed yet. Not counted as a conversion.
   - **Booked** — a job is scheduled. You can add the date and arrival window.
   - **Won** — the job was done or sold.
   - **Lost** — the customer didn't go ahead. You can add a reason, such as price, went elsewhere, no-show, or not a fit.
4. Enter the **Quoted value** and, once you've billed the job, the **Invoiced value**.
5. Under **Acquisition costs**, click **Add cost** for each charge you paid for this lead. Pick the source (LSA, Angi, Thumbtack, Yelp, or Other), enter the amount, and add a note if you like. The total updates as you go.
6. Click **Save**.

Moving a lead to **Booked** or **Won** counts it as a conversion. Click **Show history** in the same window to see every change made to the lead, who made it, and when.

## Let XAPP Analyst do it

If you use [XAPP Analyst](../analyst.md) in ChatGPT or Claude, you can update leads by asking in plain English. For example:

- "Mark the Jane Smith lead as won for $1,840."
- "The Miller lead was quoted at $6,200 — set it to Quoted."
- "Mark yesterday's lead from (813) 555-0100 as lost. They went with someone else on price."
- "Add a $45 Angi charge to the lead from John Carter."
- "Here's our job report for last quarter. Match it to our leads and record the invoiced amounts."

**What XAPP Analyst can change:** a lead's stage, lost reason, quoted value, invoiced value, and acquisition costs. It can also match the rows of a report you attach (a CRM export or an invoice list) to your leads by phone, email, or name and date, and update many leads at once. Before a bulk update it always shows you a preview of what will change and waits for your OK. Rows it can't match with confidence are reported back to you, never guessed.

**What it can't change:** the arrival window on a booked job (set that in Studio), your XAPP subscription cost, or leads for locations you can't edit in Studio. It only records values you give it.

Changes made by XAPP Analyst show as "XAPP Analyst" in the lead's history. To get started, see [Getting Access to XAPP Analyst](../analyst/getting-access.md).

## Automatic updates

Two integrations update lead stages for you:

- **[Call Connect](../integrations/call-connect.md)** — when the business books the job during a Call Connect call, the lead moves to **Booked**.
- **[ServiceTitan](../integrations/integration-service-titan.md)** — when a lead sent to ServiceTitan becomes a job, the lead moves to **Booked**. When that job is completed and invoiced, the lead moves to **Won** with the invoiced total as its invoiced value. A canceled job doesn't change the lead.

Automatic updates only move a lead forward (never from Won or Lost to another stage), and they never overwrite a stage or value that you or XAPP Analyst set. Acquisition costs are always entered by you or XAPP Analyst.

## FAQ

**I see Lead Costs but no revenue. Why?**
Revenue counts only invoiced values. Lead Costs can include your XAPP subscription even before you've recorded anything on a lead. Add the invoiced value to your won leads, in Studio or through XAPP Analyst, and Revenue and ROI will fill in.

**Do my customers see this?**
No. Stages, values, and costs are visible only to you and your team in XAPP Studio (and in XAPP Analyst, for people with access). Nothing is shown to the people who contact you through your chat assistant.

**Can I change it later?**
Yes. Open the lead's lifecycle again, change any field, and click **Save**. To remove a value, clear the field. Every change is kept in the lead's history.
