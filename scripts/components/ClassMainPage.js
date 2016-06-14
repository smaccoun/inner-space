import React from 'react';

import VideoShower from './VideoShower.js';
import ToDoList from './ToDoList.js';
import Comments from './Comments.js';


var ClassMainPage = React.createClass({


	render: function() {

		return (
			<div className="right_col">
				 
				<VideoShower  currentVideo={this.props.currentVideo} setVideo={this.setVideo}/>
				<ToDoList/>
	    		<Comments/>
	    		
	    	</div>
		)
	}
});

export default ClassMainPage;