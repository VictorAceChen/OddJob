var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('../stores/session_store');
var ClientActions = require('../actions/client_actions.js');
var JobStore = require('../stores/job_store');

var job = React.createClass({

  getInitialState: function() {
    return { jobId: parseInt(this.props.params.jobId), job : {} };
  },

  getJob: function () {
    this.setState({ job: JobStore.find(this.state.jobId) });
  },

  componentDidMount: function () {
    this.jobListener = JobStore.addListener(this.getJob);
    ClientActions.getJob(this.state.jobId); //sets state.job
  },



  render: function () {
    return (
      <div>
        <ul>
          <li>Description: {this.state.job.description}</li>
        </ul>
        <br/>
      </div>
    );
  }
});

module.exports = job;
