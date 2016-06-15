import React from 'react';

var MenuProfileQuickInfo = React.createClass({
  render: function() {
    let username = this.props.username;
    let imgSrc = '';
    console.log(username);
    let loginStatus = 'Please login';
    if(username.length > 0){
      loginStatus = 'Welcome,';
      imgSrc = "images/" + username + "_profile_pic" + ".jpg";
      console.log(imgSrc);
    }

    return (
      <div className="profile">
        <div className="profile_pic">
          <img src={imgSrc} alt="..." className="img-circle profile_img" />
        </div>
        <div className="profile_info">
          <span>{loginStatus}</span>
          <h2>{this.props.username}</h2>
        </div>
      </div>
    );
  }
});

export default MenuProfileQuickInfo;
