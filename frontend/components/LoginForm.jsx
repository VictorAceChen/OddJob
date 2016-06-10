var React = require('react');

var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },

  onErrorChange: function () {
    this.setState(
      { password: "" }
    );
  },

  fieldErrors: function (field) {
    var errors = ErrorStore.formErrors(this.formType());
    if (!errors[field]) { return; }

    var messages = errors[field].map(function (errorMsg, i) {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul className="control_error">{ messages }</ul>;
  },

  formType: function () {
    return this.props.location.pathname.slice(1);
  },

  componentDidMount: function () {
    this.errorListener = ErrorStore.addListener(this.onErrorChange);
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.goBack();
    }
  },

	handleSubmit: function (e) {
		e.preventDefault();

		var formData = {
			username: this.state.username,
			password: this.state.password
		};

    if (this.props.location.pathname === "/login") {
      SessionApiUtil.login(formData);
    } else {
      UserApiUtil.signup(formData);
    }
	},

  handleGuestSubmit: function(e) {
    e.preventDefault();
    SessionApiUtil.login({ username: "guest", password: "password" });
  },

	render: function () {
    var formTitle;
    var navLink;
    var greeting;
    if (this.formType() === "login") {
      formTitle = "Sign In";
      navLink = <Link to="/signup" activeClassName="current" className="link">Create an account free</Link>;
      greeting = "Not a member? ";
    } else {
      formTitle = "Create An Account";
      navLink = <Link to="/login" activeClassName="current" className="link">Sign In</Link>;
      greeting = "Already have an account? ";
    }

    var entryForm = (
        <form id="loginform" name="loginform" onSubmit={this.handleSubmit}>
          <div className="form_content">

            <label htmlFor="signin_username" className="input_label">Username:</label>
            { this.fieldErrors("username") }
              <input type="text"
                id="signin_username"
                className="line_item input_text"
                valueLink={this.linkState("username")} />
              <br/>

            <label htmlFor="signin_password" className="input_label">Password:</label>
            { this.fieldErrors("password") }
              <input type="password"
                id="signin_password"
                className="line_item input_password"
                valueLink={this.linkState("password")} />

            <input type="submit" value="Submit" className="input_submit button blueButton"/>

            { this.fieldErrors("base") }
          </div>
        </form>
    );

		return (
      <div>
        <div className="separator_top separator">&nbsp;</div>
          <table id="signin_task_2col" align="center">
            <tbody>
              <tr>
                <td id="col_a2" className="col">
                  <h1>{ formTitle }</h1>
                  <p className="sign_up_prompt">{ greeting }{ navLink }</p>
                  {entryForm}
                </td>
                <td id="col_b2" className="col">
                <button
                  className="input_guest button blueButton"
                  onClick={this.handleGuestSubmit}>Guest Sign in
                </button>
                <a href="/auth/facebook"><button className="facebook_button" type="button">Sign In with Facebook</button></a>
                </td>
              </tr>
            </tbody>
          </table>

        <div className="separator_bottom separator">&nbsp;</div>
    </div>

		);
	}
});

// <a href="/auth/twitter" className="twitter_button">Sign in with Twitter</a>
module.exports = LoginForm;
