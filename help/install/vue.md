---
title: Installation on Vue
sidebar_label: Vue
---

This guide shows how to embed the XAPP Chat Widget inside a page of a Vue 3 application, for example on a "Talk to us" page.

For the standard **floating** chat button on every page, you don't need any of this: add the script snippet to your app's `index.html` as described in [Manual Installation](/help/install/javascript).

:::tip
Try it first on the [Embedded Chat Examples](/examples/embedded-chat) page — choose **Vue** to see the source for different layouts.
:::

## How It Works

The chat widget is a React component. A small Vue component creates a React root inside its own element when it mounts and removes it when it unmounts, so the chat behaves like any other Vue component and works with Vue Router. React is installed alongside your app.

## Prerequisites

- A Vue 3 application built with Vite, and a developer who can build and deploy it
- Your chat widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Install the packages**

   ```bash
   npm install @xapp/chat-widget react react-dom react-redux stentor-models
   ```

   (or `yarn add` / `pnpm add` with the same packages). For TypeScript, also install `@types/react` and `@types/react-dom` as dev dependencies.

2. **Add the chat component** — `src/components/XappChat.vue`

   ```html
   <script setup lang="ts">
   import { onBeforeUnmount, onMounted, ref } from "vue";
   import { createElement } from "react";
   import { createRoot, type Root } from "react-dom/client";
   import { Chat, type WidgetEnv } from "@xapp/chat-widget";
   import "@xapp/chat-widget/dist/index.css";

   const CHAT_KEY = "YOUR_CHAT_KEY";

   const container = ref<HTMLDivElement | null>(null);
   let root: Root | null = null;
   let unmounted = false;

   onMounted(async () => {
     let studioConfig: WidgetEnv;
     try {
       const res = await fetch(`https://widget.xapp.ai/config.json?key=${CHAT_KEY}`);
       if (!res.ok) {
         throw new Error(`Chat config request failed: ${res.status}`);
       }
       studioConfig = await res.json();
     } catch (error) {
       // A network failure rejects fetch itself, so catch both that and a bad status.
       console.error(error);
       return;
     }
     if (unmounted || !container.value) {
       return;
     }
     const config: WidgetEnv = {
       ...studioConfig,
       // The action bar is a floating page element; hide it inside an embedded chat.
       actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
     };
     root = createRoot(container.value);
     root.render(createElement(Chat, { config, mode: "docked" }));
   });

   onBeforeUnmount(() => {
     unmounted = true;
     root?.unmount();
     root = null;
   });
   </script>

   <template>
     <div ref="container" class="xapp-chat"></div>
   </template>

   <style scoped>
   .xapp-chat {
     height: 100%;
   }
   </style>
   ```

   For plain JavaScript, remove `lang="ts"`, the `type` imports and the type annotations.

3. **Place it in a container with a height**

   In `docked` mode the chat fills the element it is placed in, so give that element a height (and a width if you want it narrower than the column):

   ```html
   <script setup lang="ts">
   import XappChat from "@/components/XappChat.vue";
   </script>

   <template>
     <h1>Talk to us</h1>
     <div style="height: 600px; max-width: 420px">
       <XappChat />
     </div>
   </template>
   ```

:::note
If your app renders on the server (for example Nuxt), the widget must only load in the browser — it reads browser storage as soon as it is imported.
:::

## Verify Installation

1. Open the page with the chat and confirm it shows its welcome message inside your container.
2. Navigate to another page and back without refreshing — the chat should appear again.
3. Check the browser console for errors mentioning the chat widget.

## Troubleshooting

- **Embedded chat is not visible**: Its container has no height. Give the container a fixed or flex height.
- **Two chat windows on one page**: The script snippet is also installed. Don't combine the floating script snippet with an embedded chat on the same page.
- **Chat opens a floating window instead of filling the container**: Check that `mode` is `"docked"`.
