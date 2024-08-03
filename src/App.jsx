import React, { useEffect, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';



function App() {
  // const [message, setMessage] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:3005/api/hello')
  //     .then((response) => response.json())
  //     .then((data) => setMessage(data.message))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);

  return (
    <div className='app'>
      
      <Sidebar></Sidebar>
    <MainContent></MainContent>
    <RightSidebar></RightSidebar>
      

    </div>
  );
}

export default App;
