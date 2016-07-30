var AppDispatcher = require('../dispatcher/dispatcher.js');
var ApiUtil = require('../util/job_api_util.js');
var JobConstants = require('../constants/job_constants.js');

module.exports = {
  fetchJobs: function (search_str) {
    ApiUtil.fetchJobs(search_str);
  },

  getJob: function (id) {
    ApiUtil.getJob(id);
  },

  createJob: function (data) {
    ApiUtil.createJob(data);
  },

  editJob: function (data) {
    ApiUtil.updateJob(data);
  },

  deleteJob: function (id) {
    ApiUtil.deleteJob(id);
  },

  resetReceived: function(){
  AppDispatcher.dispatch({
    actionType: JobConstants.RESET_RECEIVED,
  });
}
};
