var React = require("react");
var PropTypes = React.PropTypes;
var PlayersDetails = require("./PlayersDetails");
var ResetPlayers = require("./ResetPlayers");

var Results = function(props) {
  if (props.isLoading === true) {
    return (<div>LOADING...</div>);
  }
  return (
  <div>
    <PlayersDetails scores={props.scores} playerOne={props.playersInfo[0]} playerTwo={props.playersInfo[1]}/>
    <ResetPlayers/>
  </div>
  );
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
};

module.exports = Results;
