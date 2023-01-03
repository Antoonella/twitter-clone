import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import React from 'react';
import "./Post.css";

function Post({
  displayName,
  username,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className='post'>
      <div className="post__avatar">
        <Avatar src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"></Avatar>
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Sarah Tom {" "} <span className='post__headerSpecial'>
                 <VerifiedIcon className="post__badge"/>
                @sarahtom123
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Yoo It's Working!</p>
          </div>
        </div>
        <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small"/>
          <RepeatIcon fontSize="small"/>
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
    
      </div>
    </div>
  )
}

export default Post;