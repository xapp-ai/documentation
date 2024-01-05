// In a React component file, e.g., KeyReader.js

import React from 'react';
import { useLocation } from '@docusaurus/router';

function KeyReader() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const key = queryParams.get('key');

    if (key) {
        return (
            <div>
                Your widget key is: {key}
            </div>
        );
    }

    return <></>;
}

export default KeyReader;
