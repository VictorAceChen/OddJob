var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function () {
    return ({ title: "", body: "" });
  },

  titleChange: function (event) {
    var newTitle = event.target.value;
    this.setState({ title: newTitle });
  },

  bodyChange: function (event) {
    var newBody = event.target.value;
    this.setState({ body: newBody });
  },

  handleSubmit: function (event) {
    event.preventDefault();
    var jobData = {
      title: this.state.title,
      body: this.state.body
    };
    ClientActions.createJob(jobData);
    this.setState({ title: "", body: "" });
  },

  render: function () {
    return (
      <div>
        <h3>Post a Job</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.title}
            onChange={this.titleChange} />

          <br /><br />

          <textarea
            value={this.state.body}
            onChange={this.bodyChange} />

          <br /><br />

          <input type="submit" value="Create Job" />
        </form>
      </div>
    );
  }
});
