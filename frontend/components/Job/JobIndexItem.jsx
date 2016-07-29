var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../../actions/client_actions.js');
var MyJobClientActions = require('../../actions/myjob_client_actions.js');
var MyJobStore = require('../../stores/myjob_store');
var hashHistory = require('react-router').hashHistory;

var JobIndexItem = React.createClass({

  getInitialState: function() {
    return {deleted: false};
  },

  editJob: function (event) {
    event.preventDefault();
    var url = "/jobs/" + this.props.job.id.toString() + "/edit";
    hashHistory.push(url);
  },

  deleteJob: function (event) {
    event.preventDefault();
    ClientActions.deleteJob(this.props.job.id);
  },

  deleteMyJob: function (event) {
    event.preventDefault();
    MyJobClientActions.deleteMyJob(this.props.job.id);
    this.setState({deleted: true});
  },

  render: function () {
    if(this.state.deleted) return null;

    var job = this.props.job;
    if(!job) return(<div></div>);

    var button = this.props.showButton ? <button className="button blueButton removeButton" onClick={this.deleteMyJob}>Remove</button> : null;
    // var button;

    var selector;
    // var selector = this.props.showButton ?
    //         <select className="button blueButton removeButton" selected="-">
    //         <option value="-">-</option>
    //         <option value="applied">applied</option>
    //         <option value="interviewing">interviewing</option>
    //         <option value="offered">offered</option>
    //         <option value="hired">hired</option>
    //         <option value="hired">remove</option>
    //       </select> : null;
// debugger

    return (
      <div>
        <li className="job_idx_row group">
          <img src={this.props.job.logo_url} className="index_logo"/>
          <div className="result" id={this.props.job.id}>
            <Link
              to={"/jobs/" + this.props.job.id.toString()}
              className="jobtitle"
              >{job.title}</Link>
              <br/>
              <div className="job_base_info">
              <span className="location">{this.props.job.location}</span>
               <div>${this.props.job.salary}</div>
               <p className="summary">{this.props.job.summary}</p>
              </div>
              {button}
              {selector}
          </div>
        </li>
      </div>
    );
  }
});

// <span className="company">{this.props.job.title}</span>
// &nbsp;-&nbsp;

module.exports = JobIndexItem;
