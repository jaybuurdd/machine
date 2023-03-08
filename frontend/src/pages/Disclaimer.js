import React, { useState, useEffect } from 'react';
import disclaimer from '../docs/disclaimer.md';
import ReactMarkdown from 'react-markdown';

function Disclaimer() {
    const [markdown, setMarkdown] = useState('');
  
    useEffect(() => {
      fetch(disclaimer)
        .then((response) => response.text())
        .then((text) => setMarkdown(text));
    }, []);
  
    return (
      <div className="markdown">
        <ReactMarkdown source={markdown} />
      </div>
    );
  }
  

export default Disclaimer;
