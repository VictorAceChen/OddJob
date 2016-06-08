var React = require('react');
var Link = require('react-router').Link;
var ClientActions = require('../actions/client_actions.js');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  editJob: function (event) {
    event.preventDefault();
    var url = "/jobs/" + this.props.job.id.toString() + "/edit";
    hashHistory.push(url);
  },

  deleteJob: function (event) {
    event.preventDefault();
    ClientActions.deleteJob(this.props.job.id);
  },

  render: function () {
    var job = this.props.job;
    var button = this.props.showButton ? <button className="button blueButton removeButton">Remove</button> : null;
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
              <span className="company">{this.props.job.title}</span>
              &nbsp;-&nbsp;
              <span className="location">{this.props.job.location}</span>
               <div>${this.props.job.salary}</div>
               <p className="summary">{this.props.job.summary}</p>
              </div>
              {button}
          </div>
        </li>
      </div>
    );
  }
});
