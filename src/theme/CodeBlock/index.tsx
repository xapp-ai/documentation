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

  // we want to use a regex to find the placeholder, which can be YOUR_CHAT_KEY, YOUR_FORM_KEY, or YOUR_SEARCH_KEY
  const placeholderRegex = /YOUR_(CHAT|FORM|SEARCH)_KEY/g;
  // now use the regex to get the placeholder in full
  const foundPlaceHolder: string = typeof props.children === 'string' && placeholderRegex.test(props.children) ? props.children.match(placeholderRegex)![0] : '';

  const hadPlaceholder = !!foundPlaceHolder;

  // replace the placeholder with the actual key in the code block
  let placeholderReplacementKey: string;

  switch (foundPlaceHolder) {
    case 'YOUR_CHAT_KEY':
      placeholderReplacementKey = key;
      break;
    case 'YOUR_FORM_KEY':
      placeholderReplacementKey = formKey;
      break;
    case 'YOUR_SEARCH_KEY':
      placeholderReplacementKey = searchKey;
      break;
    default:
      placeholderReplacementKey = '';
  }

  const contentWithKey = typeof props.children === 'string' && placeholderReplacementKey ? props.children.replace(foundPlaceHolder, placeholderReplacementKey) : props.children;

  let helpText: string | undefined = undefined;

  if (hadPlaceholder && !!placeholderReplacementKey) {
    helpText = 'Note! This snippet is customized for your widget. No modification needed.';
  } else if (hadPlaceholder && !placeholderReplacementKey) {
    helpText = `Note! Please replace "${foundPlaceHolder}" with your actual widget key.`;
  }

  return (
    <>
      <CodeBlock {...props} children={contentWithKey} />
      {helpText ? (
        <p style={{
          marginTop: '1rem',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 'small'
        }}>{helpText}</p>
      ) : (<></>)}
    </>
  );
}

