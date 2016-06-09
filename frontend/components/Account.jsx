var React = require('react');

var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var UserApiUtil = require('./../util/user_api_util');

window.SessionStore =SessionStore;
var Account = React.createClass({

  getInitialState: function () {
    return { user: null };
  },


  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();
    SessionStore.addListener(this.forceUpdate.bind(this));
    this.setState({user: SessionStore.currentUser()});
  },

	render: function () {

    if(!this.state.user) return(<div>Loading...</div>);
		return (
      <div>
        <h1>Account</h1>
        <div className="separator_top separator">&nbsp;</div>
        Username:
        <br/>
        {this.state.username}
        <br/>
        <div className="separator_bottom separator">&nbsp;</div>
    </div>

		);
	}
});

module.exports = Account;
