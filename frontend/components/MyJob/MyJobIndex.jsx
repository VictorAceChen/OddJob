var React = require('react');
var MyJobStore = require('../../stores/myjob_store');
var SessionStore = require("../../stores/session_store");
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;
var MyJobClientActions = require('../../actions/myjob_client_actions.js');

var JobIndexItem = require('../Job/JobIndexItem.jsx');

var MyJobIndex = React.createClass({
  getInitialState: function() {
    return { myjobs: [] };
  },

  getMyJobs: function () {
    this.setState({ myjobs: MyJobStore.all() });
  },

  componentDidMount: function () {
    this.myJobListener = MyJobStore.addListener(this.getMyJobs);
    MyJobClientActions.fetchMyJobs();
  },

  componentWillUnmount: function () {
    this.myJobListener.remove();
  },


  render: function() {
    if(this.state.myjobs.length === 0) return(null);

    return (
      <div className="myjob-index">
        <h1>My Jobs</h1>
        <div className="separator_top separator">&nbsp;</div>
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
        <tbody>
          <tr>
            <td>
              <ul>
                {
                  this.state.myjobs.map(function (job) {
                    return (<JobIndexItem key={job.id} job={job} showButton={true}/>);
                  })
                }
              </ul>
            </td>
            <td>

            </td>
          </tr>
        </tbody>
        </table>
        <div className="separator_bottom separator">&nbsp;</div>
      </div>
    );
  }

});

module.exports = MyJobIndex;
