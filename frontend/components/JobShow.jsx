var React = require('react');
var Link = require('react-router').Link;
var Modal = require("react-modal");
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions.js');
var JobStore = require('../stores/job_store');
var JobApply = require('./JobApply');

var style = require('./ModalSetting');

var hashHistory = require('react-router').hashHistory;

var job = React.createClass({

  getInitialState: function() {
    return {
      jobId: parseInt(this.props.params.jobId),
      job : {},
      applyOpen: false
    };
  },

  getJob: function () {
    this.setState({ job: JobStore.find(this.state.jobId) });
  },

  componentDidMount: function () {
    this.jobListener = JobStore.addListener(this.getJob);
    ClientActions.getJob(this.state.jobId); //sets state.job
  },

  openApply: function() {
    this.setState({applyOpen: true});
  },

  closeModal: function() {
    this.setState({applyOpen: false});
  },

  showSaveButton: function() {
    var Savebutton = null
    if(SessionStore.currentUser().id !== this.state.job.employer_id){
      Savebutton = <button className="button blueButton" onClick={this.openApply}>Save this job</button>;
    }
    return Savebutton;
  },

  render: function () {
    return (
      <div>
        <div id="job_header" data-tn-component="jobHeader">
        <img src={this.state.job.logo_url} className="index_logo"/>
          <b className="jobtitle"><font size="+1">{this.state.job.title}</font></b>
          <br/>
          <span className="company">COMPANY NAME</span>
          -
          <span className="location">{this.state.job.location}</span>
          <br/>
            Part-time,&nbsp;Temporary
            <br/>
          <span id="job_summary" className="summary">
            {this.state.job.description}
          </span>
        </div>
        <button className="apply-button" onClick={this.openApply}>Apply Now</button>
        {this.showSaveButton}

        <Modal
          style ={style}
          isOpen={this.state.applyOpen}
          onRequestClose={this.closeModal}>
          <JobApply job={this.job}/>
        </Modal>
      </div>

    );
  }
});

module.exports = job;
