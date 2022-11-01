---
title: Responses
sidebar_title: Responses
---

## What are responses?

Responses are what the assistant will say for voice and text based channels that can have conditions attached to them for when they are used.  Each response has a display text field, SSML which are used for text based channels and 

## Display Text

The display text is used on text based channels like the chat widget, social messaging platforms, and SMS.  There is a limitation of 640 characters and limited markdown support.

**Supported Markdown & Characters**

| Format | Looks Like | Example | 
|--------|------------|-----------|
| Italic   |      _text_      |  \_text\_ |
| Bold | **text** | \**text\** |
| Hyperlink | [text](https://xapp.ai) | \[text\]\(https://xapp.ai) |
| New Line | text<br/>text | text\\ntext |

:::note
Depending on the platform and channel, some markdown and other special characters will be removed.
:::

## SSML

Speech synthesis markup language (SSML) is a standard recommended by the World Wide Web Consortium's Voice Browser Working Group. It is XML based markup that allows you to change the pronunciation of text and can even allow you to embed audio files. It is used on voice channels like telephony and smart speakers in combination with text to speech engines to fine tune the synthetic voice.

:::important
When leveraging SSML features, first check if your TTS engine supports it [here](http://ssml.guru)
:::

### Common SSML Tags

#### Audio

```xml
<audio src="https://assets.xapp.media/prod/my-audio-file.mp3" />
```

The `<audio>` tag will play back the audio content from the source URL. 

* [Encoding (audio) with FFMPEG](/docs/content/encoding-with-ffmpeg)
* [Alexa Skill Kit Sound Library](https://developer.amazon.com/en-US/docs/alexa/custom-skills/ask-soundlibrary.html) - Sound library only for Alexa
* [Amazon Polly Text to Speech](https://aws.amazon.com/polly/) - Text to speech can be helpful to add alternative machine generated voices

#### Break

```xml
<break time="3s"/>
<break time="500ms" />
<break time="300ms" />
```

Adds a break within the speech.

#### Emphasis

```xml
<emphasis level="strong">really like</emphasis>
```

Provides an emphasis on the word surrounded by the `<emphasis>` tags with possible level values being: `strong`, `moderate`, `reduced`.

#### Phoneme

```xml
 You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
 I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
```

Phonemes are used to tune the pronunciation of words. These can be rather tricky and take practice. It is recommended to use your TTS engine's provided SSML tester to quickly modify and hear how it changes.

### SSML External Resources

SSML has many more tags and features, all of which can be found in the links below.

- [SSML Support in Voice Platforms](http://ssml.guru) - Check for feature support
- [Speech Synthesis Markup Language Reference](https://developer.amazon.com/en-US/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html) - Reference for Amazon Alexa
- [Improve synthesis with Speech Synthesis Markup Language (SSML)](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup) - Reference for Azure Text-to-speech
- [Conversational Actions - SSML](https://developers.google.com/assistant/conversational/ssml) - SSML support for the Google Assistant.

## Suggestion Chips

Suggestions chips are displayed on supported channels with displays and are not necessarily text input exclusive. 

### Suggested Inputs

Suggested inputs are treated the same way as if the user typed or said the content of the suggested input.  

### Suggested Websites

Clicking these opens websites and on some channels will take the user out of the flow while on others it is still open.

## Templated Responses

For responses that contain dynamic information, templated responses allow you to set placeholders for data that will then be compiled (injected) at runtime.  The same notation used for defining slots in sample utterances is also used here `${variable}`.  

### Slot Values

To access the slot value, either on the current request or from a previous request within the same session, you can simply use the name of the slot:

```
Ship the product on ${ship_date}
```

This will automatically format the slot value and format it correctly for either SSML or the display text.  Compiling the above example with a slot value of 2024-08-14, the display text will be:

```
Ship the product on August 14, 2024
```

and the SSML

```
<speak>Ship the product on <say-as interpret-as="date" format="ymd">2024-08-14</say-as></speak>
```
### Session Values

Values found on the session storage will also be injected however since the type of the values is not known, like is it a date or date range, they will not be compiled differently for display text or SSML.  

You may keep track of someone's quiz score on the session:

```typescript
context.session.set("score", 7)
```

which you can then access that value with the following template:

```
Your current score is ${score}.
```

### Path Values

Leveraging [JSONPath](https://goessner.net/articles/JsonPath/) syntax, you can also access all values of the request or context object.  For example, if we didn't have the slot value access as outlined above, you can get the same value with the path notation:

```
Ship the product on ${$.request.slots.ship_date.value}
```

Since this is more complicated, it typically isn't used.  It can be the most helpful when you want to access values on the user's [permanent storage](../development/storage.md).  For example:

```
Your favorite fruit is ${$.context.storaqe.favorite_fruit}
```

### Macros

Values stored either in slots or on the session storage may not be perfect and in some cases you may want to format them.  For example, if you ask for someones name and they type it in `john`, the name will be stored as such.  Since names are proper nouns and are capitalized, it may be distracting to use proper casing everywhere else except for when you repeat their name back.  Macros can help with this.  There are three available macros by default but it is also possible to inject your own custom macros.

#### Default Macros

#### capitalize() 

If you ask a user for their name and they provide it back lowercased, you may want to always capitalize it.

```
Thank you, ${capitalize('${first_name}')}.
```

#### truncate()

If you want to truncate a snippet of text to a certain length, you can leverage the `truncate` which also has some awareness of the word breaks and will attempt to truncate to the closest word without splitting one.  

```
Here is what I found... ${truncate('${excerpt}', 200)}
```

#### slotValueToSpeech()

This is the same method leveraged by the slot value templating.  This can be used if you know the value on the session store is one of the possible slot type values.

For example, you have a list of strings:

```typescript
context.storage.set("colors", ["red", "blue", "green"])
```

```
The main colors are ${slotValueToSpeech('${colors}')}
```

will compile to:

```
The main colors are red, blue and green
```

:::important
For lists, only `and` is supported when concatenating the values, not `or`
:::

