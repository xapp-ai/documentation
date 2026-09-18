export type ChatMode = "docked" | "normal" | "static";

export type LayoutId = "contact" | "fullpage" | "panel";

export type FrameworkId = "react" | "nextjs" | "vue" | "angular" | "svelte" | "html";

export interface DemoSettings {
    readonly chatKey: string;
    readonly mode: ChatMode;
    readonly height: number;
    readonly maxWidth: number;
    readonly hideActionBar: boolean;
    readonly hideHeader: boolean;
    readonly popOut: boolean;
}

export interface SourceFile {
    readonly name: string;
    readonly language: string;
    readonly code: string;
}

export const PLACEHOLDER_KEY = "YOUR_CHAT_KEY";

export const FRAMEWORKS: { id: FrameworkId; label: string; guide: string }[] = [
    { id: "react", label: "React", guide: "/help/install/react" },
    { id: "nextjs", label: "Next.js", guide: "/help/install/react#nextjs-app-router" },
    { id: "vue", label: "Vue", guide: "/help/install/vue" },
    { id: "angular", label: "Angular", guide: "/help/install/angular" },
    { id: "svelte", label: "Svelte", guide: "/help/install/svelte" },
    { id: "html", label: "HTML", guide: "/help/install/javascript#embedded-chat-on-any-html-page" },
];

const REACT_PACKAGES = "npm install @xapp/chat-widget react react-dom react-redux stentor-models";

/**
 * The key as it is spliced into generated source. Widget keys are UUIDs, so anything else typed
 * into the field is dropped rather than left to break the quoting of code people copy.
 */
function key(settings: DemoSettings): string {
    return settings.chatKey.replace(/[^A-Za-z0-9_-]/g, "") || PLACEHOLDER_KEY;
}

/** Indents every line after the first, for splicing generated blocks into templates. */
function indent(block: string, spaces: number): string {
    const pad = " ".repeat(spaces);
    return block
        .split("\n")
        .map((line, i) => (i === 0 || line === "" ? line : pad + line))
        .join("\n");
}

/** Overrides applied on top of the Studio config, one commented property per enabled setting. */
function configOverrides(settings: DemoSettings): string[] {
    const overrides: string[] = [];
    if (settings.hideActionBar) {
        overrides.push(`// The action bar is a floating page element; hide it inside an embedded chat.
actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },`);
    }
    if (settings.hideHeader) {
        overrides.push(`// The page already has a heading. Needs @xapp/chat-widget 1.103.0+; ignored in normal mode.
header: { ...studioConfig.header, hidden: true },`);
    }
    if (settings.popOut) {
        overrides.push(`// Follow the visitor into a floating window once this scrolls out of view.
// Needs @xapp/chat-widget 1.104.0+; docked mode only.
popOut: { enabled: true },`);
    }
    return overrides;
}

/** The Studio config with the overrides spread over it, as an object literal. */
function configObject(settings: DemoSettings): string | undefined {
    const overrides = configOverrides(settings);
    if (!overrides.length) {
        return undefined;
    }
    return `{
  ...studioConfig,
  ${indent(overrides.join("\n"), 2)}
}`;
}

/** The `config` built from the Studio config, shared by every component-based framework. */
function configExpression(settings: DemoSettings): string {
    const object = configObject(settings);
    return object ? `const config: WidgetEnv = ${object};` : `const config: WidgetEnv = studioConfig;`;
}

// ---------------------------------------------------------------- React

