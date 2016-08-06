var SessionActions = require('./../actions/session_actions');
var ErrorActions = require('./../actions/error_actions');

var UserApiUtil = {
  signup: function (formData) {
    $.ajax({
      url: '/api/user',
      type: 'POST',
      dataType: 'json',
      data: {user: formData},
      success: function (currentUser) {
        SessionActions.receiveCurrentUser(currentUser);
      },
      error: function (xhr) {
        // console.log('UserApiUtil#createAccount error');
        var errors = xhr.responseJSON;
        ErrorActions.setErrors("signup", errors);
      }
    });
  },

  editUser: function (formData, callback) {
    $.ajax({
      url: "api/user",
      type: "PATCH",
      contentType: false,
      processData: false,
      data: formData,
      success: function () {
        callback();
      },
      error: function () {
      }
    });
  }
};

module.exports = UserApiUtil;
