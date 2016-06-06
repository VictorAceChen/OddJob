var React = require('react');
var JobStore = require('../stores/job_store.js');
var ClientActions = require('../actions/client_actions.js');

var JobIndexItem = require('./JobIndexItem.jsx');
var JobForm = require('./JobForm.jsx');
var SearchBar = require('./SearchBar');

module.exports = React.createClass({
  getInitialState: function () {
    return { jobs: [] };
  },

  componentDidMount: function () {
    this.jobListener = JobStore.addListener(this.getJobs);
    ClientActions.fetchJobs();
  },

  componentWillUnmount: function () {
    this.jobListener.remove();
  },

  getJobs: function () {
    this.setState({ jobs: JobStore.all() });
  },

  render: function () {
    return (

      <div className="job-index">
      <SearchBar/>
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
        <tbody>
          <tr>
            <td>
              <ul>
                {
                  this.state.jobs.map(function (job) {
                    return (<JobIndexItem key={job.id} job={job} />);
                  })
                }
              </ul>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    );
  }
});
