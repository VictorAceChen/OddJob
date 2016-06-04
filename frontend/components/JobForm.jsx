var React = require('react');

var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ClientActions = require('../actions/client_actions.js');

var ReactQuill = require('react-quill');
var NoteToolbar = require('./QuillToolbar');

var JobForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    return ({ company: "", title: "", body: "" });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var jobData = {
      title: this.state.title,
      body: this.state.body
    };
    ClientActions.createJob(jobData);
    this.setState({ title: "", body: "" });
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

    var jobTitle= <input
      id="jobTitle"
      name="jobTitle"
      type="text"
      maxLength="200"
      placeholder=""
      valueLink={this.linkState("title")}/>;

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
            <br />
            <label htmlFor="description">Job Description</label>

            <ReactQuill value={this.state.value} />
            <textarea
              value={this.state.body}
              onChange={this.bodyChange} />

            <br /><br />

            <input type="submit" value="Create Job" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = JobForm;
