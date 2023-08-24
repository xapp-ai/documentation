---
title: Single Tenant Release Notes
---

Releases of both the API and client are based on previous releases to our multi-tenant environment found at https://studio.xapp.ai

Our multi-tenant environment has much quicker release cycle, typically every one to two weeks.  For single-tenant, we will only release versions that are more mature meaning no early major or minor versions. There will be exceptions but you can expect single tenant releases to only be every month or two.

## How Single Tenant Versioning Works

Our client (the web app Studio) and our backend (API) have different release cycles and different release notes.  It is possible that an older version of the web application does not work with a new version of the API.  To solve this, the single tenant versions are a combination of two versions that are known to be compatible with each other.  It is always a client version followed by a backend version:

```
1.82.5-0.22.113
```

This single tenant version uses client `1.82.5` and backend `0.22.113`.  You can then see the release notes below for each version.

## Where are the other version numbers?

We are only including versions of each, client and backend, that we release and are known to work well.  If a version isn't mentioned below, we don't recommend using it.  In other cases, we don't always release client and backend version for single tenant.  Also worth mentioning, we only mention features and fixes that are relevent to single-tenant users.    

## Client

### 1.82.5 - 3/22/2023

**Studio**

* Fixes headers for `content-type` that would sometimes prevent a login

### 1.82.4 - 3/10/2023

**Chat Widget**

* Customizable Z-Index
* Refresh button on Widget Channel
* Ability to edit Typing Status style and Subtitle
* Customize send button icon

**Organization**

* Pagination for the list of apps for an organization to help with performance when an org has thousands of apps
* Fleet Management feature for organizations with many apps

**Application Analytics**

* Ability to export analytics to CSV

**Review & Raw Queries**

* Ability to filter by match confidence
* Filter by similar queries (early access, behind feature flag)

### 1.73.2 - 6/14/2022

Initial Studio release for Single-tenant

## API

### 0.22.113 - 8/23/2023

Includes Chat Widget version [0.59.0](/docs/release-notes/chat-widget), which includes ability to set imageUrl for chat button.

**Lex V2 Channel**

* No longer automatically creates a channel with ID `studio-cf-channel`
* No longer attempts to sync InputUnknown intent to Bot, this previously caused an error as it is immutable in Lex





