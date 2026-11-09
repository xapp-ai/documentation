---
title: Partner API Keys
sidebar_label: API Keys
---

Every request to the [partner API](/docs/partners/partner-integration) carries a partner key: `Authorization: Bearer <partner key>`. You create and revoke your keys in Studio.

## Who can manage keys

* Your organization must be a **Partner** organization. Contact your XAPP AI account manager if you do not see **Developer Tools** in your organization's menu.
* Only **Organization Owners** and **Organization Admins** can see, create or revoke keys.

## Create a key

1. Sign in to [Studio](https://studio.xapp.ai) and open your partner organization.
2. Choose **Developer Tools** in the navigation menu. It is also under **Settings** in the organization menu.
3. Under **Partner API keys**, click **Create partner key**.
4. Copy the key from the dialog. **It is shown only once.** Studio keeps a masked copy, never the key itself. If you lose a key, create another and revoke the lost one.
5. Store it where your system keeps secrets, and send it as a bearer token. Keep it on your servers: never put it in browser code, a mobile app, or a page that installs the widget.

   ```bash
   curl https://api.xapp.ai/partner/v1/ping \
     -H "Authorization: Bearer $PARTNER_KEY"
   ```

   A working key answers `{"ok": true, "partnerOrgId": "your-org-id"}`.

The **Developer Tools** page also shows the API's base URL, the GraphQL endpoint, and links to the [API reference](https://api.xapp.ai/partner/docs) and the [OpenAPI spec](https://api.xapp.ai/partner/openapi.json).

## The key list

For each key, Studio shows:

* its masked value
* when it was created, and by whom
* when it was last used

An organization can hold **two** partner keys at a time. Two keys are enough to rotate without downtime.

## Rotate a key

1. Create a second key.
2. Switch your system over to it.
3. Revoke the old key once it is no longer in use. A key used in the last 7 days cannot be revoked, so this can mean waiting up to 7 days after the switch.

## Revoke a key

Click **Revoke** next to the key and confirm.

* **A key used in the last 7 days cannot be revoked.** Your system is still calling with it, and revoking it would cut that system off. Studio shows the date from which the key can be revoked. Switch your system to another key first.
* **If a key has leaked**, rotate it: create a second key and switch your system to it. Then contact XAPP AI to revoke the leaked key. Whoever holds it can keep it in use, so you cannot revoke it yourself, but XAPP AI can revoke it immediately.
* A revoked key stops working within **5 minutes**. After that, requests made with it get `401`. It cannot be restored.
