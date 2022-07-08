---
title: Web Crawler CLI
sidebar_label: Crawler CLI
---

There are some instances where you may need to crawl content from your computer.  The same crawler we use in Studio is also available as a Node.js based CLI.

We recommend installing it globally:

```bash
npm install -g @xapp/arachne
```

## Example Usage

To crawl a site and save the pages to a local ./temp directory
```bash
arachne crawl https://documentation.xapp.ai/ -d ./temp
```

To also save markdown and schema.org FAQs
```bash
arachne  crawl https://documentation.xapp.ai/ -a -t markdown -d ./temp
```

With a whitelisted patterns file
```bash
arachne  crawl http://www.thecoffeefaq.com/ -a -t markdown -d ./temp -w ./temp/whitelist.md
```

## Common Issues

### Running on WSL2

If attempting to run on the Windows Subsystem for Linus (WSL 2) and either the crawler fails to start or provides the following error message:

```bash
Unable to start the crawler.
TimeoutError: Timed out after 5000 ms while trying to connect to the browser! Only Chrome at revision r982053 is guaranteed to work.
    at Timeout.onTimeout (/home/mycul/.nvm/versions/node/v12.18.4/lib/node_modules/@xapp/arachne-cli/node_modules/puppeteer/lib/cjs/puppeteer/node/BrowserRunner.js:252:20)
    at listOnTimeout (internal/timers.js:549:17)
    at processTimers (internal/timers.js:492:7)
```

you may need to take a few extra steps to allow the crawler to find Chrome.  Please see the instructions as outlined [here]( https://github.com/puppeteer/puppeteer/issues/1837#issuecomment-689006806).  When you start VcXsrv, select "Multiple Windows",  "Start no client", and "Disable access control".