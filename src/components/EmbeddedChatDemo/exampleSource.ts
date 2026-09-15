export type ChatMode = "docked" | "normal" | "static";

export type LayoutId = "contact" | "fullpage" | "panel";

export interface DemoSettings {
    readonly chatKey: string;
    readonly mode: ChatMode;
    readonly height: number;
    readonly maxWidth: number;
    readonly hideActionBar: boolean;
}

export const PLACEHOLDER_KEY = "YOUR_CHAT_KEY";

/**
 * Source for the reusable component, reflecting the current demo settings.
 */
export function componentSource(settings: DemoSettings): string {
    const configLine = settings.hideActionBar
        ? `            setConfig({
              ...studioConfig,
              // The action bar is a floating page element; hide it inside an embedded chat.
              actionBar: studioConfig.actionBar && { ...studioConfig.actionBar, enabled: false },
            });`
        : `            setConfig(studioConfig);`;

    return `import { useEffect, useState } from "react";
import { Chat as XappChat, WidgetEnv } from "@xapp/chat-widget";
import "@xapp/chat-widget/dist/index.css";

const CHAT_KEY = "${settings.chatKey || PLACEHOLDER_KEY}";

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
${configLine}
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
  return <XappChat config={config} mode="${settings.mode}" />;
}
`;
}

/**
 * Source for the sample page that places the component, reflecting the current demo settings.
 */
export function layoutSource(layout: LayoutId, settings: DemoSettings): string {
    switch (layout) {
        case "contact":
            return `import { EmbeddedChat } from "./EmbeddedChat";

export function ContactPage() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
      <section style={{ flex: "1 1 280px" }}>
        <h1>Talk to us</h1>
        <p>Questions? Chat with us and get an answer right away.</p>
        {/* ...hours, phone, address... */}
      </section>

      {/* docked mode fills this box, so it needs a height */}
      <div style={{ flex: "1 1 320px", height: ${settings.height}, maxWidth: ${settings.maxWidth} }}>
        <EmbeddedChat />
      </div>
    </div>
  );
}
`;
        case "fullpage":
            return `import { EmbeddedChat } from "./EmbeddedChat";

// e.g. <Route path="/chat" element={<ChatPage />} />
export function ChatPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <header>{/* your site header */}</header>

      {/* flex: 1 gives the chat all remaining height */}
      <main style={{ flex: 1, minHeight: 0, width: "100%", maxWidth: ${settings.maxWidth}, margin: "0 auto" }}>
        <EmbeddedChat />
      </main>
    </div>
  );
}
`;
        case "panel":
            return `import { useState } from "react";
import { EmbeddedChat } from "./EmbeddedChat";

export function HelpPanel() {
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
            <EmbeddedChat />
          </div>
        </aside>
      )}
    </>
  );
}
`;
    }
}
