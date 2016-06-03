var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var hashHistory = require('react-router').hashHistory;

var Modal = require("react-modal");
var JobForm = require('./JobForm');

var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px'
  }
};

var NavBar = React.createClass({
  getInitialState: function(){
    return {showUserOptions: false, modalOpen: true};
  },

  closeModal: function(){
    this.setState({ modalOpen: false });
  },

  openModal: function(){
    this.setState({ modalOpen: true, showUserOptions: false });
  },

  onClickUserNav: function() {
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
          <span className="navBi" id="userOptionsLabel" tabIndex="0" onClick={this.onClickUserNav}>
            <b>{SessionStore.currentUser().username}</b>
          </span>
          { this.state.showUserOptions ? userOptions : null }
        </div>
    	);
    } else if (["/login", "/signup"].indexOf(this.props.pathname) === -1) {
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
          <strong onClick={this.openModal} id="empLink">Employers / Post Job</strong>
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
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}>
          <JobForm/>
        </Modal>

      </div>
    );
  }
});

module.exports = NavBar;