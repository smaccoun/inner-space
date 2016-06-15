
import LeftColumn from './components/LeftColumn.js';
import ClassMainPage from './components/ClassMainPage.js';
import TopNav from './components/TopNav.js';
import Login from './components/login.js';

var React = require('react');
var ReactDom = require('react-dom');


import { Router, Route, DefaultRoute, hashHistory, IndexRoute, Navigation, Link, History } from 'react-router'

var createBrowserHistory = require('history/lib/createBrowserHistory');

var Rebase = require('re-base');
var base = Rebase.createClass('https://project-8672031736751064723.firebaseio.com/');



var App = React.createClass({


	getInitialState : function(){
		return {
			isLoggedIn : false,
			video : {url: 'https://www.youtube.com/embed/Hn12VMlWFy8'}
		}
	},

	setVideo : function(video){
		console.log("the video is: " + video.url);
		this.setState({video : video})
	},



	authenticate : function(){
		this.setState({isLoggedIn : true});
		console.log(this.state.isLoggedIn);
	},

	render: function(){
		let isAuthenticated = this.state.isLoggedIn;
		let mainPage;

		if(isAuthenticated){
			mainPage = (
				<ClassMainPage currentVideo={this.props.params.classId}/>
			)
		} else {
			mainPage = (
				<Login authenticate={this.authenticate}/>
			)
		}

		return(
			<div className="app">
  				<LeftColumn/>
  				<div className="top_nav">
						<TopNav/>
					</div>
					{mainPage}
			</div>
		)
	}
});


var NotFound = React.createClass({
  render : function() {
    return <h1>Not Found!</h1>
  }
});

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
    	<IndexRoute component={App}/>
    	<Route path="classes/:classId" component={App}/>
    </Route>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDom.render(routes, document.querySelector('#page_content'));
