
import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import BrowserFrame from '@site/src/components/BrowserFrame';
import KeyDisplay from '@site/src/components/KeyDisplay';

// See https://docusaurus.io/docs/markdown-features/react#mdx-component-scope
export default {
    // Re-use the default mapping
    ...MDXComponents,
    // Map the "<BrowserFrame>" tag to our Highlight component
    // `BrowserFrame` will receive all props that were passed to `<BrowserFrame>` in MDX
    BrowserFrame,
    // 
    KeyDisplay
};