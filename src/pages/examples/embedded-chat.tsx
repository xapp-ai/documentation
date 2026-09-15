import React from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import Link from "@docusaurus/Link";

export default function EmbeddedChatExamples(): JSX.Element {
    return (
        <Layout title="Embedded Chat Examples" description="Interactive examples of the XAPP chat widget embedded in a React page, with source code.">
            <main className="container margin-vert--lg">
                <h1>Embedded Chat Examples</h1>
                <p>
                    Live examples of the chat widget embedded inside a React page with the <code>@xapp/chat-widget</code> component. Pick a
                    layout, adjust the settings, and copy the source below — it updates to match. Enter your own widget key to preview your
                    assistant. See <Link to="/help/install/react">Installation on React and Single-Page Apps</Link> for the full guide.
                </p>
                <BrowserOnly fallback={<div>Loading examples…</div>}>
                    {() => {
                        const EmbeddedChatDemo = require("@site/src/components/EmbeddedChatDemo").default;
                        return <EmbeddedChatDemo />;
                    }}
                </BrowserOnly>
            </main>
        </Layout>
    );
}
