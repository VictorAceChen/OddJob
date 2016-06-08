var AppDispatcher = require('../dispatcher/dispatcher.js');
var ApiUtil = require('../util/my_job_api_util.js');
var MyJobConstants = require('../constants/myjob_constants.js');

module.exports = {
  fetchMyJobs: function () {
    ApiUtil.fetchMyJobs();
  },

  getMyJob: function (id) {
    ApiUtil.getMyJob(id);
  },

  createMyJob: function (data) {
    ApiUtil.createMyJob(data);
  },

  editMyJob: function (data) {
    ApiUtil.updateMyJob(data);
  },

  deleteMyJob: function (id) {
    ApiUtil.deleteMyJob(id);
  }
};
