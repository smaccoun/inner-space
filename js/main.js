var React = require('react');
var ReactDom = require('react-dom');

var VideoSelector = React.createClass({

	render: function() {
		return (
			<p>Yo whatup dog </p>
		)
	}
});

ReactDom.render(<VideoSelector/>, document.querySelector('#main'));