var Store = require('flux/utils').Store;
var ChatConstants = require('../constants/chat_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var ChatStore = new Store(AppDispatcher);

var _chats = {};

var resetChats = function (chats) {
  _chats = {};
  chats.forEach(function (chat) {
    _chats[chat.id] = chat;
  });
};

ChatStore.all = function () {
  return Object.keys(_chats).map(function (chatId) {
    return _chats[chatId];
  });
};

ChatStore.find = function (id) {
  return _chats[id];
};


ChatStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ChatConstants.CHATS_RECEIVED:
      resetChats(payload.chats);
      break;
  }
  this.__emitChange();
};

module.exports = ChatStore;
