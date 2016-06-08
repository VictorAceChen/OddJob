var React = require('react');
var MyJobStore = require('../stores/myJob');
var SessionStore = require("../stores/session");
var Link = require('react-router').Link;

var MyJobIndex = React.createClass({

  render: function() {
    if (!this.state.isLoggedIn){
          this.context.router.goBack();
    }
    return (
      <div>
      TEST
    </div>
    );
  }

});

module.exports = MyJobIndex;
