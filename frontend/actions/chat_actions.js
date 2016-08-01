var AppDispatcher = require('../dispatcher/dispatcher.js');
var ApiUtil = require('../util/chat_api_util.js');
var chatConstants = require('../constants/chat_constants.js');

module.exports = {
  fetchMessages: function () {
    ApiUtil.fetchMessages();
  }
};
