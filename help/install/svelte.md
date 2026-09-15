---
title: Installation on Svelte
sidebar_label: Svelte
---

This guide shows how to embed the XAPP Chat Widget inside a page of a Svelte 5 application, for example on a "Talk to us" page.

For the standard **floating** chat button on every page, you don't need any of this: add the script snippet to your app's `index.html` as described in [Manual Installation](/help/install/javascript).

:::tip
Try it first on the [Embedded Chat Examples](/examples/embedded-chat) page — choose **Svelte** to see the source for different layouts.
:::

## How It Works

The chat widget is a React component. A small Svelte component creates a React root inside its own element when it mounts and removes it when it is destroyed, so the chat behaves like any other Svelte component. React is installed alongside your app.

## Prerequisites

- A Svelte 5 application built with Vite, and a developer who can build and deploy it
- Your chat widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Install the packages**

   ```bash
   npm install @xapp/chat-widget react react-dom react-redux stentor-models
   ```

   (or `yarn add` / `pnpm add` with the same packages). For TypeScript, also install `@types/react` and `@types/react-dom` as dev dependencies.

2. **Add the chat component** — `src/lib/XappChat.svelte`

   ```html
   <script lang="ts">
     import { onMount } from "svelte";
     import { createElement } from "react";
     import { createRoot, type Root } from "react-dom/client";
     import { Chat, type WidgetEnv } from "@xapp/chat-widget";
     import "@xapp/chat-widget/dist/index.css";

     const CHAT_KEY = "YOUR_CHAT_KEY";

     let container: HTMLDivElement;

     onMount(() => {
       let root: Root | null = null;
       let unmounted = false;

       (async () => {
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
         if (unmounted) {
           return;
         }
         const config: WidgetEnv = {
           ...studioConfig,
           // The action bar is a floating page element; hide it inside an embedded chat.
           actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
         };
         root = createRoot(container);
         root.render(createElement(Chat, { config, mode: "docked" }));
       })();

       return () => {
         unmounted = true;
         root?.unmount();
       };
     });
   </script>

   <div bind:this={container} class="xapp-chat"></div>

   <style>
     .xapp-chat {
       height: 100%;
     }
   </style>
   ```

   For plain JavaScript, remove `lang="ts"`, the `type` imports and the type annotations.

3. **Place it in a container with a height**

   In `docked` mode the chat fills the element it is placed in, so give that element a height (and a width if you want it narrower than the column):

   ```html
   <script>
     import XappChat from "./lib/XappChat.svelte";
   </script>

   <h1>Talk to us</h1>
   <div style="height: 600px; max-width: 420px">
     <XappChat />
   </div>
   ```

:::note
If your app renders on the server (for example SvelteKit), the widget must only load in the browser — it reads browser storage as soon as it is imported.
:::

## Hide the Chat Header (Optional)

When your page already has its own heading, the chat's title bar repeats it. Add `header` to the config your component builds:

```tsx
const config: WidgetEnv = {
  ...studioConfig,
  actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
  header: { ...studioConfig.header, hidden: true },
};
```

- Requires `@xapp/chat-widget` 1.103.0 or later.
- Applies in `docked` and `static` mode only. A floating (`normal`) chat always keeps its header, because that is where its minimize and close buttons are.
- If your menu button is set to appear in the header, it moves to the footer so the menu stays reachable.

Try it with the **Hide header** option on the [Embedded Chat Examples](/examples/embedded-chat) page.

## Verify Installation

1. Open the page with the chat and confirm it shows its welcome message inside your container.
2. Navigate to another page and back without refreshing — the chat should appear again.
3. Check the browser console for errors mentioning the chat widget.

## Troubleshooting

- **Embedded chat is not visible**: Its container has no height. Give the container a fixed or flex height.
- **Two chat windows on one page**: The script snippet is also installed. Don't combine the floating script snippet with an embedded chat on the same page.
- **Chat opens a floating window instead of filling the container**: Check that `mode` is `"docked"`.
