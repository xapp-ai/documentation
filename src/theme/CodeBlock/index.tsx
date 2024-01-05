import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof CodeBlockType>;

/**
 * Updates the Docusaurus CodeBlock to search for "YOUR_UNIQUE_KEY" and automatically replace it with ?key=foo in the query string of the page.  If `key` is not in the query string it will let them know they need to replace it.
 * @param props 
 * @returns 
 */
export default function CodeBlockWrapper(props: Props): JSX.Element {
  const [key, setKey] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setKey(queryParams.get('key') || '');
  }, []);

  const contentWithKey = typeof props.children === 'string' && key
    ? props.children.replace('YOUR_CHAT_KEY', key)
    : props.children;

  return (
    <>
      <CodeBlock {...props} children={contentWithKey} />
      {!!key ? (
        <p style={{
          marginTop: '1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'small'
        }}> Note! This snippet is customized for your widget. No modification needed.</p >
      ) : (
        <p style={{
          marginTop: '1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'small'
        }}>
          Note! Please replace "YOUR_CHAT_KEY" with your actual widget key.
        </p >
      )
      }
    </>
  );
}

