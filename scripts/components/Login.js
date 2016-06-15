import React from 'react';

var Login = React.createClass({
  render: function() {
    return (
      <div className="right_col">
        <h1>Login Form</h1>
        <div>
          <input type="text" className="form-control" placeholder="Username" required />
        </div>
        <div>
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <div>
          <a className="btn btn-default submit" onClick={this.props.authenticate}>Log in</a>
          <a className="reset_pass" href="#">Lost your password?</a>
        </div>
      </div>
    );
  }
});

export default Login;
