var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Components
var App = require('./components/App');
var FrontPage = require('./components/FrontPage');
var JobIndex = require('./components/JobIndex.jsx');
var LoginForm = require('./components/LoginForm');

//Auth
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
    <IndexRoute component={ FrontPage } />
    <Route path="/jobs" component={JobIndex} />
    <Route path="/login" component={ LoginForm } />
    <Route path="/signup" component={ LoginForm } />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {

  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      //Send back to login
      replace('/login');
    }
    asyncDoneCallback();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
