---
title: Partner Integration
sidebar_label: Integration
---

White-label partners set up and manage XAPP AI for their own businesses through the **partner API**. Your system sends an event to set up a business. XAPP AI builds the assistant, the website widget, Book Online and a booking link. Your system then reads back the business's status, its install snippet, white-label install steps, and its leads and traffic.

* **API reference:** [api.xapp.ai/partner/docs](https://api.xapp.ai/partner/docs) lists every endpoint with request and response shapes.
* **OpenAPI spec:** [api.xapp.ai/partner/openapi.json](https://api.xapp.ai/partner/openapi.json), for generating a client.
* **API keys:** created in Studio on your organization's **Developer Tools** page. See [Partner API Keys](/docs/partners/partner-api-keys).

## Responsibilities

| | XAPP AI | Partner |
|---|---|---|
| Partner API and its infrastructure | ✅ | |
| Assistant runtime, management and QA | ✅ | |
| Templates for your businesses | ✅ | |
| Sending setup events for your businesses | | ✅ |
| Sending install steps to your businesses | | ✅ |
| Reading status and analytics | | ✅ |

## Basics

| | |
|---|---|
| Base URL | `https://api.xapp.ai/partner/v1` |
| Authentication | `Authorization: Bearer <partner key>` on every request |
| Format | JSON in and out |
| Business id | Your own id for each business (`businessId`), up to 128 letters, digits, `.`, `_`, `:` or `-` |

A key belongs to one partner organization. It can only see and change that organization's businesses. A business that belongs to someone else answers `404`, exactly like one that does not exist.

Check that a key works with `GET /partner/v1/ping`:

```bash
curl https://api.xapp.ai/partner/v1/ping \
  -H "Authorization: Bearer $PARTNER_KEY"
```

```json
{ "ok": true, "partnerOrgId": "your-org-id" }
```

A missing or wrong key answers `401`.

## Endpoints

| Method and path | What it does |
|---|---|
| `GET /partner/v1/ping` | Confirms the key works and names its organization |
| `POST /partner/v1/events` | Sends an event, for example to set up a business |
| `GET /partner/v1/businesses` | Lists your businesses, a page at a time |
| `GET /partner/v1/businesses/{businessId}` | One business: status, snippet, install steps, booking link |
| `GET /partner/v1/businesses/{businessId}/analytics` | One business's leads and website traffic over a date range |
| `POST /partner/graphql` | The same reads as one GraphQL endpoint |

## Setting up a business

### 1. Send the setup event

```bash
curl -X POST https://api.xapp.ai/partner/v1/events \
  -H "Authorization: Bearer $PARTNER_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "01JC8Z6Q4M2V7Y3K9T5R0B1XWE",
    "type": "business.setup_requested",
    "version": "1",
    "occurredAt": "2026-11-01T15:00:00Z",
    "businessId": "biz-48213",
    "data": {
      "businessName": "Green Valley Lawn Care",
      "website": "https://greenvalleylawn.example",
      "googleBusinessProfile": "ChIJN1t_tDeuEmsRUsoyG83frY4",
      "phone": "+15555550123",
      "streetAddress": "1200 Main St",
      "city": "Austin",
      "state": "TX",
      "zip": "78701",
      "integrations": [
        { "type": "partner-crm", "config": { "campaignId": "campaign-991" } }
      ]
    }
  }'
```

* `id` is your id for the event. Events are de-duplicated on it, so after a timeout or a `5xx`, resend with the **same** `id`.
* `businessName` is the only required field. XAPP AI builds everything the rest allows:
  * the website widget (chat and forms) when there is a `website`
  * Book Online (booking through Reserve with Google) when a Google Business Profile is found
  * a booking link in every case
* `integrations` says where the business's leads go. Each entry has:
  * `type`: an integration XAPP AI has set up for your organization. Your account manager gives you its name.
  * `config`: values only you know, such as a campaign id in your own system. Keys the integration does not use are ignored.

  Leave `integrations` out to use your organization's default. The [API reference](https://api.xapp.ai/partner/docs) has every field of the event.

| Response | Meaning |
|---|---|
| `202` | Stored, and it will be worked shortly |
| `200` | An event with this `id` was already received. Nothing new happens. |
| `400` | Not valid. Every failing field is listed, and nothing was stored. |
| `429`, `5xx` | Retry with backoff; see below |

Sending the setup event again for a business that is already set up changes nothing. The exception is a `failed` business, which is worked again (see the statuses below).

To retry, wait longer between each attempt, for example 1, 2, 4 and then 8 seconds, adding a little random jitter. Keep the same `id` throughout. A resent event is never worked twice.

### 2. Follow its status

Read the business with `GET /partner/v1/businesses/{businessId}`. You can read it as soon as the setup event is accepted: until it is built, it has `status: provisioning` and no `widget`, `bookOnline` or `bookingLink`, and `integrations` is empty. Its `status` moves through:

| Status | Meaning |
|---|---|
| `provisioning` | Being built, or waiting to retry a step that may pass |
| `in_review` | Built, and in XAPP AI's quality review |
| `google_pending` | Reviewed; Book Online is waiting on Google |
| `live` | Ready |
| `stopped` | Turned off. Version 1 of the API has no event to stop a business; ask your account manager. |
| `failed` | Will not succeed as sent. `failureReason`, a sentence for a person to read, says why. Fix the cause, then send the setup event again with a **new** `id`. The business is then worked again. |

A failed business:

```json
{
  "businessId": "biz-48213",
  "businessName": "Green Valley Lawn Care",
  "status": "failed",
  "failureReason": "Setup failed on our side after several tries, and we have been alerted. Send the setup event again with a new id to retry.",
  "createdAt": "2026-11-10T15:00:04.000Z",
  "updatedAt": "2026-11-10T15:36:12.000Z",
  "integrations": []
}
```

`failureReason` is present only when `status` is `failed`.

### 3. Send the install steps to the business

Once the widget is built, the business response carries `widget.snippet`, the script tag for the business's website, and `widget.instructions`. The instructions are white-label install steps in plain Markdown, with the snippet already in them, written for the business owner or their web person. They name neither XAPP AI nor Studio, so you can paste them into an email as they are.

Ask for the business's website platform with `?platform=`:

```bash
curl "https://api.xapp.ai/partner/v1/businesses/biz-48213?platform=wix" \
  -H "Authorization: Bearer $PARTNER_KEY"
```

Platforms with their own steps (the [API reference](https://api.xapp.ai/partner/docs) lists the current set):

* `wordpress`, `wix`, `squarespace`, `shopify`, `godaddy`, `duda`
* `framer`, `drupal`, `joomla`, `zyro` (Hostinger)
* `generic`, for any other site

Without `platform` you get the generic steps. `widget.instructions.availablePlatforms` lists every platform there are steps for.

The response also has `bookingLink`, and `bookOnline` when the business has a Google Business Profile.

## Listing businesses

`GET /partner/v1/businesses` returns your businesses in `businessId` order, 50 at a time by default (`limit` takes 1 to 100). Each one is shaped like the single-business response, without the install steps. Filter by `status`, for example `?status=live`.

Pass `nextCursor` back as `cursor` for the next page. The last page has no `nextCursor`.

```bash
curl "https://api.xapp.ai/partner/v1/businesses?status=live&limit=100" \
  -H "Authorization: Bearer $PARTNER_KEY"
```

## Analytics

`GET /partner/v1/businesses/{businessId}/analytics?from=&to=` returns one business's leads and website traffic over a date range. `from` and `to` are ISO 8601 dates. Without them you get the last 30 days. A range can be at most 366 days.

```json
{
  "businessId": "biz-48213",
  "from": "2026-10-01T00:00:00.000Z",
  "to": "2026-11-01T00:00:00.000Z",
  "leads": { "total": 12, "highValue": 3 },
  "traffic": {
    "visitors": 340,
    "uniqueVisitors": 290,
    "pageViews": 900,
    "chatOpens": 25,
    "sessions": { "website": 300, "bookOnline": 20, "bookingLink": 10 },
    "submissions": { "website": 8, "bookOnline": 2, "bookingLink": 1 },
    "sources": [
      { "channel": "google_search", "sessions": 120 },
      { "channel": "direct", "sessions": 80 }
    ]
  }
}
```

| Field | Meaning |
|---|---|
| `leads.total` | Leads received in the range. Test and abandoned leads are left out. |
| `leads.highValue` | Of those, leads classified as high value |
| `traffic.visitors` | Visitors to the business's own website, counted by IP address. Bots and crawlers are left out. |
| `traffic.uniqueVisitors` | Distinct browsers on the business's website |
| `traffic.pageViews` | Page views on the business's website |
| `traffic.chatOpens` | Chat windows opened |
| `traffic.sessions` | Sessions on each channel: the business's `website`, `bookOnline` (Reserve with Google), and the `bookingLink` |
| `traffic.submissions` | Booking form submissions on each channel |
| `traffic.sources` | Arrivals on the business's website by channel, largest first. Channels: `google_search`, `google_maps`, `facebook`, `instagram`, `other_social`, `ai`, `other_search`, `email`, `referral` and `direct`. |

`visitors`, `uniqueVisitors` and `pageViews` are `null` when they could not be read, so an outage never shows up as zero visitors. A business that is not set up yet reports zeros.

## GraphQL

`POST https://api.xapp.ai/partner/graphql` offers the same reads in one request, with the same keys. Introspection is on, so GraphQL tools can load the schema from the endpoint.

```graphql
query LiveBusinesses($after: String) {
  partner {
    businesses(status: live, first: 25, after: $after) {
      businesses {
        businessId
        businessName
        bookingLink
        widget {
          snippet
          instructions(platform: "wordpress") { markdown }
        }
        analytics(from: "2026-10-01T00:00:00Z", to: "2026-11-01T00:00:00Z") {
          leads { total highValue }
          traffic { visitors chatOpens submissions { website bookOnline bookingLink } }
        }
      }
      nextCursor
    }
  }
}
```

```bash
curl -X POST https://api.xapp.ai/partner/graphql \
  -H "Authorization: Bearer $PARTNER_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "{ partner { business(businessId: \"biz-48213\") { status analytics { leads { total } } } } }"}'
```

* Enum values such as `status: live` are written without quotes in GraphQL, where REST takes `?status=live`.
* One request can ask for `analytics` on at most **25** businesses. Page with `first: 25` when you want each business's analytics.
* `partner.business(businessId:)` is `null` for a business that does not exist or is another partner's.
* Bad input, such as an unknown platform, an invalid date range or an unknown cursor, returns an error with `extensions.code` set to `BAD_USER_INPUT`.
* GraphQL only reads. A mutation or subscription returns an error with `extensions.code` set to `GRAPHQL_VALIDATION_FAILED`. To make a change, send an event.

## Errors

Errors other than GraphQL's are JSON with a `message`, for example `{"message": "Business not found"}`.

| Status | Meaning |
|---|---|
| `400` | The request is invalid. The message says why. |
| `401` | No key, or a key that is wrong or revoked |
| `403` | The key cannot use this route, for example an organization API key that is not a partner key. See also the note below. |
| `404` | No such business for your organization |
| `429` | Throttled. Retry with backoff. |

A firewall in front of the API also answers `403` to a body that looks like an attack, such as a website of `javascript:alert(1)`. The request never reaches the API. Check the event's fields against the [API reference](https://api.xapp.ai/partner/docs): websites must be `http` or `https` URLs.
