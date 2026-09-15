---
title: Installation on React and Single-Page Apps
sidebar_label: React / Single-Page Apps
---

This guide is for sites built with React — a single-page application (for example with Vite or Create React App) or [Next.js](#nextjs-app-router) — rather than on a website builder. Using Vue, Angular or Svelte? See the [Vue](/help/install/vue), [Angular](/help/install/angular) and [Svelte](/help/install/svelte) guides. It covers two ways to add the XAPP Chat Widget:

- **Floating chat** — the standard chat button and window, on every page. Uses the script snippet.
- **Embedded chat** — the chat window placed inside your own page layout, for example on a "Talk to us" page. Uses the `@xapp/chat-widget` React component.

The widget supports React 18 and React 19, and both methods work with client-side routing such as React Router.

## Prerequisites

- Access to your application's source code and a developer who can build and deploy it
- Your chat widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Floating Chat (Script Snippet)

1. **Open your app's HTML entry file**

   This is the single HTML file your app is served from. For Vite it is `index.html` in the project root; for Create React App it is `public/index.html`.

2. **Add the snippet just before the closing `</body>` tag**

   ```html
   <script
     id="xapp-js"
     src="https://widget.xapp.ai/xapp-chat-widget.js?key=YOUR_CHAT_KEY"
   ></script>
   ```

3. **Build and deploy your app**

   The snippet goes in the source HTML file, so it is included in the next build. Editing the built output directly will be overwritten by the next deploy.

The widget loads once and stays on screen as visitors move between pages — client-side route changes do not reload it. All appearance and behavior settings come from Studio, so there is nothing else to configure in code.

## Embedded Chat (React Component)

Use this when you want the chat to sit inside your own layout instead of floating over the page.

:::tip
Try it first on the [Embedded Chat Examples](/examples/embedded-chat) page — live layouts with source code you can copy, and a field to preview your own widget key.
:::

1. **Install the packages**

   ```bash
   npm install @xapp/chat-widget react-redux stentor-models
   ```

   (or `yarn add` / `pnpm add` with the same packages). `react`, `react-dom`, `react-redux` and `stentor-models` are peer dependencies; React 18 and 19 are both supported.

2. **Add a component that loads your Studio configuration**

   The component fetches the same configuration the script snippet uses, so changes made in Studio apply here too.

   ```tsx
   import { useEffect, useState } from "react";
   import { Chat as XappChat, WidgetEnv } from "@xapp/chat-widget";
   import "@xapp/chat-widget/dist/index.css";

   const CHAT_KEY = "YOUR_CHAT_KEY";

   async function loadChatConfig(): Promise<WidgetEnv> {
     const res = await fetch(`https://widget.xapp.ai/config.json?key=${CHAT_KEY}`);
     if (!res.ok) {
       throw new Error(`Chat config request failed: ${res.status}`);
     }
     return res.json();
   }

   export function EmbeddedChat() {
     const [config, setConfig] = useState<WidgetEnv | null>(null);

     useEffect(() => {
       let cancelled = false;
       loadChatConfig()
         .then((studioConfig) => {
           if (!cancelled) {
             setConfig({
               ...studioConfig,
               // The action bar is a floating page element; hide it inside an embedded chat.
               actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
             });
           }
         })
         .catch((error) => console.error(error));
       return () => {
         cancelled = true;
       };
     }, []);

     if (!config) {
       return null;
     }
     return <XappChat config={config} mode="docked" />;
   }
   ```

   For plain JavaScript, remove the type annotations (`: Promise<WidgetEnv>`, `<WidgetEnv | null>`) and the `WidgetEnv` import.

3. **Place it in a container with a height**

   In `docked` mode the chat fills the element it is placed in, so give that element a height (and a width if you want it narrower than the column):

   ```tsx
   <div style={{ height: 600, maxWidth: 420 }}>
     <EmbeddedChat />
   </div>
   ```

:::note
If your app already imports a component named `Chat` or `ChatWidget`, import ours under a different name, as shown above (`Chat as XappChat`).
:::

### Display Modes

| `mode` | What it looks like |
| --- | --- |
| `docked` | Fills its container and is always open. **Use this for embedding.** |
| `normal` | The standard floating chat button and window, same as the script snippet. |
| `static` | An always-open chat window fixed to the corner of the screen. It does not sit inside your layout. |

## Next.js (App Router)

The same component works in Next.js with two changes, both needed for `next build` to succeed:

- **Load it only in the browser.** The widget reads browser storage as soon as it loads, which fails while Next.js pre-renders the page on the server. Wrap it with `next/dynamic` and `ssr: false`.
- **Load the stylesheet from the XAPP CDN.** Next.js 16's default bundler (Turbopack) cannot parse the stylesheet shipped in the npm package, so link `https://widget.xapp.ai/xapp-chat-widget.css` instead of importing `@xapp/chat-widget/dist/index.css`.

