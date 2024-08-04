import React from 'react';
import './Init.css';

function Init({ connectWallet }) {
  return (
    <div className='container'>
      <div className='intro'>
        <h1>Welcome to BlockTalk</h1>
        <h2>Speak Freely, Share Boldly.</h2>
      </div>
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default Init;
