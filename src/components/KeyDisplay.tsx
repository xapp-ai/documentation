// In a React component file, e.g., KeyReader.js
import React, { useEffect, useState } from 'react';
import CodeBlockWrapper from '../theme/CodeBlock';

/**
 * Display the Widget Key from the `key` query parameter (Studio links here with it), for copy pasting.
 * The scheduling and search keys are no longer used by the WordPress plugin.
 */

const KeyDisplay: React.FC = () => {
    const [key, setKey] = useState('');

    useEffect(() => {
        setKey(new URLSearchParams(window.location.search).get('key') || '');
    }, []);

    if (!key) {
        return null;
    }

    return (
        <div>
            <b>Widget Key</b>
            <CodeBlockWrapper>{`${key}`}</CodeBlockWrapper>
        </div>
    );
}

export default KeyDisplay;
