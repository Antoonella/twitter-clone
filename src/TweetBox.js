import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from '@mui/material';

function TweetBox() {
  return (
    <div className='tweetBox'>
      <form action="">
         <div className="tweetBox__input">
            <Avatar src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"></Avatar>
            <input placeholder="What's hapening?" type="text"></input>
            </div>            
            <input className="tweetBox__imageInput" placeholder="Optional: Enter img URL" type="text"></input>
         <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox;