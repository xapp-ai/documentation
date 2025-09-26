---
title: FieldPulse
sidebar_label: FieldPulse
---

You can connect your existing FieldPulse account to automatically send leads from chat and form widgets.

---

## Connect your FieldPulse Account to XAPP AI

### Step 1. Request API Token

An API token is unique to your account and allows us to send leads to your FieldPulse account.

**You must request an API token from FieldPulse either through chat or by phone.**

### Step 2. Setup Integration

In Studio, navigate to the "Integrations" tab.

<div className="centered-image-container">
<img src="/img/integrations/studio-integrations.png" alt="Integrations"/>
</div>

Select "FieldPulse" and paste your API key in the text field and click "Connect".

<div className="centered-image-container">
<img src="/img/integrations/fieldpulse/fieldpulse-setup-api-key.png" alt="FieldPulse API Key"/>
</div>

### Step 3. Verify

After the integration is setup, a status light will appear next to the integration. If it is green, then the API key is working.

<div className="centered-image-container">
<img src="/img/integrations/fieldpulse/fieldpulse-status-ok.png" alt="FieldPulse API Key"/>
</div>

Next, you should verify a lead is sent to FieldPulse. Either from chat or form, complete a lead and confirm it is in FieldPulse.

## How it Works

Depending on the channel (chat vs form) and the type of information gathered, either just a customer lead will be created or a customer lead and pending job.

### Customer Lead

If only contact information and message is gathered (which is more typical from chat), only a customer lead will be created. You will find it in the "Customers" section.

<div className="centered-image-container">
<img src="/img/integrations/fieldpulse/fieldpulse-customer-lead.png" alt="FieldPulse API Key"/>
</div>

You will also see additional information under the "Customer History" section.

<div className="centered-image-container">
<img src="/img/integrations/fieldpulse/fieldpulse-history-notes.png" alt="FieldPulse API Key"/>
</div>

### Job Creation

If the customer lead also specifies they need some type of service or visit, a job will be created for the customer with a description of the desired job in the title.

It will also have a preferred time that will need to be confirmed with the customer.

<div className="centered-image-container">
<img src="/img/integrations/fieldpulse/fieldpulse-job-creation.png" alt="FieldPulse API Key"/>
</div>
