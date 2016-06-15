import React from 'react';

var Login = React.createClass({

  submit : function(event) {
    event.preventDefault();

    var login = {
      username : this.refs.Username.value,
      password : this.refs.Password.value
    }

    this.props.authenticate(login);
  },

  render: function() {
    return (
      <div className="right_col">
        <h1>Login Form</h1>
        <form ref="login" onSubmit={this.submit}>
          <input type="text" className="form-control" ref="Username" required />
          <input type="password" className="form-control" ref="Password" required />
          <button className="btn btn-default submit" >Log in </button>
          <a className="reset_pass" href="#">Lost your password?</a>
        </form>
      </div>
    );
  }
});

export default Login;
