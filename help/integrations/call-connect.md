---
title: Call Connect
sidebar_label: Call Connect
---

:::important

Call Connect is a paid add-on. Add it from **Integrations** in Studio by selecting the Call Connect card.

:::

When a customer fills in your website form and asks for help, Call Connect phones you within moments, reads you the request, and on one keypress dials the customer and puts you through. You talk to a customer who asked for help minutes ago, instead of calling back a form hours later.

The customer sees your business's own Call Connect number. If they miss the call and ring that number back, they go straight through to you.

## Which leads get a call, and when

Only high-value leads get a call; every other lead is delivered by email as it is today. A lead is high value when it matches the [high value lead description](/help/ai/high-value-lead) in your Studio settings, for example a full roof replacement or an insurance claim.

When a lead is not called, Studio shows **Skipped** and the reason on the lead:

| What Studio shows                                  | What it means                                           |
| -------------------------------------------------- | ------------------------------------------------------- |
| Not a high-value lead                              | The request didn't match your high value description    |
| Urgency / Contact type is not in the call criteria | You limited calls to certain urgencies or contact types |
| Marked as spam                                     | The lead was flagged as spam                            |
| No phone number on the lead                        | There is nothing to call; the lead goes by email        |
| Already called about this number recently          | We called you about this customer in the last 7 days    |
| Daily call limit reached                           | You've had 10 calls today (the default limit)           |
| No business hours set / No business time zone set  | Fill in the hours on your location                      |
| The calling number is not active yet               | Your Call Connect number is still being set up          |
| Turned off                                         | Call Connect is switched off                            |

Calls are placed only when both sides can take them:

- **Your business hours**, from your location settings.
- **The customer's local time**, 8 am to 9 pm.
- **At least 5 minutes apart**, so two leads never ring you at once.

A lead that arrives after hours is called at the next time both are open.

## What you hear

You answer and hear a short spoken briefing, then the keypad options. For example:

> New customer request from XAPP AI for ABC Roofing. Sarah in Tempe needs help with: hail damage to a tile roof, insurance claim open. They asked to be called now. Press 1 to connect with them now. Press 2 and we'll call you back in 15 minutes. Press 3 to get the details by email instead. Press 9 to hear this again.

- **"from XAPP AI"** names where the lead came from. It can be your partner brand's name instead, or left out (see [Settings](#settings)).
- **The request** is a one-line summary of what the customer wrote on the form.
- **No key pressed:** the briefing plays once more. If there is still no answer, we try your next number.

## Your keypad options

| Key | What happens                                                                                                  |
| --- | ------------------------------------------------------------------------------------------------------------- |
| 1   | "Connecting you now." We ring the customer while you hear ringing. When they pick up, you're talking.         |
| 2   | "No problem. We'll call you back in 15 minutes." Once per lead; a second press 2 sends the details by email.  |
| 3   | "OK, we'll send you the details by email." We don't call the customer.                                        |
| 9   | Plays the briefing again.                                                                                     |

**After the conversation**, if you talked for 30 seconds or more, the call asks: "Did you book this job? Press 1 for yes, 2 for no, 3 for not yet." Your answer is saved on the lead.

**If your call drops** in the first 30 seconds, the customer is put on hold and we ring you straight back: "Sarah is still on the line. Press 1 to reconnect." If you don't answer within 45 seconds, the customer's call ends.

**Several numbers:** if you saved more than one number to call, for example the office and then the owner's cell, we ring each in turn for 25 seconds until someone answers.

## If the customer doesn't answer

We ring the customer for 30 seconds. Voicemail and call screening (such as iPhone's "Screen Unknown Callers") both count as not answering: we don't leave a message, and we hang up their side.

You hear one of two endings:

- **A call back is coming:** "Sarah didn't answer. We'll try again later, and email you their details if we can't reach them."
- **No call back** (retries are off, or this was already the retry): "Sarah didn't answer. We'll email you their details."

**The retry** comes 45 minutes later by default, within both your hours and the customer's, and only once. It opens differently, so you know it's the same customer:

> We're calling back about Sarah, who didn't answer when we tried to connect you earlier. New customer request …

If nobody at the business answers either try, the lead goes to you by email.

## The numbers on the call

- **Calls to you** come from one of the numbers below. Save them as a contact so your phone never screens or silences our calls.
- **Calls to the customer** come from your Call Connect number, shown in Studio, with your caller ID name. Some carriers take a few days to start showing a new caller ID name.
- **When a customer calls your Call Connect number back**, we ring your numbers in turn and show you the customer's own number, so you can call them back directly.

### Numbers we call you from

| Number         | Caller ID     |
| -------------- | ------------- |
| (251) 286-9820 | CUSTOMER CALL |

If you call one of these numbers back, you'll hear a short message; the customer's details are in your email.

## Settings

Open **Integrations → Call Connect** in Studio.

| Section                        | Setting                                                    | Default                                                                      |
| ------------------------------ | ---------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Your Call Connect number       | Area code; Caller ID name (shown to customers)             | Your location's area code and business name                                  |
| Numbers to call                | The phones we ring you on, in order                        | None                                                                         |
| When to call                   | Use my business hours; Time zone                           | Your location's hours                                                        |
| Which leads                    | High-value leads only                                      | On                                                                           |
| If the customer doesn't answer | Call me again if the customer doesn't answer               | On                                                                           |
|                                | Call me again after: 15, 30 or 45 minutes, 1, 2 or 4 hours | 45 minutes                                                                   |
|                                | Pressing 2 calls me back in: 5, 10, 15, 30 or 60 minutes   | 15 minutes                                                                   |
| On the call                    | Say who the lead came from                                 | On: your partner brand's name if partner branding is on, otherwise XAPP AI   |

The **Test call** button rings your first number with a sample lead. It starts with "This is a test call" and never dials a customer.

## FAQs

### I tested it and didn't get a call

Open the lead in Studio. If it says **Skipped**, the reason is shown there; "Not a high-value lead" is the usual one for a test. Write the test lead like a real high-value job, for example "full roof replacement after hail, insurance claim filed".

### It called me again with the same message

That was the retry: the customer didn't answer the first time. The retry opens with "We're calling back about …", and you can turn retries off in [Settings](#settings).

### The customer's phone screened the call

Call screening counts as not answering, so no message is left and a retry follows. Customers who have saved your Call Connect number as a contact aren't screened.

### How do I test both sides myself?

You need two phones: one to act as the business and one as the customer. A free Google Voice number works as the second phone. Pressing 1 on a **Test call** doesn't dial anyone, so use a real form submission to test the connection to the customer.

### Are calls recorded?

No.
