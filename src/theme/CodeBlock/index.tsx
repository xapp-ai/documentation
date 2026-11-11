import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import type CodeBlockType from '@theme/CodeBlock';
import type { WrapperProps } from '@docusaurus/types';

type Props = WrapperProps<typeof CodeBlockType>;

/** The app IDs XAPP AI issues; anything else in ?appId= is ignored rather than pasted into a snippet. */
const APP_ID = /^[A-Za-z0-9_-]{1,128}$/;

/**
 * Updates the Docusaurus CodeBlock to search for "YOUR_UNIQUE_KEY" and automatically replace it with ?key=foo in the query string of the page.  If `key` is not in the query string it will let them know they need to replace it.
 * "YOUR_APP_ID" is replaced the same way from ?appId=, everywhere it appears in the block.
 * @param props 
 * @returns 
 */
export default function CodeBlockWrapper(props: Props): JSX.Element {

  const [key, setKey] = useState('');
  const [formKey, setFormKey] = useState('');
  const [searchKey, setSearchKey] = useState('');
  const [appId, setAppId] = useState('');

  useEffect(() => {
    console.log(`getting keys`);
    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams);
    setKey(queryParams.get('key') || '');
    setFormKey(queryParams.get('formKey') || '');
    setSearchKey(queryParams.get('searchKey') || '');
    const queryAppId = queryParams.get('appId') || '';
    setAppId(APP_ID.test(queryAppId) ? queryAppId : '');
  }, []);

  // we want to use a regex to find the placeholder, which can be YOUR_CHAT_KEY, YOUR_FORM_KEY, or YOUR_SEARCH_KEY
  const placeholderRegex = /YOUR_(CHAT|FORM|SEARCH)_KEY|YOUR_APP_ID/g;
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
    case 'YOUR_APP_ID':
      placeholderReplacementKey = appId;
      break;
    default:
      placeholderReplacementKey = '';
  }

  const contentWithKey = typeof props.children === 'string' && placeholderReplacementKey ? props.children.split(foundPlaceHolder).join(placeholderReplacementKey) : props.children;

  let helpText: string | undefined = undefined;

  if (hadPlaceholder && !!placeholderReplacementKey) {
    helpText = 'Note! This snippet is customized for your widget. No modification needed.';
  } else if (hadPlaceholder && !placeholderReplacementKey) {
    helpText = `Note! Please replace "${foundPlaceHolder}" with your actual ${foundPlaceHolder === 'YOUR_APP_ID' ? 'app ID' : 'widget key'}.`;
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

