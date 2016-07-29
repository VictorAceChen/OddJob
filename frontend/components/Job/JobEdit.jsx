var React = require('react');
var JobStore = require('../../stores/job_store.js');
var ClientActions = require('../../actions/client_actions.js');
var Link = require('react-router').Link;
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var hashHistory = require('react-router').hashHistory;

var EditJob = React.createClass({
  mixins: [LinkedStateMixin],

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    var job = JobStore.find(this.props.params.jobId) || {};
    return{id: job.id,title: job.title, description: job.description, location: job.location, salary: job.salary};
  },

  getInfo: function () {
      var job = JobStore.find(this.props.params.jobId) || {};
      this.setState({id: job.id, title: job.title, description: job.description, location: job.location, salary: job.salary});
  },

  componentDidMount: function() {
    this.jobListener = JobStore.addListener(this.getInfo);
    ClientActions.getJob(this.props.params.jobId);
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
    var salary = <input
      id="salary"
      name="salary"
      type="number" min="0" step="1"
      valueLink={this.linkState("salary")}/>;
    return (

      <div>
        <h1>Edit Job</h1>
        <div className="separator_top separator">&nbsp;</div>
        <form onSubmit={this.formSubmit} className="editform loginform">
          <br/>
            {this.textInput("title","Job Title:")}
            <br/>
            {this.textInput("location","Location:")}
            <br/>
            <label >Description:</label>
            <br/>
            <textarea rows="4" cols="50" name="description" form="editform" valueLink={this.linkState("description")}/>
            <br/>
            <label htmlFor="salary">Salary (optional)</label>
            <br/>
            $&nbsp;{salary}
          <br/><br/>
          <input type="submit" value="Edit" className="button blueButton"></input>
        </form>
        <div className="separator_bottom separator">&nbsp;</div>
      </div>
     );
  }
});

module.exports = EditJob;
