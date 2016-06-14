import React from 'react';
import { Link } from 'react-router';

var SideMenu = React.createClass({
  render: function() {
    return (
      <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
        <div className="menu_section">
          <h3>Somanaut</h3>
          <ul className="nav side-menu">
            <li><a><i className="fa fa-home" /> Classes <span className="fa fa-chevron-down" /></a>
              <ul className="nav child_menu">
                <li className="current"><a href="#">Models and Intentions</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><Link to="/classes/models">Video</Link>
                    </li>
                    <li className="sub_menu current"><a href="#">Quiz</a>
                    </li>
                    <li className="current"><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
                <li className="current"><a href="#">Skin</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><Link to="/classes/skin">Video</Link>
                    </li>
                    <li className="sub_menu"><Link to="/classes/skin">Quiz</Link>
                    </li>
                    <li><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Superficial Fascia</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><Link to="/classes/fascia">Video</Link>
                    </li>
                    <li className="sub_menu"><a href="#">Quiz</a>
                    </li>
                    <li><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Deep Fascia</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><a href="#">Quiz</a>
                    </li>
                    <li><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Muscle</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><a href="#">Quiz</a>
                    </li>
                    <li><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Viscera</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><a href="#">Quiz</a>
                    </li>
                    <li><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Nerve Tree and Whole Heart</a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><a href="#">Quiz</a>
                    </li>
                    <li><a href="#">Meditations</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li> 
          </ul>
        </div>
        <div className="menu_section">
          <h3>Additional Material</h3>
          <ul className="nav side-menu">
            <li><a href="javascript:void(0)"><i className="fa fa-laptop" /> Forum </a>
            </li><li><a href="javascript:void(0)"><i className="fa fa-picture-o" /> Galleries <span className="fa fa-chevron-down" /> </a>
              <ul className="nav child_menu">
                <li><a>Atlas Galleries</a>
                </li>
                <li><a href="#">Short Videos</a>
                </li>
                <li><a href="#">Anatomy Images</a>
                </li>
                <li><a href="#">Audio</a>
                </li>
                <li><a href="#">Meditations</a>
                </li>
              </ul>
            </li>
            <li><a><i className="fa fa-sitemap" /> Glossary <span className="fa fa-chevron-down" /></a>
              <ul className="nav child_menu">
                <li><a href="#">Skin</a>
                </li><li><a>Superfiscial Fascia <span className="fa fa-chevron-down" /></a>
                  <ul className="nav child_menu">
                    <li className="sub_menu"><a href="#">Lymph</a>
                    </li>
                    <li><a href="#">Nerves</a>
                    </li>
                    <li><a href="#">Lipids</a>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Deep Fascia</a>
                </li>
                <li><a href="#">Muscle</a>
                </li>
                <li><a href="#">Viscera</a>
                </li>
                <li><a href="#">Brain</a>
                </li>
              </ul>
            </li>
            <li><a><i className="fa fa-bell" /> Extras <span className="fa fa-chevron-down" /></a>
              <ul className="nav child_menu">
                <li><a href="#">Interviews</a>
                </li>
                <li><a href="login.html">Login Page</a>
                </li>
              </ul>
            </li><li><a href="javascript:void(0)"><i className="fa fa-laptop" /> Landing Page <span className="label label-success pull-right">Coming Soon</span></a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

export default SideMenu;