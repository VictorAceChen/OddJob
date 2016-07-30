var React = require('react');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var hashHistory = require('react-router').hashHistory;

var Modal = require("react-modal");
var JobForm = require('./Job/JobForm');
var Actions = require("../actions/client_actions");


var SearchBar = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},
	mixins: [LinkedStateMixin],

  getInitialState: function(){
    return{search_str: ""};
  },

// 	handleSubmit: function(event){
// 	event.preventDefault();
//
// 	JobStoreActions.resetReceived();
// 	this.context.router.push({
// 		pathname:'/jobs',
// 		query:{search_str : this.state.search_str}
// 	});
// },
componentDidMount: function () {
  this.myJobListener = MyJobStore.addListener(this.getMyJobs);
  MyJobClientActions.fetchMyJobs();
},

componentWillUnmount: function () {
  this.myJobListener.remove();
},

  handleSubmit: function(event){
    event.preventDefault();
    // hashHistory.push("jobs/" );
			this.context.router.push({
				pathname:'/jobs',
				query:{search_str : this.state.search_str}
			});
  },

  render: function() {

    return (
      <div id="search_bar" className="group">


      <form className="search-form" onSubmit={this.handleSubmit}>
        <a href="/">
          <img id="main_logo" src={window.logoImage}/>
        </a>
        <div className="input">
          <label className="search_text_label">what:</label>
          <br/>
          <input type="text" className="what-input" name="what" valueLink={this.linkState("search_str")}/>
          <br/>
          <label className="search_descrip_label">job title, keywords or company</label>
        </div>

        <span className="find-button-container">
          <input className="find-button" type="submit" value="Find Jobs"/>
        </span>
      </form>

      </div>
    );
  }
});
// where input search field
// <div className="input">
//   <label className="search_text_label">where:</label>
//   <br/>
//   <input type="text" className="where-input" name="where"/>
//   <br/>
//   <label className="search_descrip_label">city, state, or zip</label>
// </div>

module.exports = SearchBar;
