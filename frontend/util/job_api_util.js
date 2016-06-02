var ServerActions = require('../actions/server_actions.js');

module.exports = {
  fetchJobs: function () {
    $.ajax({
      url: "api/jobs",
      success: function (jobs) {
        ServerActions.receiveAll(jobs);
      },
      error: function (xhr) {
        console.log("error fetching jobs");
        var errors = xhr.responseJSON;
        console.log(xhr);
        console.log(xhr.responseText);
        console.log(errors);
      }
    });
  },

  getJob: function (id) {
    $.ajax({
      url: "api/jobs/" + id.toString(),
      success: function (job) {
        ServerActions.receiveJob(job);
      }
    });
  },

  createJob: function (data) {
    $.ajax({
      url: "api/jobs",
      type: "POST",
      data: { job: data },
      success: function (job) {
        ServerActions.receiveJob(job);
      }
    });
  },

  updateJob: function (data) {
    $.ajax({
      url: "api/jobs/" + data.id,
      type: "PATCH",
      data: { job: { title: data.title, body: data.body } },
      success: function (job) {
        ServerActions.receiveJob(job);
      }
    });
  },

  deleteJob: function (id) {
    $.ajax({
      url: "api/jobs/" + id,
      type: "DELETE",
      success: function (job) {
        ServerActions.removeJob(job);
      }
    });
  }
};