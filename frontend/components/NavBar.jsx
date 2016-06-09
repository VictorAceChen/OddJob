var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var hashHistory = require('react-router').hashHistory;

var Modal = require("react-modal");
var style = require('./ModalSetting');
var JobForm = require('./JobForm');


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

  greeting: function(){

    var userOptions = (
      <div id="userOptions">
        <div className="userOptionItem">
          <Link to={"/my_jobs/"} onClick={this.closeUserOptions}>My Jobs</Link>
        </div>
        <div className="userOptionItem">
          <div className="userNameRepeat">{SessionStore.currentUser().username}</div>
          <a href="" onClick={ SessionApiUtil.logout }>Sign out</a>
        </div>
      </div>
    );

    if (SessionStore.isUserLoggedIn()) {
    	return (
        <div id="u_nav">
          <span className="navBi" id="userOptionsLabel" tabIndex="0" onClick={this.onClickUserNav}>
            <b>{SessionStore.currentUser().username}</b>
          </span>
          { this.state.showUserOptions ? userOptions : null }
        </div>
    	);
    } else if (["/login", "/signup"].indexOf(this.props.pathname) === -1) {
      return (
        <div id="u_nav">

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
