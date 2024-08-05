import React from 'react';
import './css/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">BLOCKTALK</div>
      <div className="sidebar-item"><i className="fas fa-home icon"></i> Home</div>
      <div className="sidebar-item"><i className="fas fa-hashtag icon"></i> Explore</div>
      <div className="sidebar-item"><i className="far fa-bell icon"></i> Updates</div>
      <div className="sidebar-item"><i className="fas fa-users icon"></i> Communities</div>
      <div className="sidebar-item"><i className="fas fa-rocket icon"></i> Grok</div>
      <div className="sidebar-item"><i className="far fa-bookmark icon"></i> Bookmarks</div>
      <div className="sidebar-item"><i className="fa-solid fa-heart icon"></i> My Likes</div>
      <div className="sidebar-item"><i className="fas fa-crown icon"></i> Premium</div>
      <div className="sidebar-item"><i className="far fa-user icon"></i> Profile</div>
      <div className="sidebar-item"><i className="fas fa-ellipsis-h icon"></i> More</div>
    </div>
  );
  //<i class="fa-regular fa-heart"></i>
}

export default Sidebar;