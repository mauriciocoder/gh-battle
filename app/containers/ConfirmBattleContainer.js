var React = require("react");
var ConfirmBattle = require("../components/ConfirmBattle");
var GitHubUtil = require("../utils/GitHubUtil");

var ConfirmBattleContainer = React.createClass({
  contextTypes: function() {
    return ({
      router: React.PropTypes.object.isRequired
    });
  },

  getInitialState: function() {
    return ({
      isLoading: true,
      playerInfo: []
    });
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    var players = [query.playerOne, query.playerTwo];  
    GitHubUtil.getPlayersInfo(players).then(function (playerInfo) {
      this.setState({
        isLoading: false,
        playerInfo: playerInfo
      });
      console.log(this.state.playerInfo);
    }.bind(this));
  },

  render: function() {
    return (<ConfirmBattle isLoading={this.state.isLoading}/>);
  }
});

module.exports = ConfirmBattleContainer;

