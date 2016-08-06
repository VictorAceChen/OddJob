var React = require('react');

var Link = require('react-router').Link;

var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var UserApiUtil = require('./../util/user_api_util');


var Account = React.createClass({

  getInitialState: function() {
    return({
      imageFile: null,
      imageUrl: null
    });
  },



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
        <p>Username:</p>{SessionStore.currentUser().username}
        <br/><br/>
          <p>Current Logo:&nbsp;</p>
            <br/><br/>
            <div>
            <img src={SessionStore.currentUser().image_url} className="index_logo group"/>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
        <div className="separator_bottom separator">&nbsp;</div>
    </div>

		);
	}
});

module.exports = Account;
