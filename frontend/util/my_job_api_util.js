var ServerActions = require('../actions/my_job_actions.js');

module.exports = {
  fetchMyJobs: function () {
    $.ajax({
      url: "api/myjobs",
      success: function (myjobs) {
        ServerActions.receiveAll(myjobs);
      },
      error: function (xhr) {
        console.log("error fetching myjobs");
        var errors = xhr.responseJSON;
      }
    });
  },

  getMyJob: function (id) {
    $.ajax({
      url: "api/mymyjobs/" + id.toString(),
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
      url: "api/myjobs",
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
      url: "api/myjobs/" + data.id,
      type: "PATCH",
      data: { job: { title: data.title, body: data.body } },
      success: function (myjob) {
        ServerActions.receiveMyJob(myjob);
      }
    });
  },

  deleteMyJob: function (id) {
    $.ajax({
      url: "api/myjobs/" + id,
      type: "DELETE",
      success: function (myjob) {
        ServerActions.removeMyJob(myjob);
      }
    });
  }
};
