---
title: White Label Branding
sidebar_label: White Label Branding
---

Partners can put their own brand on the parts of XAPP AI that their customers and their customers' customers see: lead emails, the hosted booking page, booking links, and hosted forms. Branding is set once on your partner organization in Studio and applies to every assistant application in that organization.

## Who can use it

* Your organization must be a **Partner** organization. Contact your XAPP AI account manager if you do not see the branding page.
* Only **Organization Owners** and **Organization Admins** can view or change branding settings.

To open the settings, go to your organization in Studio and choose **Settings → Partner Branding**.

## What you can brand

| Capability | What it changes |
|---|---|
| Logo | Header of lead emails and the hosted booking page |
| Primary color | Header and footer background of lead emails; accents on the booking page |
| Background color | Body background of lead emails |
| Company name and website | Footer of lead emails, the "Powered by" link on the booking page (the name appears there only when you have no logo), and the source name announced on [Call Connect](/help/integrations/call-connect) calls |
| Custom sender email or domain | The "From" address on lead emails |
| Booking domain | The web address of your booking page, for example `book.yourcompany.com` |
| Partner code | Identifies your brand in booking links |
| Form style | The look of XAPP-hosted, stand-alone form pages |

### Applies to every application in the organization

Branding belongs to the organization, not to individual applications. Any application created in your partner organization, including those created for your dealers or customers through sign-up, uses your branding automatically. An application in a different organization does not inherit it.

## Setting up branding

### 1. Turn it on

Switch on **Enable Partner Branding**. Nothing is branded while this is off, and everything falls back to XAPP AI branding.

### 2. Brand settings

| Setting | Notes |
|---|---|
| **Company Logo** | Upload an image and crop it. The logo must be between 100 and 800 pixels wide and between 50 and 400 pixels tall. |
| **Primary Color** | Hex color, for example `#071837`. The header text color is picked automatically for contrast. |
| **Background Color** | Hex color for the email body. |
| **Company Name** | Shown in the email footer. |
| **Website URL** | Linked from the email footer. Must start with `http://` or `https://`. |

The **Email Preview** on the same page shows a sample lead email with your settings as you change them.

If you enable branding but do not upload a logo, emails show no logo rather than the XAPP AI logo.

### 3. Partner code

The **Partner Code** is a short identifier for your brand that appears in booking links, for example `?partnerId=yourcode`.

* Up to 20 characters: lowercase letters, numbers, and hyphens.
* Must be unique across XAPP AI. Some codes are reserved. Studio will not save a code that is reserved or already in use, so choose another.

### 4. Booking domain (optional)

By default your booking page is served from an XAPP AI domain. To serve it from your own domain:

1. In **Booking Domain**, enter the domain you want to use, for example `book.yourcompany.com`.
2. Studio shows the DNS records to add: a **CNAME** that points the domain at your booking page, and a **TXT** record that proves you own it. Add both at your DNS provider.
3. Turn off any proxy or CDN on the CNAME record (for example, Cloudflare's orange cloud). The record must be DNS-only.
4. Studio checks automatically. The status moves from waiting for DNS, to setting up, to **Live**. This usually takes minutes but can take a few hours while DNS spreads.

When you change from one booking domain to another, the current domain keeps working until the new one is live, so booking links do not break during the switch.

Once the domain is live, new booking links, including those sent to Reserve with Google, use your domain.

### 5. Custom sender email (optional)

Lead emails are sent from an XAPP AI address unless you set up your own. You can verify either:

* **Custom Sender Email**: a single address, for example `no-reply@yourcompany.com`. We send a verification email to it; click the link to confirm.
* **Custom Sender Domain**: your whole domain. Studio shows the DNS records (TXT and DKIM CNAMEs) to add at your DNS provider.

Lead emails keep using the XAPP AI address until verification completes, then switch to your address.

### 6. Form style (optional)

You can set a partner form style, with your colors, tab label, and intro text, that applies to every form shown on a stand-alone page hosted by XAPP AI, such as your booking page.

Each form can override this. A form can follow your partner style, use a specific style, or use none.

Forms embedded on a customer's own website keep the styling configured for that form and are not changed by the partner form style.

## Booking page "Powered by"

When a visitor opens the booking page through your partner code or booking domain, the page shows your logo and colors, and the footer reads "Powered by" followed by your logo, linked to your website, instead of XAPP AI. If you have not uploaded a logo, your company name is shown instead.

## Centralized bookings

Turn on **Collect bookings centrally** if your organization receives the leads for all of your dealers instead of each dealer receiving their own. Dealers who sign up through your partner link then skip the step that asks where their leads should go.

## What is not white labeled

* **Studio itself** is not rebranded. It is always served from `studio.xapp.ai` with XAPP AI branding, and there is no custom login page. Branded lead emails leave out the link to view the lead in Studio.
* **The chat widget** on customer websites is styled per application in the widget settings, not by partner branding. See [Widget Customization](/docs/channels/channel-chat-widget#configuring-the-widget-within-studio).

## Need something else?

Some options, such as connecting a CRM that every new dealer inherits or a template application used for dealer sign-up, are set up by XAPP AI for you. Contact your account manager.
