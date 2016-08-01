var ServerActions = require('../actions/server_actions.js');

module.exports = {
  fetchMessages: function () {
    $.ajax({
      url: "api/chats",
      success: function (messages) {
        ServerActions.receiveAll(messages);
      }
    });
  }
};
