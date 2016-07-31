var ServerActions = require('../actions/server_actions.js');

module.exports = {
  fetchJobs: function () {
    var search_str = getParameterByName('search_str');
    $.ajax({
      url: "api/jobs",
      data: { search_str: search_str },
      success: function (jobs) {
        ServerActions.receiveAll(jobs);
      },
      error: function (xhr) {
        // console.log("error fetching jobs");
        var errors = xhr.responseJSON;
      }
    });
  },

  getJob: function (id) {
    $.ajax({
      url: "api/jobs/" + id.toString(),
      success: function (job) {
        ServerActions.receiveJob(job);
      },
      error: function (xhr) {
        // console.log("error getting jobs");
        // var errors = xhr.responseJSON;
        // console.log(xhr);
        // console.log(xhr.responseText);
      }
    });
  },

  createJob: function (data, travelTo) {
    $.ajax({
      url: "api/jobs",
      type: "POST",
      data: { job: data },
      success: function (job) {
        ServerActions.createJob(job);
        travelTo(job.id);
      },
      error: function (xhr) {
        // console.log("error creating jobs");
      }
    });
  },

  updateJob: function (data) {
    $.ajax({
      url: "api/jobs/" + data.id.toString(),
      type: "PATCH",
      data: { job: { title: data.title, description: data.description, salary: data.salary, location: data.location } },
      success: function (job) {
        ServerActions.receiveJob(job);
      },
      error: function (xhr) {
        var errors = xhr.responseJSON;
        // console.log(xhr);
        // console.log(xhr.responseText);
      }
    });
  },

  deleteJob: function (id) {
    $.ajax({
      url: "api/jobs/" + id.toString(),
      type: "DELETE",
      success: function (job) {
        ServerActions.removeJob(job);
      }
    });
  }
};
