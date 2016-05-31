var React = require('react');
var ReactDOM = require('react-dom');

//Router
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

//Auth
var SessionStore = require('./stores/session_store');
var SessionApiUtil = require('./util/session_api_util');

var Router = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>

    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace, asyncDoneCallback) {
  // Router is in the process of entering a route.
  // Will wait for us to call the `asyncDoneCallback`
  // before it actually enters the route (and renders onto the page)
  //
  // Let's check if user is signed in, if they are, we can just call
  // the asyncDoneCallback and the Router will enter the Route normally,
  // else, if user is NOT signed in, let's call the `replace` argument
  // to instead redirect the user to the login route/component.
  if (SessionStore.currentUserHasBeenFetched()) {
    redirectIfNotLoggedIn();
  } else {
    SessionApiUtil.fetchCurrentUser(redirectIfNotLoggedIn);
  }

  function redirectIfNotLoggedIn() {
    if (!SessionStore.isUserLoggedIn()) {
      // `replace` is like a redirect. It replaces the current entry
      // into the history (and the hashFragment), so the Router is forced
      // to re-route.
      replace('/login');
    }

    // The `asyncDoneCallback` is the React Router's way of telling us
    // "let me know when you're done doing any async stuff, and I'll see
    // if I render the original Route or navigate to another one. In the
    // meantime, I'll just wait and not do anything".
    asyncDoneCallback();
  }
}

document.addEventListener('DOMContentLoaded', function(){
  var root = document.getElementById('content');
  ReactDOM.render(Router, root);
});
