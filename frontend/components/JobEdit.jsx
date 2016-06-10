var React = require('react');
var JobStore = require('../stores/job_store.js');
var ClientActions = require('../actions/client_actions.js');
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function(){
    debugger
    var job = JobStore.find(this.props.params.jobId) || {};
    return{title: job.title, description: job.description, location: job.location, salary: job.salary};
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

  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.formSubmit} id="editform">
          <br/>
          <label >Title</label>
          <br/>
          <input type="text" value={this.state.title} onChange={this.titleChange}></input>
            <br/>
            <label >Description</label>
            <br/>
            <textarea rows="4" cols="50" name="description" value={this.state.description} form="editform" onChange={this.descriptionChange}/>
            <br/>
            <label >Title</label>
            <br/>
          <input type="text" value={this.state.location} onChange={this.locationChange}></input>
            <br/>
            <label >Salary</label>
            <br/>
          <input type="text" value={this.state.salary} onChange={this.salaryChange}></input>
          <br/><br/>
          <input type="submit" value="Edit" className="button blueButton"></input>
        </form>
      </div>
     );
  }
});
