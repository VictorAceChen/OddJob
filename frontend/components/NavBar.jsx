var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var hashHistory = require('react-router').hashHistory;

var Modal = require("react-modal");
var style = require('./ModalSetting').post;
var JobForm = require('./Job/JobForm');


var NavBar = React.createClass({
  getInitialState: function(){
    return {showUserOptions: false, jobFormOpen: false, loginOpen: false};
  },

  closeModal: function(){
    this.setState({ jobFormOpen: false });
  },

  postJob: function(){
    if (SessionStore.isUserLoggedIn()){
      this.setState({ jobFormOpen: true, showUserOptions: false });
    } else {
      hashHistory.push("/login");
    }
  },

  onClickUserNav: function() {
      //Alternate showUserOptions on click
      this.setState({ showUserOptions: this.state.showUserOptions ? false : true });
  },

  closeUserOptions: function(){
    this.setState({ showUserOptions: false });
  },

  componentDidMount: function () {
    SessionApiUtil.fetchCurrentUser();
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  handleGuestSubmit: function(e) {
    e.preventDefault();
    SessionApiUtil.login({ username: "guest", password: "password" });
  },

  greeting: function(){

    var userOptions = (
      <div id="userOptions">
        <Link to={"/account/"} onClick={this.closeUserOptions}>
          <div className="userOptionItem">
            Account
          </div>
        </Link>
        <Link to={"/my_jobs/"} onClick={this.closeUserOptions}>
          <div className="userOptionItem">
            My Jobs
          </div>
        </Link>
        <div className="userNameRepeat">{SessionStore.currentUser().username}</div>
        <a href="" onClick={ SessionApiUtil.logout }>
          <div className="userOptionItem">
            Sign out
          </div>
        </a>
      </div>
    );

    if (SessionStore.isUserLoggedIn()) {
    	return (
        <div id="u_nav">
          <span className="navBi" id="userOptionsLabel" tabIndex="0" onClick={this.onClickUserNav}>
            <img src={SessionStore.currentUser().image_url} className="navImg"/>
            <b>{SessionStore.currentUser().username}</b>
          </span>
          { this.state.showUserOptions ? userOptions : null }
        </div>
    	);
    } else if (["/login", "/signup"].indexOf(this.props.pathname) === -1) {
      return (
        <div id="u_nav">
            <a onClick={this.handleGuestSubmit}><span className="navBi">Guest Login</span></a>
            <Link to="/signup" activeClassName="current"><span className="navBi">Sign up</span></Link>

            <Link to="/login" activeClassName="current">
              <span className="navBi">Sign in</span>
            </Link>
        </div>
      );
    }
  },

  render: function() {

    // <span className="navBi">
    //   <a href="/resumes" id="rezLink">Find Resumes</a>
    // </span>
    var public_nav = (
      <div id="p_nav">
          <a href="/" title="Jobs" id="jobsLink" className="selected">
            <strong className="navBi">Find Jobs</strong>
          </a>

        <span className="navBi" onClick={this.postJob}>
          <strong id="empLink">Employers / Post Job</strong>
        </span>
      </div>
    );

    return (
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

        <Modal
          style ={style}
          isOpen={this.state.jobFormOpen}
          onRequestClose={this.closeModal}>
          <JobForm closeModal={this.closeModal}/>
        </Modal>

      </div>
    );
  }
});

module.exports = NavBar;
