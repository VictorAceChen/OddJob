var React = require('react');

var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var UserApiUtil = require('./../util/user_api_util');

window.SessionStore =SessionStore;
var Account = React.createClass({



  componentWillMount: function () {
    SessionApiUtil.fetchCurrentUser();
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

	render: function () {
    if(!SessionStore.currentUser().username) return(<div>Loading...</div>);
		return (
      <div>
        <h1>Account</h1>
        <div className="separator_top separator">&nbsp;</div>
        <p>Username:&nbsp;</p>{SessionStore.currentUser().username}
        <br/>
          <p>Current Logo:&nbsp;</p>
            <br/>
            <img src={SessionStore.currentUser().logo_url} className=""/>
        <div className="separator_bottom separator">&nbsp;</div>
    </div>

		);
	}
});

module.exports = Account;
