import React from 'react';
import SideMenu from './SideMenu.js';
import MenuProfileQuickInfo from './MenuProfileQuickInfo.js';


var LeftColumn = React.createClass({
  render: function() {
    return (
         <div className="col-md-3 left_col">
            <div className="left_col scroll-view">
              <div className="navbar nav_title" style={{border: 0}}>
                <a href="index.html" className="site_title"><i className="fa fa-universal-access" /> <span>Inner Space</span></a>
              </div>
              <div className="clearfix" />

            <MenuProfileQuickInfo username={this.props.username}/>
            <br/>
            <SideMenu/>
          </div>
        </div>

      )
  }
});

export default LeftColumn;
