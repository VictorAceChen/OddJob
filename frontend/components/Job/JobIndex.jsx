var React = require('react');
var JobStore = require('../../stores/job_store.js');
var ClientActions = require('../../actions/client_actions.js');

var JobIndexItem = require('./JobIndexItem.jsx');
var JobForm = require('./JobForm.jsx');
var SearchBar = require('../SearchBar');
var TallAd = require('../tallAd');
var rotateImages = require('../rotateImages.js');


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

    if(this.state.jobs.length < 1)
      return(
        <div className="job-index">
          <p className="failSearch">No results for your search</p>
        </div>
      )

    return (

      <div className="job-index">
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
        <tbody>
          <tr className="JobIndex">
            <td>
              <ul className="jobList">
                {
                  this.state.jobs.map(function (job) {
                    return (<JobIndexItem className="jobIndexItem" key={job.id} job={job} />);
                  })
                }
              </ul>
            </td>
            <td>
              {/*<img id="sideBanner" src={adImages[0]}/>*/}
              <TallAd/>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    );
  }
});

window.JobStore = JobStore;
