var React = require('react');

var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ClientActions = require('../actions/client_actions.js');

// var ReactQuill = require('react-quill');
var NoteToolbar = require('./QuillToolbar');

var JobForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({ company: "", title: "", body: "", salary: null });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var jobData = {
      title: this.state.title,
      body: this.state.body
    };
    ClientActions.createJob(jobData);
    this.setState({ company: "", title: "", body: "", salary: null });
  },

  render: function () {
    var toolbar = <NoteToolbar/>;

    var company = <input
      id="company"
      name="company"
      type="text"
      maxLength="200"
      placeholder=""
      valueLink={this.linkState("company")}/>;

    var jobTitle = <input
      id="jobTitle"
      name="jobTitle"
      type="text"
      maxLength="200"
      placeholder=""
      valueLink={this.linkState("title")}/>;

    var salary = <input
      id="salary"
      name="salary"
      type="text"
      type="number" min="0" step="1"
      placeholder=""
      valueLink={this.linkState("salary")}/>;
                  // <ReactQuill value={this.state.value} />
    return (
      <div>
        <div id="page-header">
          <h id="page-title">Post a Job</h>
          <div className="clear"/>
        </div>
        <div id="form-content">
          <form onSubmit={this.handleSubmit}>

            <label htmlFor="company">Company</label>
            <br/>
            {company}
            <br/>
            <label htmlFor="jobTitle">Job Title</label>
            <br/>
            {jobTitle}
            <br/>
            <label htmlFor="description">Job Description</label>
            <br/>
            <div  className="description_tip">
              Describe the responsibilities of this job, required work experience, skills, or education.</div>
            <textarea
              value={this.state.body}
              onChange={this.bodyChange} />
            <br/>
            <label htmlFor="salary">Salary (optional)</label>
            <br/>
            $&nbsp;{salary}
            <br /><br />

            <input className="blueButton" type="submit" value="Create Job" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = JobForm;
