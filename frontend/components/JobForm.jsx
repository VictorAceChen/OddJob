var React = require('react');
var JobApiUtil = require('../util/job_api_util');
var hashHistory = require('react-router').hashHistory;

var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ClientActions = require('../actions/client_actions.js');

var JobStore = require("../stores/job_store");

// var ReactQuill = require('react-quill');
var NoteToolbar = require('./QuillToolbar');

var JobForm = React.createClass({

  mixins: [LinkedStateMixin],


  getInitialState: function () {
    return ({ company: "", title: "", location: "", description: "", salary: null, error: [] });
  },

  textInput: function(item, display) {
    return (
      <label>{display}
        <br/>
        <input
        id={item}
        name={item}
        type="text"
        maxLength="200"
        placeholder=""
        valueLink={this.linkState(item)}/>
      </label>
    );
  },

  goToJob: function(jobID) {
    hashHistory.push("/jobs/"+ jobID);
    this.props.closeModal();
  },

  handleSubmit: function(e){
    e.preventDefault();
    var router = this.context.router;
    var jobObject = {
      title: this.state.title,
      salary: this.state.salary,
      description: this.state.description,
      location: this.state.location
    };

    var errors = [];
    if (this.state.title === ""){
      errors.push("Title cannot be blank");
    }
    if (this.state.salary === ""){
      errors.push("Salary cannot be blank");
    }
    if (this.state.description === ""){
      errors.push("Description cannot be blank");
    }
    if (this.state.location === ""){
      errors.push("location cannot be blank");
    }
    this.setState({ error: errors });
    if (errors.length === 0){
      JobApiUtil.createJob(jobObject, this.goToJob);

    }
  },

  render: function () {
    var error = error ? error : this.state.error.join(", ");

    var toolbar = <NoteToolbar/>;

    var salary = <input
      id="salary"
      name="salary"
      type="number" min="0" step="1"
      placeholder=""
      valueLink={this.linkState("salary")}/>;
                  // <ReactQuill value={this.state.value} />
    return (
      <div className="post_job_container">
        <div id="page-header">
          <h id="page-title">Post a Job</h>
          <div className="clear"/>
        </div>
        <div id="form-content">
          <form onSubmit={this.handleSubmit}>
            {this.textInput("company","Company")}
            <br/>
            {this.textInput("title","Job Title")}
            <br/>
            {this.textInput("location","Location")}
            <br/>
            <label htmlFor="description">Job Description</label>
            <br/>
            <div  className="description_tip">
              Describe the responsibilities of this job, required work experience, skills, or education.</div>
            <textarea
              valueLink={this.linkState("description")}/>
            <br/>
            <label htmlFor="salary">Salary (optional)</label>
            <br/>
            $&nbsp;{salary}
            <div className="control_error">{error}</div>
            <br /><br />
            <input type="submit" value="Create Job" className="blueButton" />
          </form>
        </div>
      </div>
    );
  }
});

module.exports = JobForm;
