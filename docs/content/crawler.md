---
title: Crawler Basics
sidebar_label: Crawler
---

## How it Works

The crawler will automatically crawl your website, following links found that match a certain pattern. By default, a pattern is created for you based on the starting link you provide. For example, if your provided:

`https://help.example.com/faqs`

The crawler will only follow links that start with `https://help.example.com/faqs` like:

- `https://help.example.com/faqs/login`
- `https://help.example.com/faqs/password`
- `https://help.example.com/faqs/input/index.html`

But not:

- `https://help.example.com`
- `https://www.example.com`
- `https://search-engine.com`

## Picking a Good Starting Page

Given how the crawler works, you want to find a starting URL that has links on the page to other subdirectories and pages. For example:

- **`https://support.example.com`** A subdirectory to the main website that contains all the desired content.
- **`https://example.com/help`** A path off the main website that contains all the desired content.

## Support for Schema.org FAQPage

If the crawler finds embedded schema.org [FAQPage](https://schema.org/FAQPage) type, it will parse it and automatically add the FAQs to the Answers content.
