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
      <table id="job-content" cellspacing="0" cellpadding="0" border="0">
        <tbody>
          <tr valign="top">
            <td style="padding:20px;padding-left:23px;">
              Description: {this.state.job.description}
            </td>
          </tr>
        </tbody>
      </table> 
    );
  }
});

module.exports = job;