function reactComponent(settings: DemoSettings, nextjs: boolean): string {
    const object = configObject(settings);
    const setConfig = object ? `setConfig(${object});` : `setConfig(studioConfig);`;

    const header = nextjs
        ? `"use client";

import { useEffect, useState } from "react";
import { Chat as XappChat, WidgetEnv } from "@xapp/chat-widget";`
        : `import { useEffect, useState } from "react";
import { Chat as XappChat, WidgetEnv } from "@xapp/chat-widget";
import "@xapp/chat-widget/dist/index.css";`;

    const render = nextjs
        ? `return (
    <>
      {/* Turbopack can't parse the npm package's stylesheet, so load it from the CDN. */}
      <link rel="stylesheet" href="https://widget.xapp.ai/xapp-chat-widget.css" precedence="default" />
      <XappChat config={config} mode="${settings.mode}" />
    </>
  );`
        : `return <XappChat config={config} mode="${settings.mode}" />;`;

    return `${header}

const CHAT_KEY = "${key(settings)}";

async function loadChatConfig(): Promise<WidgetEnv> {
  const res = await fetch(\`https://widget.xapp.ai/config.json?key=\${CHAT_KEY}\`);
  if (!res.ok) {
    throw new Error(\`Chat config request failed: \${res.status}\`);
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
          ${indent(setConfig, 10)}
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
  ${render}
}
`;
}

/** React / Next.js page markup; `Chat` is the component name to render. */
function reactLayout(
    layout: LayoutId,
    settings: DemoSettings,
    chat: string,
    importLine: string,
    name: string,
    nextjs: boolean
): string {
    switch (layout) {
        case "contact":
            return `${importLine}

export default function ${name}() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
      <section style={{ flex: "1 1 280px" }}>
        <h1>Talk to us</h1>
        <p>Questions? Chat with us and get an answer right away.</p>
      </section>

      {/* docked mode fills this box, so it needs a height */}
      <div style={{ flex: "1 1 320px", height: ${settings.height}, maxWidth: ${settings.maxWidth} }}>
        <${chat} />
      </div>
    </div>
  );
}
`;
        case "fullpage":
            return `${importLine}

export default function ${name}() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header>{/* your site header */}</header>

      {/* flex: 1 gives the chat all remaining height */}
      <main style={{ flex: 1, minHeight: 0, width: "100%", maxWidth: ${settings.maxWidth}, margin: "0 auto" }}>
        <${chat} />
      </main>
    </div>
  );
}
`;
        case "panel":
            // The panel holds state, so as a Next.js component it has to be a client component.
            return `${nextjs ? `"use client";\n\n` : ""}import { useState } from "react";
${importLine}

export default function ${name}() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Get help</button>

      {open && (
        <aside
          style={{
            position: "fixed", top: 0, right: 0, bottom: 0,
            width: "min(${settings.maxWidth}px, 100vw)",
            display: "flex", flexDirection: "column",
            background: "white", boxShadow: "-4px 0 16px rgba(0, 0, 0, 0.15)", zIndex: 1000,
          }}
        >
          <button onClick={() => setOpen(false)}>Close</button>
          <div style={{ flex: 1, minHeight: 0 }}>
            <${chat} />
          </div>
        </aside>
      )}
    </>
  );
}
`;
    }
}

const REACT_PAGE_NAMES: Record<LayoutId, string> = { contact: "ContactPage", fullpage: "ChatPage", panel: "HelpPanel" };

function reactFiles(layout: LayoutId, settings: DemoSettings): SourceFile[] {
    const name = REACT_PAGE_NAMES[layout];
    return [
        { name: "Install", language: "bash", code: "npm install @xapp/chat-widget react-redux stentor-models\n" },
        { name: "EmbeddedChat.tsx", language: "tsx", code: reactComponent(settings, false) },
        {
            name: `${name}.tsx`,
            language: "tsx",
            code: reactLayout(layout, settings, "EmbeddedChat", `import { EmbeddedChat } from "./EmbeddedChat";`, name, false),
        },
    ];
}

