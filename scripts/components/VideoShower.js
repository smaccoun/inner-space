import React from 'react';

var VideoShower = React.createClass({


	getVideoSource: function(video){
		switch(this.props.currentVideo) {
			case "skin": 
				return "https://www.youtube.com/embed/z5VnOS9Ke3g";
				break;
			case "fascia":
				return "https://www.youtube.com/embed/_FtSP-tkSug";
				break;
			case "models":
				return "https://www.youtube.com/embed/PBRhBlVET8s";
				break;
			default : return "https://www.youtube.com/embed/Hn12VMlWFy8"
		};
	},

	render: function() {

		return (
			<div>
				<div className="col-sm-8">
			        <iframe width={850} height={550} src={this.getVideoSource(this.props.currentVideo)} frameBorder={0} allowFullScreen />
			     </div>
			</div>
		)
	}
});

export default VideoShower;