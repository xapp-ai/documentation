---
title: Model Best Practices
sidebar_label: Best Practices
---

## Be careful of ambiguity

Utterances ambiguity can occur when you have too similar (or exact) sample utterances across multiple intents and the NLU is unable to determine which intent you want.  It will return it's best guess which may not be the intent you are expecting.

Ensure your sample utterances for each intent are unique.  If there is overlap, you may want to split out the overlapping utterances into their own intent.

In some cases, you can solve ambiguity with [input contexts](/docs/model/intents#contexts).


### Remember Phonetic Ambiguity

Beyond using the same words or phrases in multiple intents, you can also run into ambiguity with similar sounding words that are spelled different.  For example "for" and "four", they sound alike but mean different things.  If you are 


## Naming

A couple of naming conventions will help you more easily collaborate, maintain, and develop with your model.

### Slot Name Reuse

Reuse the same slot name when it has the same type across intents.  This makes development much easier and easier to understand if you are new to the model.  

### Plural Entity Names, Singular Slot Name

Make your entity names plural, such as `Brands` but when you use them as a slot, make it plural.

```
show me more from ${brand}
```

In the above sample utterance, the slot `${brand}` is of type Brands.