function nextFiles(layout: LayoutId, settings: DemoSettings): SourceFile[] {
    const pageFile =
        layout === "panel"
            ? { name: "components/HelpPanel.tsx", pageName: "HelpPanel" }
            : layout === "contact"
              ? { name: "app/contact/page.tsx", pageName: "ContactPage" }
              : { name: "app/chat/page.tsx", pageName: "ChatPage" };
    return [
        { name: "Install", language: "bash", code: "npm install @xapp/chat-widget react-redux stentor-models\n" },
        { name: "components/EmbeddedChat.tsx", language: "tsx", code: reactComponent(settings, true) },
        {
            name: "components/ChatEmbed.tsx",
            language: "tsx",
            code: `"use client";

import dynamic from "next/dynamic";

// The widget reads browser storage when it loads, so it must not run during server rendering.
export const ChatEmbed = dynamic(() => import("./EmbeddedChat").then((m) => m.EmbeddedChat), { ssr: false });
`,
        },
        {
            name: pageFile.name,
            language: "tsx",
            code: reactLayout(layout, settings, "ChatEmbed", `import { ChatEmbed } from "@/components/ChatEmbed";`, pageFile.pageName, true),
        },
    ];
}

// ---------------------------------------------------------------- Vue

function vueFiles(layout: LayoutId, settings: DemoSettings): SourceFile[] {
    const component = `<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { createElement } from "react";
import { createRoot, type Root } from "react-dom/client";
import { Chat, type WidgetEnv } from "@xapp/chat-widget";
import "@xapp/chat-widget/dist/index.css";

const CHAT_KEY = "${key(settings)}";

const container = ref<HTMLDivElement | null>(null);
let root: Root | null = null;
let unmounted = false;

onMounted(async () => {
  let studioConfig: WidgetEnv;
  try {
    const res = await fetch(\`https://widget.xapp.ai/config.json?key=\${CHAT_KEY}\`);
    if (!res.ok) {
      throw new Error(\`Chat config request failed: \${res.status}\`);
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
  ${indent(configExpression(settings), 2)}
  root = createRoot(container.value);
  root.render(createElement(Chat, { config, mode: "${settings.mode}" }));
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
`;

    let page: SourceFile;
    switch (layout) {
        case "contact":
            page = {
                name: "ContactPage.vue",
                language: "html",
                code: `<script setup lang="ts">
import XappChat from "@/components/XappChat.vue";
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; gap: 32px">
    <section style="flex: 1 1 280px">
      <h1>Talk to us</h1>
      <p>Questions? Chat with us and get an answer right away.</p>
    </section>

    <!-- docked mode fills this box, so it needs a height -->
    <div style="flex: 1 1 320px; height: ${settings.height}px; max-width: ${settings.maxWidth}px">
      <XappChat />
    </div>
  </div>
</template>
`,
            };
            break;
        case "fullpage":
            page = {
                name: "ChatPage.vue",
                language: "html",
                code: `<script setup lang="ts">
import XappChat from "@/components/XappChat.vue";
</script>

<template>
  <div style="display: flex; flex-direction: column; height: 100vh">
    <header><!-- your site header --></header>

    <!-- flex: 1 gives the chat all remaining height -->
    <main style="flex: 1; min-height: 0; width: 100%; max-width: ${settings.maxWidth}px; margin: 0 auto">
      <XappChat />
    </main>
  </div>
</template>
`,
            };
            break;
        case "panel":
            page = {
                name: "HelpPanel.vue",
                language: "html",
                code: `<script setup lang="ts">
import { ref } from "vue";
import XappChat from "@/components/XappChat.vue";

const open = ref(false);
</script>

<template>
  <button @click="open = true">Get help</button>

  <aside v-if="open" class="help-panel">
    <button @click="open = false">Close</button>
    <div class="help-panel__body">
      <XappChat />
    </div>
  </aside>
</template>

<style scoped>
.help-panel {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(${settings.maxWidth}px, 100vw);
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
  z-index: 1000;
}

.help-panel__body {
  flex: 1;
  min-height: 0;
}
</style>
`,
            };
            break;
    }

    return [
        { name: "Install", language: "bash", code: `${REACT_PACKAGES}\nnpm install --save-dev @types/react @types/react-dom\n` },
        { name: "XappChat.vue", language: "html", code: component },
        page,
    ];
}

// ---------------------------------------------------------------- Angular

