---
title: Response Groups
---

Within a Handler, responses are grouped by which specific requests they respond to.  Then within the response group you can use [conditions](/docs/dialog-manager/conditions) to help select which response is most appropriate.  

![handler response groups](../../static/img/content/handler-response-groups.png)

You can see in the above for the second question of a simple conversational quiz that we have two response groups.  They are structured around what the user says and then the possible system responses below it. 

The first group is when the user first enters the handler and then depending on if the user answered correctly ("wamapoke"), they will get the correct or incorrect response.

The next group below it is special.  It using a special case key that accepts all requests except `CancelIntent`, `Peebo` and `StopIntent`.  This will catch all requests, except the aforementioned, and return the provided response.  
