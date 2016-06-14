import React from 'react';

var Comments = React.createClass({
  render: function() {
    return (

      <div id="comments" className="col-md-9 col-sm-9 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Comments</h2>
            <ul className="nav navbar-right panel_toolbox">
              <li><a href="#"><i className="fa fa-pencil-square-o" /></a>
              </li>
              <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a className="close-link"><i className="fa fa-close" /></a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="x_content">
            <div className="dashboard-widget-content">
              <ul className="list-unstyled timeline widget">
                <li>
                  <div className="block">
                    <img src="images/chris_profile_pic.jpg" className="avatar" alt="Avatar" />
                    <div className="block_content">
                      <h2 className="title">
                        <a>Can someone summarize the roles of the superficial fascia??</a>
                      </h2>
                      <div className="byline">
                        <span>13 hours ago</span> by <a>Christopher Totaro</a>
                      </div>
                      <p className="excerpt">Protective, lymphatic, ....???
                      </p>
                    </div>
                    <div>
                      3
                      <i className="glyphicon glyphicon-chevron-up" />
                      <b> | </b>
                      <i className="glyphicon glyphicon-chevron-down" />
                      Reply
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block reply">
                    <img src="images/profile_pic.jpg" className="avatar" alt="Avatar" />
                    <div className="block_content">
                      <h2 className="title">
                        <a>Protective, lymphatic, endocrine, insulating, energy store...</a>
                      </h2>
                      <div className="byline">
                        <span>13 hours ago</span> by <a>Steven MacCoun</a>
                      </div>
                      <p className="excerpt">Those are all I can remember!
                      </p>
                    </div>
                    <div>
                      2
                      <i className="glyphicon glyphicon-chevron-up" />
                      <b> | </b>
                      <i className="glyphicon glyphicon-chevron-down" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <img src="images/profile_pic.jpg" className="avatar" alt="Avatar" />
                    <div className="block_content">
                      <h2 className="title">
                        <a>What are other ways that we are affected by EM radiation?</a>
                      </h2>
                      <div className="byline">
                        <span>3 days ago</span> by <a>Steven MacCoun</a>
                      </div>
                      <p className="excerpt">And what research is being done with cellphones?!
                      </p>
                    </div>
                    <div>
                      0
                      <i className="glyphicon glyphicon-chevron-up" />
                      <b> | </b>
                      <i className="glyphicon glyphicon-chevron-down" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="block">
                    <img src="images/profile_pic.jpg" className="avatar" alt="Avatar" />
                    <div className="block_content">
                      <h2 className="title">
                        <a>Is adipose the official correct name? See @36:40</a>
                      </h2>
                      <div className="byline">
                        <span>13 hours ago</span> by <a>Steven MacCoun</a>
                      </div>
                      <p className="excerpt">What body determines this name? Just curious
                      </p>
                    </div>
                    <div className="row">
                      0
                      <i className="glyphicon glyphicon-chevron-up" />
                      <b> | </b>
                      <i className="glyphicon glyphicon-chevron-down" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Comments;