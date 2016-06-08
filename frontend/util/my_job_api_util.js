var ServerActions = require('../actions/myjob_server_actions.js');

module.exports = {
  fetchMyJobs: function () {
    $.ajax({
      url: "api/my_jobs",

      success: function (myjobs) {
        ServerActions.receiveAll(myjobs);
      },
      error: function (xhr) {
        console.log("error fetching myjobs");
        var errors = xhr.responseJSON;
        console.log(errors);
      }
    });
  },

  getMyJob: function (id) {
    $.ajax({
      url: "api/my_jobs/" + id.toString(),
      success: function (myjob) {
        ServerActions.receiveMyJob(myjob);
      },
      error: function (xhr) {
        console.log("error getting myjobs");
      }
    });
  },

  createMyJob: function (data, travelTo) {
    $.ajax({
      url: "api/my_jobs",
      type: "POST",
      data: { job: data },
      success: function (myjob) {
        ServerActions.createMyJob(myjob);
        travelTo(job.id);
      },
      error: function (xhr) {
        console.log("error creating myjobs");
      }
    });
  },

  updateMyJob: function (data) {
    $.ajax({
      url: "api/my_jobs/" + data.id,
      type: "PATCH",
      data: { job: { title: data.title, body: data.body } },
      success: function (myjob) {
        ServerActions.receiveMyJob(myjob);
      }
    });
  },

  deleteMyJob: function (id) {
    $.ajax({
      url: "api/my_jobs/" + id,
      type: "DELETE",
      success: function (myjob) {
        ServerActions.removeMyJob(myjob);
      }
    });
  }
};
