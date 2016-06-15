
import LeftColumn from './components/LeftColumn.js';
import ClassMainPage from './components/ClassMainPage.js';
import TopNav from './components/TopNav.js';
import Login from './components/login.js';

var React = require('react');
var ReactDom = require('react-dom');


import { Router, Route, DefaultRoute, hashHistory, IndexRoute, Navigation, Link, History } from 'react-router'

var createBrowserHistory = require('history/lib/createBrowserHistory');

var Rebase = require('re-base');
var base = Rebase.createClass('https://inner-space.firebaseio.com/');
const ref = new Firebase("https://inner-space.firebaseio.com/");


var App = React.createClass({


	getInitialState : function(){
		return {
			isAuthenticated : false,
			uid : '',
			video : {url: 'https://www.youtube.com/embed/Hn12VMlWFy8'}
		}
	},

	setVideo : function(video){
		console.log("the video is: " + video.url);
		this.setState({video : video})
	},



	authenticate : function(loginData){
		ref.authWithPassword({
		  email    : loginData.username,
		  password : loginData.password
		}, this.authHandler);

	},

	authHandler : function(error, authData) {
		if (error) {
			console.log("Login Failed!", error);
		} else {
			console.log("Authenticated successfully with payload:", authData);
			this.setState({isAuthenticated : true, uid : authData.uid});
		}
  },

	renderMainPage : function() {
		let isAuthenticated = this.state.isAuthenticated;
		let mainPage;

		if(isAuthenticated){
			return (
				<ClassMainPage currentVideo={this.props.params.classId}/>
			)
		} else {
			return (
				<Login authenticate={this.authenticate}/>
			)
		}
	},

	render: function(){


		return(
			<div className="app">
  				<LeftColumn/>
  				<div className="top_nav">
						<TopNav/>
					</div>

					{this.renderMainPage()}
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