function angularFiles(layout: LayoutId, settings: DemoSettings): SourceFile[] {
    const component = `import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { createElement } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Chat, WidgetEnv } from '@xapp/chat-widget';

const CHAT_KEY = '${key(settings)}';

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
    let studioConfig: WidgetEnv;
    try {
      const res = await fetch(\`https://widget.xapp.ai/config.json?key=\${CHAT_KEY}\`);
      if (!res.ok) {
        throw new Error(\`Chat config request failed: \${res.status}\`);
      }
      studioConfig = await res.json();
    } catch (error) {
      // A network failure rejects fetch itself, so catch both that and a bad status.
      console.error(error);
      return;
    }
    if (this.destroyed) {
      return;
    }
    ${indent(configExpression(settings), 4)}
    this.root = createRoot(this.container.nativeElement);
    this.root.render(createElement(Chat, { config, mode: '${settings.mode}' }));
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.root?.unmount();
    this.root = null;
  }
}
`;

    let page: SourceFile;
    let route: string | undefined;
    switch (layout) {
        case "contact":
            page = {
                name: "contact-page.ts",
                language: "ts",
                code: `import { Component } from '@angular/core';
import { XappChat } from './xapp-chat';

@Component({
  selector: 'app-contact-page',
  imports: [XappChat],
  template: \`
    <div style="display: flex; flex-wrap: wrap; gap: 32px">
      <section style="flex: 1 1 280px">
        <h1>Talk to us</h1>
        <p>Questions? Chat with us and get an answer right away.</p>
      </section>

      <!-- docked mode fills this box, so it needs a height -->
      <div style="flex: 1 1 320px; height: ${settings.height}px; max-width: ${settings.maxWidth}px">
        <app-xapp-chat />
      </div>
    </div>
  \`,
})
export class ContactPage {}
`,
            };
            route = `{ path: 'contact', loadComponent: () => import('./contact-page').then((m) => m.ContactPage) },`;
            break;
        case "fullpage":
            page = {
                name: "chat-page.ts",
                language: "ts",
                code: `import { Component } from '@angular/core';
import { XappChat } from './xapp-chat';

@Component({
  selector: 'app-chat-page',
  imports: [XappChat],
  template: \`
    <div style="display: flex; flex-direction: column; height: 100vh">
      <header><!-- your site header --></header>

      <!-- flex: 1 gives the chat all remaining height -->
      <main style="flex: 1; min-height: 0; width: 100%; max-width: ${settings.maxWidth}px; margin: 0 auto">
        <app-xapp-chat />
      </main>
    </div>
  \`,
})
export class ChatPage {}
`,
            };
            route = `{ path: 'chat', loadComponent: () => import('./chat-page').then((m) => m.ChatPage) },`;
            break;
        case "panel":
            page = {
                name: "help-panel.ts",
                language: "ts",
                code: `import { Component, signal } from '@angular/core';
import { XappChat } from './xapp-chat';

@Component({
  selector: 'app-help-panel',
  imports: [XappChat],
  template: \`
    <button (click)="open.set(true)">Get help</button>

    @if (open()) {
      <aside class="help-panel">
        <button (click)="open.set(false)">Close</button>
        <div class="help-panel__body">
          <app-xapp-chat />
        </div>
      </aside>
    }
  \`,
  styles: \`
    .help-panel {
      position: fixed; top: 0; right: 0; bottom: 0;
      width: min(${settings.maxWidth}px, 100vw);
      display: flex; flex-direction: column;
      background: white; box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15); z-index: 1000;
    }
    .help-panel__body { flex: 1; min-height: 0; }
  \`,
})
export class HelpPanel {
  protected readonly open = signal(false);
}
`,
            };
            break;
    }

    const files: SourceFile[] = [
        { name: "Install", language: "bash", code: `${REACT_PACKAGES}\nnpm install --save-dev @types/react @types/react-dom\n` },
        { name: "xapp-chat.ts", language: "ts", code: component },
        page,
    ];
    if (route) {
        files.push({
            name: "app.routes.ts",
            language: "ts",
            code: `import { Routes } from '@angular/router';

export const routes: Routes = [
  // Lazy-loaded, so the chat widget and React are only downloaded when this page is opened.
  ${route}
];
`,
        });
    }
    files.push({
        name: "angular.json",
        language: "json",
        code: `"styles": [
  "src/styles.css",
  "node_modules/@xapp/chat-widget/dist/index.css"
]
`,
    });
    return files;
}

