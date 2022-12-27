---
title: Tags
sidebar_title: Tags
---

## What are tags?

Tags can be added to specific responses so you can more easily track usage.

You can create unique tags and then apply them to different responses across different handlers within an application.

## What can tags help track?

Tags are helpful in tracking goal completion responses or certain content types like failure messages or input unknowns.

## Built-In Tags

Studio has built-in tags that, when used, will populate charts and graphs within Studio analytics.

| Built-in | Sample Values                 |
| -------- | ----------------------------- |
| KB_TOP_ANSWER   | An answer that has high confidence and quality.  These are typically found within a larger body of text.     |
| KB_TOP_FAQ     | An answer that is high confidence and base on a self-contained FAQ.          |
| KB_SUGGESTED_ANSWER      | An answer with relatively high confidence but might not be correct. |
| KB_LIST_OF_RESULTS    | A response that is a list of results that may contain the answer. |
| KB_NO_ANSWER    | A response that does not contain the answer, typically due to lack of content or confidence. |
| WELCOME_NEW_USER | Response for brand new user |
| WELCOME_RETURNING_USER | Response for a returning user | 
| LeadGenerationStart | Start of capturing a information about a prospective lead |
| LeadGenerationEnd | End of a successful lead capture |

## Tag Based Analytics

:::important
This is still a beta feature and needs to be enabled on your app's settings page.
:::

Tag based analtics leverage our built-in tags and provide certain graphs and visualizations based on their intended usage. 

For `KB_` prefixed tags, we provide a display of the distribution on the how each type of answer is returned.  

