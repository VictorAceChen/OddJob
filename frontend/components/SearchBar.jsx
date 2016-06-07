var React = require('react');
var Link = require('react-router').Link;
var SessionStore = require('./../stores/session_store');
var SessionApiUtil = require('./../util/session_api_util');
var hashHistory = require('react-router').hashHistory;

var Modal = require("react-modal");
var JobForm = require('./JobForm');


var SearchBar = React.createClass({

  handleSubmit: function(event){
    event.preventDefault();
    hashHistory.push("jobs/" );
  },

  render: function() {

    return (
      <div id="search_bar" className="group">

      <a href="/">
        <img id="main_logo" src={window.logoImage}/>
      </a>

      <form className="search-form" onSubmit={this.handleSubmit}>
        <div className="input">
          <label className="search_text_label">what:</label>
          <br/>
          <input type="text" className="what-input" name="what"/>
          <br/>
          <label className="search_descrip_label">job title, keywords or company</label>
        </div>
        <div className="input">
          <label className="search_text_label">where:</label>
          <br/>
          <input type="text" className="where-input" name="where"/>
          <br/>
          <label className="search_descrip_label">city, state, or zip</label>
        </div>
        <span className="inwrapBorderTop">
          <input className="find-button" type="submit" value="Find Jobs"/>
        </span>
      </form>

      </div>
    );
  }
});

module.exports = SearchBar;
