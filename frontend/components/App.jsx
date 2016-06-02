var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var hashHistory = require('react-router').hashHistory;

var App = React.createClass({
  getInitialState: function(){
    return {showUserOptions: false};
  },

  onClick: function() {
      //Alternate showUserOptions on click
      this.setState({ showUserOptions: this.state.showUserOptions ? false : true });
  },

  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  greeting: function(){

    var userOptions = (
      <div id="userOptions">
        <div className="userOptionItem">
          <div className="userNameRepeat">{SessionStore.currentUser().username}</div>
          <a href="" onClick={ SessionApiUtil.logout }>Sign out</a>
        </div>
      </div>
    );

    if (SessionStore.isUserLoggedIn()) {
    	return (
        <div id="u_nav">
          <span className="navBi" id="userOptionsLabel" tabIndex="0" onClick={this.onClick}>
            <b>{SessionStore.currentUser().username}</b>
          </span>
          { this.state.showUserOptions ? userOptions : null }
        </div>
    	);
    } else if (["/login", "/signup"].indexOf(this.props.location.pathname) === -1) {
      return (
        <div id="u_nav">
          <span className="navBi"><span id="navpromo" className="resume-promo">
            <Link to="/signup" activeClassName="current">Sign up</Link>
          </span></span>
          <span className="navBi">
            <Link to="/login" activeClassName="current">Sign in</Link>
          </span>
        </div>
      );
    }
  },

  render: function() {

    var public_nav = (
      <div id="p_nav">
        <span className="navBi">
          <a href="/" title="Jobs" id="jobsLink" className="selected">Find Jobs</a>
        </span>
        <span className="navBi">
          <a href="/resumes" id="rezLink">Find Resumes</a>
        </span>
        <span className="navBi">
          <a href="/hire" id="empLink">Employers / Post Job</a>
        </span>
      </div>
    );

    var navBar = (
      <div id="g_nav">
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <td nowrap>
                {public_nav}
              </td>
              <td align="right" nowrap>
                <div id="user_actions">
                  { this.greeting() }
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div>
        {navBar}
        <a href="/">
          <img id="main_logo" src={window.logoImage}/>
        </a>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
