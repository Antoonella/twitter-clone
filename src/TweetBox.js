import React, { useState } from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';
import {firestore as db}  from './firebase'; 

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('');
  const [tweetImage, setTweetImage] = useState('');

  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
       displayName: 'James Ken',
       username: 'jamesken',
       verified: true,
       text: tweetMessage,
       image: tweetImage,
       avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
    });
    setTweetMessage("");
    setTweetImage("");
  }
  return (
    <div className='tweetBox'>
      <form action="">
         <div className="tweetBox__input">
            <Avatar src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"></Avatar>
            <input
            onChange={e => setTweetMessage(e.target.value)}
             value={tweetMessage} placeholder="What's hapening?" type="text"></input>
            </div>            
            <input
            value={tweetImage}
            onChange={e => setTweetImage(e.target.value)}
             className="tweetBox__imageInput" placeholder="Optional: Enter img URL" type="text"></input>
         <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox; 