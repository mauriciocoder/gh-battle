var React = require("react");
var Results = require("../components/Results");
var GitHubUtil = require("../utils/GitHubUtil");

var ResultsContainer = React.createClass({
  getInitialState: function() {
    return ({
      isLoading: true,
      scores: []
    });
  },

  componentDidMount: function() {
    console.log(this.props.location.state.playersInfo);
    GitHubUtil.battle(this.props.location.state.playersInfo).then(function(scores) {
      this.setState({isLoading: false, scores: scores});
    }.bind(this));
  },

  render: function() {
    return (<Results isLoading={this.state.isLoading} scores={this.state.scores} playersInfo={this.props.location.state.playersInfo}/>);
  }
});

module.exports = ResultsContainer;
