// In a React component file, e.g., KeyReader.js
import React, { useEffect, useState } from 'react';
import CodeBlockWrapper from '../theme/CodeBlock';

/**
 * Display your keys for copy pasting.
 * @returns 
 */

const KeyDisplay: React.FC = () => {
    const [key, setKey] = useState('');
    const [formKey, setFormKey] = useState('');
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        console.log(`getting keys`);
        const queryParams = new URLSearchParams(window.location.search);
        console.log(queryParams);
        setKey(queryParams.get('key') || '');
        setFormKey(queryParams.get('formKey') || '');
        setSearchKey(queryParams.get('searchKey') || '');
    }, []);

    return (
        <>
            {key && (
                <div>
                    <b>Chat Widget Key</b>
                    <CodeBlockWrapper>{`${key}`}</CodeBlockWrapper>
                </div>
            )}
            {formKey && (
                <div>
                    <b>Scheduling/Form Widget Key</b>
                    <CodeBlockWrapper>{`${formKey}`}</CodeBlockWrapper>
                </div>
            )}
            {searchKey && (
                <div>
                    <b>Search Widget Key</b>
                    <CodeBlockWrapper>{`${searchKey}`}</CodeBlockWrapper>
                </div>
            )}
        </>
    );
}

export default KeyDisplay;
