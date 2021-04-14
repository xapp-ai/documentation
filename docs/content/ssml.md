---
title: SSML
sidebar_label: SSML
---

## What is SSML?

Speech synthesis markup language (SSML) is a standard recommended by the World Wide Web Consortium's Voice Browser Working Group. It is XML based markup that allows you to change the pronunciation of text and can even allow you to embed audio files. It is used on voice channels like telephony and smart speakers in combination with text to speech engines to fine tune the synthetic voice.

:::important
When leveraging SSML features, first check if your TTS engine supports it [here](http://ssml.guru)
:::

## Common SSML Tags

### Break

```xml
<break time="3s"/>
<break time="500ms" />
<break time="300ms" />
```

Adds a break within the speech.

### Emphasis

```xml
<emphasis level="strong">really like</emphasis>
```

Provides an emphasis on the word surrounded by the `<emphasis>` tags with possible level values being: `strong`, `moderate`, `reduced`.

### Phoneme

```xml
 You say, <phoneme alphabet="ipa" ph="pɪˈkɑːn">pecan</phoneme>.
 I say, <phoneme alphabet="ipa" ph="ˈpi.kæn">pecan</phoneme>.
```

Phonemes are used to tune the pronunciation of words. These can be rather tricky and take practice. It is recommended to use your TTS engine's provided SSML tester to quickly modify and hear how it changes.

## External Resources

- [SSML Support in Voice Platforms](http://ssml.guru) - Check for feature support
- [Speech Synthesis Markup Language Reference](https://developer.amazon.com/en-US/docs/alexa/custom-skills/speech-synthesis-markup-language-ssml-reference.html) - Reference for Amazon Alexa
- [Improve synthesis with Speech Synthesis Markup Language (SSML)](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/speech-synthesis-markup) - Reference for Azure Text-to-speech
- [Conversational Actions - SSML](https://developers.google.com/assistant/conversational/ssml) - SSML support for the Google Assistant.
