var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./NavBar');
var SearchBar = require('./SearchBar');

var JobForm = require('./JobForm');

var Modal = require("react-modal");
document.addEventListener("DOMContentLoaded", function(){
  var container = document.getElementById("content");
  Modal.setAppElement(document.body); // Add this line
  ReactDOM.render(<JobForm/>, container);
});

var App = React.createClass({

  render: function() {
    return (
      <div id="main_page">
        <NavBar pathname={this.props.location.pathname}/> 
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
