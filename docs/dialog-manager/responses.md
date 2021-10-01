---
title: Responses
sidebar_title: Responses
---

## What are responses?




## Templated Responses


```
${$.context.storage.sessionStore.data.slots.zip.value}
```

### Slot Values

To access the slot value, either on the current request or from a previous request within the same session, you can simply use the name of the slot:

```
Ship the product to zip code ${zip}
```

This will automatically format the slot value and format it correctly for either SSML or the display text.  For example:  


### Macros
