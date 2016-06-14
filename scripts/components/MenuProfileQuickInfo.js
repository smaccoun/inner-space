import React from 'react';

var MenuProfileQuickInfo = React.createClass({
  render: function() {
    return (
      <div className="profile">
        <div className="profile_pic">
          <img src="images/profile_pic.jpg" alt="..." className="img-circle profile_img" />
        </div>
        <div className="profile_info">
          <span>Welcome,</span>
          <h2>Steven MacCoun</h2>
        </div>
      </div>
    );
  }
});

export default MenuProfileQuickInfo;