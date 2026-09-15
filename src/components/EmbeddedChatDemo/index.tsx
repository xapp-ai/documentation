import React, { useEffect, useMemo, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import type { WidgetEnv } from "@xapp/chat-widget";
import "@xapp/chat-widget/dist/index.css";

import { ChatMode, componentSource, DemoSettings, LayoutId, layoutSource } from "./exampleSource";
import styles from "./styles.module.css";

/** The XAPP AI assistant this site already uses, shown when no key is entered. */
const DEMO_CHAT_KEY = "32046c1c-e65a-42ef-8653-e8f6038f369b";

const LAYOUTS: { id: LayoutId; label: string; description: string }[] = [
    { id: "contact", label: "Contact page", description: "Chat beside your own page content." },
    { id: "fullpage", label: "Full-page chat", description: "A dedicated chat route that fills the screen." },
    { id: "panel", label: "Slide-out panel", description: "Opens from a button, mounts the chat on demand." },
];

const MODES: { id: ChatMode; label: string; description: string }[] = [
    { id: "docked", label: "docked", description: "Fills its container. Use this for embedding." },
    { id: "normal", label: "normal", description: "Floating button and window in the screen corner, like the script snippet." },
    { id: "static", label: "static", description: "Always-open window fixed to the screen corner. Does not sit inside your layout." },
];

type ConfigState =
    | { status: "loading" }
    | { status: "ready"; config: WidgetEnv }
    | { status: "error"; message: string };

/**
 * This site injects the floating chat script on every page. Two chat windows on one page is
 * exactly what the install guide warns against, so hide the site's own widget while this page is open,
 * along with its form widget side tab, which sits over the controls. The form itself stays usable.
 */
function useHideSiteWidget(): void {
    useEffect(() => {
        const style = document.createElement("style");
        style.textContent = '#xapp-widget, #xapp-form-widget [class*="xapp_form_sticky_button"] { display: none !important; }';
        document.head.appendChild(style);
        return () => style.remove();
    }, []);
}

function useChatConfig(chatKey: string): ConfigState {
    const [state, setState] = useState<ConfigState>({ status: "loading" });

    useEffect(() => {
        let cancelled = false;
        setState({ status: "loading" });
        (async () => {
            try {
                const res = await fetch(`https://widget.xapp.ai/config.json?key=${encodeURIComponent(chatKey)}`);
                if (!res.ok) {
                    throw new Error(`config.json returned ${res.status}`);
                }
                const config = (await res.json()) as WidgetEnv;
                if (!config?.connection?.serverUrl) {
                    throw new Error("No chat widget was found for this key");
                }
                if (!cancelled) {
                    setState({ status: "ready", config });
                }
            } catch (error) {
                if (!cancelled) {
                    setState({ status: "error", message: error instanceof Error ? error.message : String(error) });
                }
            }
        })();
        return () => {
            cancelled = true;
        };
    }, [chatKey]);

    return state;
}

const LiveChat: React.FC<{ state: ConfigState; mode: ChatMode; hideActionBar: boolean }> = ({ state, mode, hideActionBar }) => {
    if (state.status === "loading") {
        return <div className={styles.placeholder}>Loading chat configuration…</div>;
    }
    if (state.status === "error") {
        return <div className={styles.placeholder}>Could not load chat: {state.message}</div>;
    }

    // Required lazily: the widget touches window at import time, which breaks static rendering.
    const { Chat: XappChat } = require("@xapp/chat-widget") as typeof import("@xapp/chat-widget");
    const config: WidgetEnv = hideActionBar
        ? { ...state.config, actionBar: state.config.actionBar && { ...state.config.actionBar, enabled: false } }
        : state.config;

    return <XappChat config={config} mode={mode} />;
};

const MockLines: React.FC<{ count: number }> = ({ count }) => (
    <>
        {Array.from({ length: count }, (_, i) => (
            <div key={i} className={styles.mockLine} style={{ width: `${90 - ((i * 17) % 40)}%` }} />
        ))}
    </>
);

const EmbeddedChatDemo: React.FC = () => {
    useHideSiteWidget();

    const initialKey = useMemo(() => new URLSearchParams(window.location.search).get("key") ?? "", []);
    const [keyInput, setKeyInput] = useState(initialKey);
    const [chatKey, setChatKey] = useState(initialKey);
    const [layout, setLayout] = useState<LayoutId>("contact");
    const [mode, setMode] = useState<ChatMode>("docked");
    const [height, setHeight] = useState(560);
    const [maxWidth, setMaxWidth] = useState(420);
    const [hideActionBar, setHideActionBar] = useState(true);
    const [panelOpen, setPanelOpen] = useState(false);
    const [sourceTab, setSourceTab] = useState<"component" | "page">("component");

    const configState = useChatConfig(chatKey || DEMO_CHAT_KEY);
    const settings: DemoSettings = { chatKey, mode, height, maxWidth, hideActionBar };

    const applyKey = (event: React.FormEvent) => {
        event.preventDefault();
        const trimmed = keyInput.trim();
        setChatKey(trimmed);
        const url = new URL(window.location.href);
        if (trimmed) {
            url.searchParams.set("key", trimmed);
        } else {
            url.searchParams.delete("key");
        }
        window.history.replaceState(null, "", url);
    };

    // Remount the widget when anything that shapes its config changes, so each variation starts clean.
    const chat = (
        <LiveChat
            key={`${chatKey}|${mode}|${hideActionBar}|${layout}`}
            state={configState}
            mode={mode}
            hideActionBar={hideActionBar}
        />
    );

    return (
        <div className={styles.demo}>
            <form className={styles.keyBar} onSubmit={applyKey}>
                <label htmlFor="chat-key" className={styles.label}>
                    Chat widget key
                </label>
                <div className={styles.keyRow}>
                    <input
                        id="chat-key"
                        className={styles.input}
                        value={keyInput}
                        onChange={(e) => setKeyInput(e.target.value)}
                        placeholder="Leave empty to use the XAPP AI demo assistant"
                        spellCheck={false}
                    />
                    <button type="submit" className="button button--primary">
                        Load
                    </button>
                </div>
                <span className={styles.hint}>
                    {chatKey ? "Showing your widget. Share this page's URL to share the demo." : "Showing the XAPP AI demo assistant."}
                </span>
            </form>

            <div className={styles.tabs} role="tablist" aria-label="Example layout">
                {LAYOUTS.map((l) => (
                    <button
                        key={l.id}
                        role="tab"
                        aria-selected={layout === l.id}
                        className={`${styles.tab} ${layout === l.id ? styles.tabActive : ""}`}
                        onClick={() => {
                            setLayout(l.id);
                            setPanelOpen(false);
                        }}
                    >
                        <span className={styles.tabLabel}>{l.label}</span>
                        <span className={styles.tabDescription}>{l.description}</span>
                    </button>
                ))}
            </div>

            <div className={styles.workspace}>
                <aside className={styles.controls}>
                    <fieldset className={styles.fieldset}>
                        <legend className={styles.label}>mode</legend>
                        {MODES.map((m) => (
                            <label key={m.id} className={styles.radio}>
                                <input type="radio" name="mode" checked={mode === m.id} onChange={() => setMode(m.id)} />
                                <span>
                                    <code>{m.label}</code>
                                    <span className={styles.radioDescription}>{m.description}</span>
                                </span>
                            </label>
                        ))}
                    </fieldset>

                    {layout === "contact" && (
                        <label className={styles.slider}>
                            <span className={styles.label}>
                                Container height <code>{height}px</code>
                            </span>
                            <input type="range" min={360} max={760} step={20} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                        </label>
                    )}

                    <label className={styles.slider}>
                        <span className={styles.label}>
                            {layout === "panel" ? "Panel width" : "Max width"} <code>{maxWidth}px</code>
                        </span>
                        <input type="range" min={320} max={720} step={20} value={maxWidth} onChange={(e) => setMaxWidth(Number(e.target.value))} />
                    </label>

                    <label className={styles.checkbox}>
                        <input type="checkbox" checked={hideActionBar} onChange={(e) => setHideActionBar(e.target.checked)} />
                        <span>
                            Hide action bar
                            <span className={styles.radioDescription}>The Chat / Book buttons float over the page, so an embedded chat usually hides them.</span>
                        </span>
                    </label>

                    {mode !== "docked" && (
                        <p className={styles.warning}>
                            <code>{mode}</code> mode is positioned against the screen, not the sample page — look in the bottom-right corner of your browser.
                        </p>
                    )}
                </aside>

                <div className={styles.browser}>
                    <div className={styles.browserBar}>
                        <span className={styles.dot} style={{ background: "#ff605c" }} />
                        <span className={styles.dot} style={{ background: "#ffbd44" }} />
                        <span className={styles.dot} style={{ background: "#00ca56" }} />
                        <span className={styles.address}>yoursite.com/{layout === "fullpage" ? "chat" : layout === "panel" ? "services" : "contact"}</span>
                    </div>

                    {layout === "contact" && (
                        <div className={styles.contactPage}>
                            <section className={styles.contactCopy}>
                                <h2>Talk to us</h2>
                                <p>Questions? Chat with us and get an answer right away.</p>
                                <MockLines count={6} />
                            </section>
                            <div className={styles.chatBox} style={{ height, maxWidth }}>
                                {chat}
                            </div>
                        </div>
                    )}

                    {layout === "fullpage" && (
                        <div className={styles.fullPage}>
                            <div className={styles.mockHeader}>
                                <strong>Your Site</strong>
                                <span>Services · About · Chat</span>
                            </div>
                            <div className={styles.fullPageMain} style={{ maxWidth }}>
                                {chat}
                            </div>
                        </div>
                    )}

                    {layout === "panel" && (
                        <div className={styles.panelPage}>
                            <section className={styles.contactCopy}>
                                <h2>Our services</h2>
                                <MockLines count={8} />
                                <button className="button button--primary" onClick={() => setPanelOpen(true)}>
                                    Get help
                                </button>
                            </section>
                            {panelOpen && (
                                <aside className={styles.panel} style={{ width: `min(${maxWidth}px, 100%)` }}>
                                    <div className={styles.panelHeader}>
                                        <span>Help</span>
                                        <button className="button button--sm button--secondary" onClick={() => setPanelOpen(false)}>
                                            Close
                                        </button>
                                    </div>
                                    <div className={styles.panelBody}>{chat}</div>
                                </aside>
                            )}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.source}>
                <div className={styles.sourceTabs} role="tablist" aria-label="Source code">
                    <button role="tab" aria-selected={sourceTab === "component"} className={`${styles.sourceTab} ${sourceTab === "component" ? styles.sourceTabActive : ""}`} onClick={() => setSourceTab("component")}>
                        EmbeddedChat.tsx
                    </button>
                    <button role="tab" aria-selected={sourceTab === "page"} className={`${styles.sourceTab} ${sourceTab === "page" ? styles.sourceTabActive : ""}`} onClick={() => setSourceTab("page")}>
                        {layout === "contact" ? "ContactPage.tsx" : layout === "fullpage" ? "ChatPage.tsx" : "HelpPanel.tsx"}
                    </button>
                    <span className={styles.hint}>Updates as you change the settings above.</span>
                </div>
                <CodeBlock language="tsx">{sourceTab === "component" ? componentSource(settings) : layoutSource(layout, settings)}</CodeBlock>
            </div>
        </div>
    );
};

export default EmbeddedChatDemo;