// ---------------------------------------------------------------- Svelte

function svelteFiles(layout: LayoutId, settings: DemoSettings): SourceFile[] {
    const component = `<script lang="ts">
  import { onMount } from "svelte";
  import { createElement } from "react";
  import { createRoot, type Root } from "react-dom/client";
  import { Chat, type WidgetEnv } from "@xapp/chat-widget";
  import "@xapp/chat-widget/dist/index.css";

  const CHAT_KEY = "${key(settings)}";

  let container: HTMLDivElement;

  onMount(() => {
    let root: Root | null = null;
    let unmounted = false;

    (async () => {
      let studioConfig: WidgetEnv;
      try {
        const res = await fetch(\`https://widget.xapp.ai/config.json?key=\${CHAT_KEY}\`);
        if (!res.ok) {
          throw new Error(\`Chat config request failed: \${res.status}\`);
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
      ${indent(configExpression(settings), 6)}
      root = createRoot(container);
      root.render(createElement(Chat, { config, mode: "${settings.mode}" }));
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
`;

    let page: SourceFile;
    switch (layout) {
        case "contact":
            page = {
                name: "ContactPage.svelte",
                language: "html",
                code: `<script>
  import XappChat from "./lib/XappChat.svelte";
</script>

<div style="display: flex; flex-wrap: wrap; gap: 32px">
  <section style="flex: 1 1 280px">
    <h1>Talk to us</h1>
    <p>Questions? Chat with us and get an answer right away.</p>
  </section>

  <!-- docked mode fills this box, so it needs a height -->
  <div style="flex: 1 1 320px; height: ${settings.height}px; max-width: ${settings.maxWidth}px">
    <XappChat />
  </div>
</div>
`,
            };
            break;
        case "fullpage":
            page = {
                name: "ChatPage.svelte",
                language: "html",
                code: `<script>
  import XappChat from "./lib/XappChat.svelte";
</script>

<div style="display: flex; flex-direction: column; height: 100vh">
  <header><!-- your site header --></header>

  <!-- flex: 1 gives the chat all remaining height -->
  <main style="flex: 1; min-height: 0; width: 100%; max-width: ${settings.maxWidth}px; margin: 0 auto">
    <XappChat />
  </main>
</div>
`,
            };
            break;
        case "panel":
            page = {
                name: "HelpPanel.svelte",
                language: "html",
                code: `<script>
  import XappChat from "./lib/XappChat.svelte";

  let open = $state(false);
</script>

<button onclick={() => (open = true)}>Get help</button>

{#if open}
  <aside class="help-panel">
    <button onclick={() => (open = false)}>Close</button>
    <div class="help-panel__body">
      <XappChat />
    </div>
  </aside>
{/if}

<style>
  .help-panel {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(${settings.maxWidth}px, 100vw);
    display: flex;
    flex-direction: column;
    background: white;
    box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15);
    z-index: 1000;
  }

  .help-panel__body {
    flex: 1;
    min-height: 0;
  }
</style>
`,
            };
            break;
    }

    return [
        { name: "Install", language: "bash", code: `${REACT_PACKAGES}\nnpm install --save-dev @types/react @types/react-dom\n` },
        { name: "lib/XappChat.svelte", language: "html", code: component },
        page,
    ];
}

// ---------------------------------------------------------------- HTML

