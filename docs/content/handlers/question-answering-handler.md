---
title: Question Answering

---


## Configuration

You can configure certain aspects of how the handler determines, formulates, and formats it's answers.

```json
      /**
     * If true, it will use the longest highlight as the TOP ANSWER if no top answer is provided.
     * 
     * This is a strategy QnABot uses: https://github.com/aws-solutions/aws-qnabot/blob/aaef24ac610bb5f0324326c92914bda21bccef57/lambda/es-proxy-layer/lib/kendra.js#L383
     */
  "QNA_BOT_LONGEST_HIGHLIGHT": false,
      /**
     * Sometimes, insight engines provide lead in context from a document to where the answer might be within the text.  This may not be helpful and take up too much room.
     * 
     * If set to true, it will leave 1 line above where the first highlight is found.
     */
  "REMOVE_LEADING_LINES_WITHOUT_HIGHLIGHTS": true,
      /**
     * Removes the trailing lines of a response that do not have highlights.
     */
  "REMOVE_TRAILING_LINES_WITHOUT_HIGHLIGHTS": true,
      /**
     * Sometimes the highlights in the FAQ are not great so they are off by default.
     */
  "FUZZY_MATCH_FAQS": true,
```



