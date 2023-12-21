import "@xapp/intelligent-search-widget/dist/index.css";

import React, { useMemo } from 'react';
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function SearchBar(): JSX.Element {
    return (
        <BrowserOnly fallback={<></>}>
            {() => {
                const { SearchIcon } = require("@xapp/intelligent-search-widget");

                return (<button className="xapp-search-button" style={{ width: "80px", height: "40px", borderRadius: "40px", cursor: "pointer", border: "1" }} >
                    <span style={{ display: "flex", alignItems: "center" }} >
                        <SearchIcon />
                        <span>Search</span>
                    </span>
                </button >
                );
            }}

        </BrowserOnly >
    );
}
