var React = require("react");
var PropTypes = React.PropTypes;
var PlayersDetails = require("./PlayersDetails");

var Results = function(props) {
  console.log("Render do REsults");
  console.log(props.scores);
  if (props.isLoading === true) {
    return (<div>LOADING...</div>);
  }
  return (<PlayersDetails scores={props.scores} playerOne={props.playersInfo[0]} playerTwo={props.playersInfo[1]}/>);
}

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
};

module.exports = Results;
