---
title: Crawler Basics
sidebar_label: Crawler
---

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
