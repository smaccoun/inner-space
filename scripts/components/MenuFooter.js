import React from 'react';

var MenuFooter = React.createClass({
  render: function() {
    return (

      {/* /menu footer buttons */}
      <div className="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="Settings">
          <span className="glyphicon glyphicon-cog" aria-hidden="true" />
        </a>
        <a data-toggle="tooltip" data-placement="top" title="FullScreen">
          <span className="glyphicon glyphicon-fullscreen" aria-hidden="true" />
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Lock">
          <span className="glyphicon glyphicon-eye-close" aria-hidden="true" />
        </a>
        <a data-toggle="tooltip" data-placement="top" title="Logout">
          <span className="glyphicon glyphicon-off" aria-hidden="true" />
        </a>
      </div>
      {/* /menu footer buttons */}
    );
  }
});

export default MenuFooter;