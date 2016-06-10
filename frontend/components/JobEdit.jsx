var React = require('react');
var JobStore = require('../stores/job_store.js');
var ClientActions = require('../actions/client_actions.js');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    var job = JobStore.find(this.props.params.jobId) || {};
    return{id: this.props.params.jobId, title: job.title, description: job.description, location: job.location, salary: job.salary};
  },

  componentDidMount: function() {
    var job = JobStore.find(this.props.params.jobId) || {};
    this.setState({id: this.props.params.jobId, title: job.title, description: job.description, location: job.location, salary: job.salary});
  },


  titleChange: function(e){
    this.setState({title: e.target.value});
  },

  descriptionChange: function(e){
    this.setState({description: e.target.value});
  },

  locationChange: function(e){
    this.setState({location: e.target.value});
  },

  salaryChange: function(e){
    this.setState({salary: e.target.value});
  },

  formSubmit: function() {
    ClientActions.editJob(this.state);
    hashHistory.push("/jobs/" + this.props.params.jobId);
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

  render: function () {
    return (

      <div>
        <form onSubmit={this.formSubmit} id="editform">
          <br/>
            {this.textInput("company","Company")}
            <br/>
            {this.textInput("title","Job Title")}
            <br/>
            {this.textInput("location","Location")}
            <br/>
          <label >Title:</label>
          <br/>
          <input type="text" value={this.state.title} valueLink={this.linkState("title")}></input>
            <br/>
            <label >Description:</label>
            <br/>
            <textarea rows="4" cols="50" name="description" form="editform" valueLink={this.linkState("description")}/>
            <br/>
            <label >Location:</label>
            <br/>
          <input type="text" value={this.state.location} valueLink={this.linkState("location")}></input>
            <br/>
            <label >Salary:</label>
            <br/>
          <input type="text" value={this.state.salary} valueLink={this.linkState("salary")}></input>
          <br/><br/>
          <input type="submit" value="Edit" className="button blueButton"></input>
        </form>
      </div>
     );
  }
});
