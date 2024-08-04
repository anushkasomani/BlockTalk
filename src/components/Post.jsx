import React, { useState } from 'react'
import Twitter from '../jsonFiles/BlockTalkContract.json'
import {ethers} from 'ethers';
import './Post.css';

const Post = () => {
  const TwitterContractAddress="0xB918f0Dd469600a45D2cC12a2B6b7b0745755D22";
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetTitle, setTweetTitle]= useState("");

  const addTweet= async()=>{
    try {
      const {ethereum} = window;

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TwitterContract = new ethers.Contract(
          TwitterContractAddress,
          Twitter.abi,
          signer
        );
        let twitterTx = await TwitterContract.addTweet(tweetMessage, tweetTitle,false);
        console.log(JSON.stringify(twitterTx, null, 2));
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }
  }

  const sendTweet = (e) => {
    e.preventDefault();

    addTweet();
    setTweetTitle("");
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
    <form>
      <div className="tweetBox__input">
      <input
        value={tweetTitle}
        onChange={(e) => setTweetTitle(e.target.value)}
        className="tweetBox__imageInput"
        placeholder="Add Your Tweet Title"
        type="text"
      />
        <input
          onChange={(e) => setTweetMessage(e.target.value)}
          value={tweetMessage}
          placeholder="What's happening?"
          type="text"
        />
      </div>
      
      <button
        onClick={sendTweet}
        type="submit"
        className="tweetBox__tweetButton"
      >
        Tweet
      </button>
    </form>
  </div>
  ) 
}
export default Post;