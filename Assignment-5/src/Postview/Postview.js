// import React from 'react';
import './Postview.css';
import React, { useEffect } from 'react';
var three_dots="..."
const Postview=()=> {
  const [users, setuser]=React.useState([]);
  useEffect(()=>{
    fetch('http://localhost:3004/user')
    .then((res)=>res.json())
    .then((result)=>setuser(result))
  }
  );
  
  return (
    <div className="site-container">
      <div className="Nav-bar">
      <nav >
        <label>InstaClone</label>
        <img src="https://www.freeiconspng.com/thumbs/camera-icon/camera-icon-21.png" alt="camera_img"></img>
      </nav>
      </div>
      <div className="users">
        {users.map((user,index)=>(
          <div className="user" key={index}>
            <div className="user-info">
            <strong className="user-name">{user.name}</strong><br/>
            <label className="location">{user.location}</label>
            <a href="#">{three_dots}</a>
            </div>
            <div>
            <img src={user.PostImage} alt="user-post"/>
            </div>
            <div>
            <div className="like-share">
            <label><img src="https://e7.pngegg.com/pngimages/507/757/png-clipart-computer-icons-heart-like-button-like-share-comment-love-logo-thumbnail.png" alt="like_button"/><img src="https://library.kissclipart.com/20180902/ile/kissclipart-paper-plane-icon-line-clipart-airplane-paper-plane-595a0c462fdba11c.png" alt="share_button"/></label>
            <strong>{user.date}</strong>
            </div>
            <div className="dis">
            <label>{user.likes} Likes</label>
            <h3>{user.description}</h3>
            </div>
            
            </div>
          </div>
        )
        )}

      </div>
    </div>
  );
}

export default Postview;
