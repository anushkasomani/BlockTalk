import React from 'react';
import './css/Tweet.css'
import { forwardRef } from 'react';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';
import DeleteIcon from '@mui/icons-material/Delete';

const Tweet = forwardRef(
  ({ displayName, title, text, time, personal, upvote, downvote }, ref) => {

    return (
      <div className="post" ref={ref}>
        <div className="post__body">
          <h2 className="post__title">{title}</h2>
          <div className="post__header">
            <div className="post__headerText">
              <h3 className="post__displayName">{displayName}</h3>
              <span className="post__time">{time}</span> {/* Optional time display */}
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" /> {upvote}
            <PublishIcon fontSize="small" /> {downvote}
            {/* Uncomment for delete icon functionality */}
            {/* {personal ? (
              <DeleteIcon fontSize="small" onClick={onClick}/>
            ) : null} */}
          </div>
        </div>
      </div>
    );
  }
);

export default Tweet;