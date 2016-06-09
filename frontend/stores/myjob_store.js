var Store = require('flux/utils').Store;
var MyJobConstants = require('../constants/myjob_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var MyJobStore = new Store(AppDispatcher);

var _myjobs = {};

var resetMyJobs = function (myjobs) {
  _myjobs = {};

  myjobs.forEach(function (myjob) {
    _myjobs[myjob.id] = myjob;
  });
};

var setMyJob = function (myjob) {
  _myjobs[myjob.id] = myjob;
};

var getMyJob = function (myjob) {
  return _myjobs[myjob.id];
};

var removeMyJob = function (myjob) {
  delete _myjobs[myjob.id];
};

MyJobStore.all = function () {
  return Object.keys(_myjobs).map(function (myjobId) {
    return _myjobs[myjobId];
  });
};

MyJobStore.find = function (id) {
  return _myjobs[id];
};


MyJobStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MyJobConstants.MYJOBS_RECEIVED:
      resetMyJobs(payload.myjobs);
      break;
    case MyJobConstants.MYJOB_RECEIVED:
      setMyJob(payload.myjob);
      break;
    case MyJobConstants.MYJOB_REMOVED:
      removeMyJob(payload.myjob);
      break;
  }
  this.__emitChange();
}; 
module.exports = MyJobStore;
