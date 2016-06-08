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
            <td className="auxCol group">
              <img src="http://data.whicdn.com/images/45940825/large.png"/>
              <img src="https://s-media-cache-ak0.pinimg.com/736x/93/09/f2/9309f2ced4bc22920e5af967bf87fb10.jpg"/>
              <img src="http://static6.comicvine.com/uploads/scale_small/7/71975/2357182-240041_20120317132130_large.jpg"/>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    );
  }
});
