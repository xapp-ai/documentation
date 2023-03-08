import "@xapp/intelligent-search-widget/dist/index.css";

import React, { useMemo } from 'react';
import { SearchContainer, SearchIcon, SearchWidgetConfig, SearchWidgetTheme, WidgetCardTheme } from "@xapp/intelligent-search-widget";

export default function SearchBar(): JSX.Element {
    return (
        <button className="xapp-search-button" style={{ width: "80px", height: "40px", borderRadius: "40px", cursor: "pointer", border: "1" }} >
            <span style={{ display: "flex", alignItems: "center" }} >
                <SearchIcon />
                <span>Search</span>
            </span>
        </button >
    );
}
