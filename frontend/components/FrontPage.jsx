var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;
var JobStore = require('../stores/job_store');
var JobSearch = require('./SearchBar');
var FrontPage = React.createClass({

  render: function() {
    return (
        <JobSearch /> 
    );
  }
});
module.exports = FrontPage;
