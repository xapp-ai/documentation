---
title: Zapier
sidebar_label: Zapier
---

Use Zapier to send leads, and scheduling requests to your preferred destination. [Zapier's](https://zapier.com) app marketplace includes over 7,000 integrations. Here are a few examples of where you can send requests from your website and Google business profile

- Google Spreadsheets - send leads to a shared spreadsheet
- Your preferred Field Service Management Platform, or CRM
- Text Alerts - Be alerted via text when you receive a new request

---

# Create a Zap, and connect your Zapier account to AI for Home Services by XAPP AI

<div style={{width: '40%'}} className="centered-image-container">
<img src="/img/integrations/zapier/trigger.png" alt="Create a trigger"/>

<img src="/img/integrations/zapier/select app.png" alt="select app"/>

</div>

<h4>Login Info</h4>

<div style={{width: '40%'}}  className="centered-image-container">

<img src="/img/integrations/zapier/connect account.png" alt="Create a trigger"/>
<img src="/img/integrations/zapier/connect 1.png" alt="app id"/>

</div>

**Your Application ID can be found on your account**

- https://studio.xapp.ai/[your company id]/**[your app id]**

<hr/>

## Setup a Trigger

Subscribe to a new lead or scheduling request

<div style={{width: '40%'}} className="centered-image-container">
<img src="/img/integrations/zapier/select event.png" alt="Select event"/>
</div>

## Integrate the lead from XAPP

### We'll walk through a simple example sending the lead to a Google spreadsheet. You can create numerous integrations based on this sample.

- Make sure you have a spreadsheet created
- Set the headers to _Lead, Transcript, Added_
- Create an action that takes the lead from XAPP, and posts it to a new row on the spreadsheet

<div className="centered-image-container">
<img src="/img/integrations/zapier/google new row.png" alt="Google New Row"/>

</div>

## Creating a Lead

### Create a lead to test with.

- Create a lead in chat like this

<div className="centered-image-container">
<img src="/img/integrations/zapier/lead from chat clear.png" alt="Lead from Chat"/>
</div>

### Map the lead to your destination

- Refresh your page, and see new leads created
- Map the lead to your destination, in this case we'll map to a column in the spreadsheet.

<div className="centered-image-container">
<img src="/img/integrations/zapier/lead mapping.png" alt="Lead mapping"/>
</div>

<div className="centered-image-container">
<img src="/img/integrations/zapier/my leads in spreadsheet.png" alt="Spreadsheet leads"/>
</div>

## Common Issues

### Unable to pull leads - Cannot read properties of undefined

<div className="centered-image-container">
<img src="/img/integrations/zapier/unable-read-properties-of-undefined.png" alt="Properties of Undefined"/>
</div>

When you attempt to do initial testing you may see the error above, one of the primary causes was registering the incorrect application ID at initial connection. This is easy to correct.

1. Find you application ID. You can find this under your businesses settings page or directly from the URL. See [How do I find my application ID?](https://documentation.xapp.ai/docs/development/development-faqs/#how-do-i-find-my-application-id). Note it should not have any leading or trailing slashes.

2. Click on the "XAPP AI" starting node and select the three dot menu under "Account". Then click "Reconnect"

<div className="centered-image-container">
<img src="/img/integrations/zapier/click-reconnect.png" alt="Click Reconnect"/>
</div>

3. Paste your application ID to the box and click "Yes, Continue to XAPP AI"

<div className="centered-image-container">
<img src="/img/integrations/zapier/zapier-paste-app-id.png" alt="Paste App ID"/>
</div>

4. Test your leads again.

# More information on using Zapier to integrate

- [Zapier App Marketplace](https://zapier.com/apps)
- [Zapier Training](https://zapier.com/apps)
