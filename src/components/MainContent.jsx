import React, { useEffect, useState } from 'react';
import './MainContent.css'

function App() {
  const [htmlContent, setHtmlContent] = useState('');
  const [message, setMessage] = useState(''); // Added state for message

  useEffect(() => {
    fetch('http://localhost:3006/html')
      .then((response) => response.text()) // Use response.text() for HTML content
      .then((data) => setHtmlContent(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="main-content">
      <div className="post-box">
        <div className="post-box-header">What is happening?!</div>
        <div className="post-box-content">
          <input type="text" placeholder="What's happening?" />
          <button>Post</button>
        </div>
      </div>
      <h1>{message}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default App;
