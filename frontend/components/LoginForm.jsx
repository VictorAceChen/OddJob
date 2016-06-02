var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionApiUtil = require('./../util/session_api_util');
var SessionStore = require('./../stores/session_store');
var ErrorStore = require('./../stores/error_store');
var UserApiUtil = require('./../util/user_api_util');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin],

  getInitialState: function () {
    return {
      username: "",
      password: ""
    };
  },

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  componentDidMount: function () {
    // this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount: function () {
    // this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn: function () {
    if (SessionStore.isUserLoggedIn()) {
      this.context.router.push("/");
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


  formType: function () {
    return this.props.location.pathname.slice(1);
  },

	render: function () {
    var formTitle;
    var navLink;
    var greeting;
    if (this.formType() === "login") {
      formTitle = "Create An Account";
      navLink = <Link to="/signup" activeClassName="current">Create an account free</Link>;
      greeting = "Not a member? ";
    } else {
      formTitle = "Sign In";
      navLink = <Link to="/login" activeClassName="current">Sign In</Link>;
      greeting = "Already have an account? ";
    }



    var entryForm = (
        <form id="loginform" name="loginform" onSubmit={this.handleSubmit}>
          <div className="form_content">

            <label htmlFor="signin_email" className="input_label">Username:</label>
              <input type="text"
                id="signin_email"
                className="line_item input_text"
                valueLink={this.linkState("username")} />
              <br/>
            <label htmlFor="signin_password" className="input_label">Password:</label>
              <input type="password"
                id="signin_password"
                className="line_item input_password"
                valueLink={this.linkState("password")} />

            <input type="submit" value="Submit" className="input_submit button blueButton"/>
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
                  <img src={window.placeholderGif}/>

                </td>
              </tr>
            </tbody>
          </table>

        <div className="separator_bottom separator">&nbsp;</div>
    </div>

		);
	}
});

module.exports = LoginForm;
