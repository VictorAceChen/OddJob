var React = require('react');

var Link = require('react-router').Link;

var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var UserApiUtil = require('./../util/user_api_util');


var Account = React.createClass({

  getInitialState: function() {
    return({
      imageFile: null,
      imageUrl: SessionStore.currentUser().image_url
    });
  },

  updateFile: function(e){
    var file = e.currentTarget.files[0];
    var fileReader = new FileReader();
    fileReader.onloadend = function() {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    }.bind(this);

    if(file)
    fileReader.readAsDataURL(file);
  },

  editSuccess:function () {
    this.context.router.push("home");
  },
  
  handleSubmit: function(e) {
    e.preventDefault();
    var formData = new FormData();
    // formData.append('user[username]', this.state.username);
    formData.append('user[image]', this.state.imageFile);
    UserApiUtil.editUser(formData, this.editSuccess);
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
            <br/>
            <div>
            <img src={this.state.imageUrl} className="index_logo group"/>
            <input type="file" onChange={this.updateFile}/>
            <br/>
            <button onClick={this.handleSubmit}>Update</button>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
        <div className="separator_bottom separator">&nbsp;</div>
    </div>

		);
	}
});

module.exports = Account;
