var React = require('react');
var Link = require('react-router').Link;
var Modal = require("react-modal");
var SessionStore = require('../../stores/session_store');
var ClientActions = require('../../actions/client_actions.js');
var MyJobClientActions = require('../../actions/myjob_client_actions.js');
var JobStore = require('../../stores/job_store');
var JobApply = require('./JobApply');

var style = require('../ModalSetting');

var hashHistory = require('react-router').hashHistory;

var job = React.createClass({

  getInitialState: function() {
    return {
      jobId: parseInt(this.props.params.jobId),
      job : {},
      current_user: null
    };
  },

  getInfo: function () {
    this.setState({
      jobId: parseInt(this.props.params.jobId),
      job: JobStore.find(this.state.jobId),
      current_user: SessionStore.currentUser().id
     });

  },

  componentDidMount: function () {
    this.jobListener = JobStore.addListener(this.getInfo);
    ClientActions.getJob(this.state.jobId); //sets state.job
    SessionStore.currentUser();

  },

  componentWillUnmount: function () {
    this.jobListener.remove();
  },

  openApply: function() {
    this.setState({applyOpen: true});
  },

  closeModal: function() {
    this.setState({applyOpen: false});
  },

  addToMyJob: function() {
    MyJobClientActions.createMyJob(this.state.job.id);
    hashHistory.push("/my_jobs/");
  },

  deleteJob: function() {
    ClientActions.deleteJob(this.state.job.id);
    hashHistory.push("/jobs/");
  },

  gotoEdit: function() {
    hashHistory.push("/jobs/"+this.state.jobId+"/edit");
  },

  render: function () {
    if(!this.state.job){return <div/> }; //stop initial rendering errors

    var apply_button = <button className="apply-button" onClick={this.openApply}>Apply Now</button>;
    apply_button = null; //not ready

    var follow_button
    if (this.state.current_user !== this.state.job.employer_id) {
      follow_button = <button className="button blueButton" onClick={this.addToMyJob}>Save this job</button>;
    }

    var delete_button;
    if (this.state.current_user === this.state.job.employer_id) {
      delete_button = <button className="button blueButton" onClick={this.deleteJob}>Delete</button>;
    }

    var edit_button;
    if (this.state.current_user === this.state.job.employer_id) {
      edit_button = <button className="button blueButton" onClick={this.gotoEdit}>Edit</button>;
    }

    return (
      <div className="job_detail">
      <h1>Job Detail</h1>
      <div className="separator_top separator">&nbsp;</div>
      <img src={this.state.job.logo_url} className="detail_logo"/>
        <div id="job_info" data-tn-component="jobHeader">
          <b className="jobtitle"><font size="+1">{this.state.job.title}</font></b>
          <br/>
          <span className="location">{this.state.job.location}</span>
          <br/>
          <span className="jobtype">{this.state.job.jobtype}</span>
            <br/>
          <p id="job_summary" className="summary">
            {this.state.job.description}
          </p>
          <span className="salary">{this.state.job.salary}</span>
        </div>
        <br/>
        {follow_button}
        {delete_button}
        {edit_button}
      <div className="separator_bottom separator">&nbsp;</div>
      </div>

    );
  }
});
// <Modal
//   style ={style}
//   isOpen={this.state.applyOpen}
//   onRequestClose={this.closeModal}>
//   <JobApply job={this.job}/>
// </Modal>
module.exports = job;
