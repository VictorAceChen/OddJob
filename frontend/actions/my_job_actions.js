var AppDispatcher = require('../dispatcher/dispatcher.js');
var MyJobConstants = require('../constants/myjob_constants.js');

module.exports = {
  receiveAllMyJobs: function (myjobs) {
    AppDispatcher.dispatch({
      actionType: MyJobConstants.MYJOBS_RECEIVED,
      myjobs: myjobs
    });
  },

  receiveMyJob: function (myjob) {
    AppDispatcher.dispatch({
      actionType: MyJobConstants.MYJOB_RECEIVED,
      myjob: myjob
    });
  },

  createMyJob: function (myjob) {
    AppDispatcher.dispatch({
      actionType: MyJobConstants.MYJOB_RECEIVED,
      myjob: myjob
    });
  },

  removeMyJob: function (myjob) {
    AppDispatcher.dispatch({
      actionType: MyJobConstants.MYJOB_REMOVED,
      myjob: myjob
    });
  }
};