1. **Install the packages**

   ```bash
   npm install @xapp/chat-widget react-redux stentor-models
   ```

2. **Add the chat component** — `components/EmbeddedChat.tsx`

   ```tsx
   "use client";

   import { useEffect, useState } from "react";
   import { Chat as XappChat, WidgetEnv } from "@xapp/chat-widget";

   const CHAT_KEY = "YOUR_CHAT_KEY";

   async function loadChatConfig(): Promise<WidgetEnv> {
     const res = await fetch(`https://widget.xapp.ai/config.json?key=${CHAT_KEY}`);
     if (!res.ok) {
       throw new Error(`Chat config request failed: ${res.status}`);
     }
     return res.json();
   }

   export function EmbeddedChat() {
     const [config, setConfig] = useState<WidgetEnv | null>(null);

     useEffect(() => {
       let cancelled = false;
       loadChatConfig()
         .then((studioConfig) => {
           if (!cancelled) {
             setConfig({
               ...studioConfig,
               actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
             });
           }
         })
         .catch((error) => console.error(error));
       return () => {
         cancelled = true;
       };
     }, []);

     if (!config) {
       return null;
     }
     return (
       <>
         <link rel="stylesheet" href="https://widget.xapp.ai/xapp-chat-widget.css" precedence="default" />
         <XappChat config={config} mode="docked" />
       </>
     );
   }
   ```

3. **Add a browser-only wrapper** — `components/ChatEmbed.tsx`

   ```tsx
   "use client";

   import dynamic from "next/dynamic";

   // The widget reads browser storage when it loads, so it must not run during server rendering.
   export const ChatEmbed = dynamic(() => import("./EmbeddedChat").then((m) => m.EmbeddedChat), { ssr: false });
   ```

4. **Use the wrapper in a page** — for example `app/help/page.tsx`

   ```tsx
   import { ChatEmbed } from "@/components/ChatEmbed";

   export default function HelpPage() {
     return (
       <main>
         <h1>Talk to us</h1>
         <div style={{ height: 600, maxWidth: 420 }}>
           <ChatEmbed />
         </div>
       </main>
     );
   }
   ```

## Using Both

Do not combine the script snippet with an embedded chat on the same page — visitors would see two chat windows.

If you want floating chat across the site and an embedded chat on one page, use the React component for both: render it with `mode="normal"` in your app layout, and skip it on the page that shows the embedded chat.

```tsx
import { useLocation } from "react-router-dom";

function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      {/* ...your routes... */}
      {pathname !== "/chat" && <FloatingChat />}
    </>
  );
}
```

Here `FloatingChat` is the same component as `EmbeddedChat` above, using the Studio config unchanged (keep the action bar) and `mode="normal"`.

## Verify Installation

1. Load your site and confirm the chat appears and shows its welcome message.
2. Navigate between a few pages without refreshing — the floating chat should stay on screen, and an embedded chat should appear only where you placed it.
3. Check the browser console for errors mentioning the chat widget.

## Troubleshooting

- **Chat opens automatically on page load**: This is the **Auto Open Chat Widget** setting in your chat settings in Studio, not something set in code.
- **Embedded chat is not visible**: Its container has no height. Give the container a fixed or flex height.
- **Two chat windows on one page**: The script snippet and the React component are both installed. See [Using Both](#using-both).
