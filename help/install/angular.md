---
title: Installation on Angular
sidebar_label: Angular
---

This guide shows how to embed the XAPP Chat Widget inside a page of an Angular application, for example on a "Talk to us" page.

For the standard **floating** chat button on every page, you don't need any of this: add the script snippet to `src/index.html` as described in [Manual Installation](/help/install/javascript).

:::tip
Try it first on the [Embedded Chat Examples](/examples/embedded-chat) page — choose **Angular** to see the source for different layouts.
:::

## How It Works

The chat widget is a React component. A small standalone Angular component creates a React root inside its own element after the view initializes and removes it when the component is destroyed, so the chat works with the Angular router. React is installed alongside your app; lazy-loading the chat page keeps it out of your initial bundle.

## Prerequisites

- An Angular application using standalone components (Angular CLI), and a developer who can build and deploy it
- Your chat widget key from Studio
  - See instructions [here](/help/channels/chat-widget#finding-code-snippet--key)

## Installation Steps

1. **Install the packages**

   ```bash
   npm install @xapp/chat-widget react react-dom react-redux stentor-models
   npm install --save-dev @types/react @types/react-dom
   ```

2. **Add the widget stylesheet** — in `angular.json`, add it to the `styles` array of your build options:

   ```json
   "styles": [
     "src/styles.css",
     "node_modules/@xapp/chat-widget/dist/index.css"
   ]
   ```

3. **Add the chat component** — `src/app/xapp-chat.ts`

   ```ts
   import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
   import { createElement } from 'react';
   import { createRoot, Root } from 'react-dom/client';
   import { Chat, WidgetEnv } from '@xapp/chat-widget';

   const CHAT_KEY = 'YOUR_CHAT_KEY';

   @Component({
     selector: 'app-xapp-chat',
     template: '<div #container class="xapp-chat"></div>',
     styles: ':host, .xapp-chat { display: block; height: 100%; }',
   })
   export class XappChat implements AfterViewInit, OnDestroy {
     @ViewChild('container', { static: true }) private container!: ElementRef<HTMLDivElement>;

     private root: Root | null = null;
     private destroyed = false;

     async ngAfterViewInit(): Promise<void> {
       const res = await fetch(`https://widget.xapp.ai/config.json?key=${CHAT_KEY}`);
       if (!res.ok) {
         console.error(`Chat config request failed: ${res.status}`);
         return;
       }
       const studioConfig: WidgetEnv = await res.json();
       if (this.destroyed) {
         return;
       }
       const config: WidgetEnv = {
         ...studioConfig,
         // The action bar is a floating page element; hide it inside an embedded chat.
         actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
       };
       this.root = createRoot(this.container.nativeElement);
       this.root.render(createElement(Chat, { config, mode: 'docked' }));
     }

     ngOnDestroy(): void {
       this.destroyed = true;
       this.root?.unmount();
       this.root = null;
     }
   }
   ```

4. **Place it in a container with a height** — for example `src/app/help-page.ts`

   In `docked` mode the chat fills the element it is placed in, so give that element a height (and a width if you want it narrower than the column):

   ```ts
   import { Component } from '@angular/core';
   import { XappChat } from './xapp-chat';

   @Component({
     selector: 'app-help-page',
     imports: [XappChat],
     template: `
       <h1>Talk to us</h1>
       <div style="height: 600px; max-width: 420px">
         <app-xapp-chat />
       </div>
     `,
   })
   export class HelpPage {}
   ```

5. **Lazy-load the page** — in `src/app/app.routes.ts`

   ```ts
   import { Routes } from '@angular/router';

   export const routes: Routes = [
     // ...your other routes
     // Lazy-loaded, so the chat widget and React are only downloaded when this page is opened.
     { path: 'help', loadComponent: () => import('./help-page').then((m) => m.HelpPage) },
   ];
   ```

   Importing the page eagerly also works, but adds roughly 680 kB to the initial bundle — more than the Angular CLI's default 500 kB budget warning allows.

:::note
`ng build` prints warnings that `react`, `react-dom/client` and related modules are not ESM. They are expected and do not affect the chat.
:::

## Verify Installation

1. Open the page with the chat and confirm it shows its welcome message inside your container.
2. Navigate to another page and back without refreshing — the chat should appear again.
3. Check the browser console for errors mentioning the chat widget.

## Troubleshooting

- **Chat is unstyled**: The stylesheet is missing from the `styles` array in `angular.json`. Restart `ng serve` after editing `angular.json`.
- **Embedded chat is not visible**: Its container has no height. Give the container a fixed or flex height.
- **Two chat windows on one page**: The script snippet is also installed. Don't combine the floating script snippet with an embedded chat on the same page.
- **Bundle budget exceeded**: Lazy-load the page that contains the chat, as in step 5.
