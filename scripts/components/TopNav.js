import React from 'react';

var TopNav = React.createClass({
  render: function() {
    return (

      <div className="nav_menu">
        <nav className role="navigation">
          <div className="nav toggle">
            <a id="menu_toggle"><i className="fa fa-bars" /></a>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className>
              <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="images/profile_pic.jpg" alt />Steven MacCoun
                <span className=" fa fa-angle-down" />
              </a>
              <ul className="dropdown-menu dropdown-usermenu pull-right">
                <li><a href="javascript:;">  Profile</a>
                </li>
                <li>
                  <a href="javascript:;">
                    <span className="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">Help</a>
                </li>
                <li><a href="login.html"><i className="fa fa-sign-out pull-right" /> Log Out</a>
                </li>
              </ul>
            </li>
            <li role="presentation" className="dropdown">
              <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                <i className="fa fa-envelope-o" />
                <span className="badge bg-green">6</span>
              </a>
              <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                <li>
                  <a>
                    <span className="image">
                      <img src="images/chris_profile_pic.jpg" alt="Profile Image" />
                    </span>
                    <span>
                      <span>Christopher Totaro</span>
                      <span className="time">3 mins ago</span>
                    </span>
                    <span className="message">
                      Hey! I'm working on this project assembling video footage...wanna help?
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="image">
                      <img src="images/chris_profile_pic.jpg" alt="Profile Image" />
                    </span>
                    <span>
                      <span>Christopher Totaro</span>
                      <span className="time">2 days ago</span>
                    </span>
                    <span className="message">
                      Question on role of superficial fascia in structural integration....
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <span className="image">
                      <img src="images/gil_profile_pic.jpeg" alt="Profile Image" />
                    </span>
                    <span>
                      <span>Gil Hedley</span>
                      <span className="time">2 days ago</span>
                    </span>
                    <span className="message">
                      Welcome to the course! Don't forget to fill out your profile....
                    </span>
                  </a>
                </li>
                <li>
                  <div className="text-center">
                    <a href="#">
                      <strong>See All Alerts</strong>
                      <i className="fa fa-angle-right" />
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
});

export default TopNav;