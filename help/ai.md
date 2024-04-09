---
title: AI
sidebar_label: AI
---

AI is at the core of our business and key component to our offerings. We have been working with this current iteration of AI and it's predecessors for over 10 years, first providing it for the enterprise and now for small and medium sized businesses.

## How do you use AI?

AI, in this case referring specifically to large language models, is used not just during the chat's runtime to help generate responses but all throughout our processes. This includes but is not limited to:

- Transcript Summary Generation
- Data Summaries
- Model Fine Tuning

We also use it to help write code, generate marketing images and help us with data analysis.

## How do you use AI in chat?

When referring to AI, specifically large language models, we leverage it within our chat interfaces (the chat widget and Google Business Messages) to provide a Chat-GPT style experience that is trained specifically for your business.

## How do you safeguard against hallucinations?

This is certainly a challenge since most large language models really want to help you even if it means making things up. While this is getting better we do have several layers of safeguards in place to minimize hallucinations.

### Strong Prompts

The prompt is what provides instructions to the model. We ensure our prompts have proper guidelines to help prevent hallucinations or providing false information.

### Inject Customer Data / Retrieval Augmented Generation (RAG)

We leverage a technique where we will inject information from your website that is relevent to the conversation that the large language model can use to help answer the question. This technique is called retrieval augmented generation and requires good content (from your website) and ways to accurately query it for relevent information as the conversation progresses.

### Hallucination Detection

When we receive content from an LLM, we will look for possible hallucinations in the content it generated. This is a constantly evolving process but at the highest level we know that a phone number like 867-5309 is not a valid phone number unless your name is Jenny.
