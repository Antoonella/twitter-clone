import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import {firestore as db}  from './firebase'; 

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>  (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])
  return (
    <div className='feed'>
      <div className='feed__header'>
         <h2>Home</h2> 
      </div>
      <TweetBox />
      {posts.map(post => (
         <Post
         displayName={post.displayName}
         username={post.username}
         verified={post.verified}
         text={post.text}
         avatar={post.avatar}
         image={post.image}
          />
      ))}
      {/* <Post 
      displayName="Sarah Tom"
      username="sarahtom123"
      verified={true}
      text="Yoo It's Working!"
      avatar="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
      image="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
      />    */}
    </div>
  )
}

export default Feed;