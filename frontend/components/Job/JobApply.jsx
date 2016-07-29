var React = require('react');
var JobApiUtil = require('../../util/job_api_util');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

var JobApply = React.createClass({

  mixins: [LinkedStateMixin],


  getInitialState: function () {
    return ({ company: "", title: "", location: "", description: "", salary: null, error: [] });
  },

  render: function () {
    var job = this.props.job;

    return (
      <div>
        <div className="application-logo">LOGO</div>
        <div className="application-content">
          <div className="application-innercontent">
            <div className="application-title">{job.title}</div>
            {job.employer.name} - {job.location.city}

            <form onSubmit={this.handleSubmit}>
              <label htmlFor="realname">Name</label>
              <input onChange={this.updateName} value={this.state.name} className="application-input" type="text" />
              <label htmlFor="email">Email</label>
              <input onChange={this.updateEmail} value={this.state.email} className="application-input" type="text" />
              <label htmlFor="coverletter">Cover Letter</label>
              <textarea onChange={this.updateCoverLetter} className="application-input-field"></textarea>

              <label>Resume
                {resumeUpload}
              </label>
              <button className="app-button">Submit Application</button>

            </form>
          <a className="app-cancel" onClick={this.closeModal}>Cancel</a>
        </div>
        </div>
    </div>
    );
  }
});

module.exports = JobApply;
