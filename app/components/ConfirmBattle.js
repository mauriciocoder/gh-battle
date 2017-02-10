var React = require("react");
var PropTypes = React.PropTypes;
var Link = require("react-router").Link;
var PlayersDetails = require("./PlayersDetails");
var ResetPlayers = require("./ResetPlayers");

function ConfirmBattle(props) {
  if (props.isLoading === true) {
    return (<div>Loading</div>);
  } else {
    return (
      <div>
        <PlayersDetails playerOne={props.playersInfo[0]} playerTwo={props.playersInfo[1]}/>
        <div><button onClick={props.onInitiateBattle}>Initiate Battle</button></div>
        <ResetPlayers/>
      </div>
    );
  }
}

ConfirmBattle.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
};

module.exports = ConfirmBattle;

