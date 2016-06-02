var Store = require('flux/utils').Store;
var JobConstants = require('../constants/job_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var JobStore = new Store(AppDispatcher);

var _jobs = {};

var resetJobs = function (jobs) {
  _jobs = {};

  jobs.forEach(function (job) {
    _jobs[job.id] = job;
  });
};

var setJob = function (job) {
  _jobs[job.id] = job;
};

var removeJob = function (job) {
  delete _jobs[job.id];
};

JobStore.all = function () {
  return Object.keys(_jobs).map(function (jobId) {
    return _jobs[jobId];
  });
};

JobStore.find = function (id) {
  return _jobs[id];
};


JobStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case JobConstants.JOBS_RECEIVED:
      resetJobs(payload.jobs);
      break;
    case JobConstants.JOB_RECEIVED:
      setJob(payload.job);
      break;
    case JobConstants.JOB_REMOVED:
      removeJob(payload.job);
      break;
  }
  this.__emitChange();
};

module.exports = JobStore;