function htmlFiles(layout: LayoutId, settings: DemoSettings): SourceFile[] {
    const overrides: string[] = [`mode: "${settings.mode}",`];
    if (settings.hideActionBar) {
        overrides.push(`// The action bar is a floating page element; hide it inside an embedded chat.
actionBar: { enabled: false },`);
    }
    // Emitted even though the script served from widget.xapp.ai predates header.hidden (the page
    // shows a note for that): the bundle ignores unknown config, so the copied snippet is harmless
    // today and starts hiding the header once the CDN bundle is redeployed, with no code change.
    if (settings.hideHeader) {
        overrides.push(`// The page already has a heading; ignored in normal mode.
header: { hidden: true },`);
    }
    if (settings.popOut) {
        overrides.push(`// Follow the visitor into a floating window once this scrolls out of view.
popOut: { enabled: true },`);
    }
    const xaConfig =
        overrides.length === 1
            ? `window.xaConfig = { ${overrides[0].slice(0, -1)} };`
            : `window.xaConfig = {
    ${indent(overrides.join("\n"), 4)}
  };`;

    const scripts = `<!-- xaConfig must be set before the widget script -->
<script>
  ${xaConfig}
</script>
<script
  id="xapp-js"
  src="https://widget.xapp.ai/xapp-chat-widget.js?key=${key(settings)}"
></script>`;

    switch (layout) {
        case "contact":
            return [
                {
                    name: "contact.html",
                    language: "html",
                    code: `<div style="display: flex; flex-wrap: wrap; gap: 32px">
  <section style="flex: 1 1 280px">
    <h1>Talk to us</h1>
    <p>Questions? Chat with us and get an answer right away.</p>
  </section>

  <!-- The chat renders into #xapp-widget and fills it: the height goes on this element -->
  <div id="xapp-widget" style="flex: 1 1 320px; height: ${settings.height}px; max-width: ${settings.maxWidth}px"></div>
</div>

${scripts}
`,
                },
            ];
        case "fullpage":
            return [
                {
                    name: "chat.html",
                    language: "html",
                    code: `<body style="margin: 0">
  <div style="display: flex; flex-direction: column; height: 100vh">
    <header><!-- your site header --></header>

    <!-- The chat renders into #xapp-widget and fills it: flex: 1 gives it the remaining height -->
    <div id="xapp-widget" style="flex: 1; min-height: 0; width: 100%; max-width: ${settings.maxWidth}px; margin: 0 auto"></div>
  </div>

  ${indent(scripts, 2)}
</body>
`,
                },
            ];
        case "panel":
            return [
                {
                    name: "services.html",
                    language: "html",
                    code: `<!--
  The script renders the chat once, when the page loads. A panel that mounts the chat
  on demand needs a component instead: choose React, Vue, Angular or Svelte above.
  This version renders the chat at page load inside a panel that starts hidden.
-->
<button onclick="document.getElementById('help-panel').hidden = false">Get help</button>

<aside id="help-panel" hidden
  style="position: fixed; top: 0; right: 0; bottom: 0; width: min(${settings.maxWidth}px, 100vw);
         flex-direction: column; background: white; box-shadow: -4px 0 16px rgba(0, 0, 0, 0.15); z-index: 1000">
  <button onclick="document.getElementById('help-panel').hidden = true">Close</button>
  <div id="xapp-widget" style="flex: 1; min-height: 0"></div>
</aside>

<style>
  #help-panel:not([hidden]) { display: flex; }
</style>

${scripts}
`,
                },
            ];
    }
}

// ---------------------------------------------------------------- entry point

export function sourceFiles(framework: FrameworkId, layout: LayoutId, settings: DemoSettings): SourceFile[] {
    switch (framework) {
        case "react":
            return reactFiles(layout, settings);
        case "nextjs":
            return nextFiles(layout, settings);
        case "vue":
            return vueFiles(layout, settings);
        case "angular":
            return angularFiles(layout, settings);
        case "svelte":
            return svelteFiles(layout, settings);
        case "html":
            return htmlFiles(layout, settings);
    }
}
