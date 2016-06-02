var AppDispatcher = require('../dispatcher/dispatcher.js');
var JobConstants = require('../constants/job_constants.js');

module.exports = {
  receiveAll: function (jobs) {
    AppDispatcher.dispatch({
      actionType: JobConstants.JOBS_RECEIVED,
      jobs: jobs
    });
  },

  receiveJob: function (job) {
    AppDispatcher.dispatch({
      actionType: JobConstants.JOB_RECEIVED,
      job: job
    });
  },

  removeJob: function (job) {
    AppDispatcher.dispatch({
      actionType: JobConstants.JOB_REMOVED,
      job: job
    });
  }
};
