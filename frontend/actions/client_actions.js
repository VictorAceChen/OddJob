var ApiUtil = require('../util/job_api_util.js');

module.exports = {
  fetchJobs: function () {
    ApiUtil.fetchJobs();
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
  }
};
