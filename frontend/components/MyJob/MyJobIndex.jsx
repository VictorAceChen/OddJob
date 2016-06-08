var React = require('react');
var MyJobStore = require('../../stores/myjob_store');
var SessionStore = require("../../stores/session_store");
var hashHistory = require('react-router').hashHistory;
var Link = require('react-router').Link;
var MyJobClientActions = require('../../actions/myjob_client_actions.js');

var JobIndexItem = require('../JobIndexItem.jsx');

var MyJobIndex = React.createClass({
  getInitialState: function() {
    return { myjobs: [] };
  },

  getMyJobs: function () {
    this.setState({ myjobs: MyJobStore.all() });
  },

  componentDidMount: function () {
    this.myJobListener = MyJobStore.addListener(this.getMyJobs);
    // debugger
    MyJobClientActions.fetchMyJobs();
  },

  componentWillUnmount: function () {
    this.myJobListener.remove();
  },


  render: function() {

// debugger
    return (
      <div className="myjob-index">
        <h1>My Jobs</h1>
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
          </tr>
        </tbody>
        </table>

      </div>
    );
  }

});

module.exports = MyJobIndex;
