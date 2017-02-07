var React = require("react");
var PropTypes = React.PropTypes;
var Link = require("react-router").Link;
var PlayersDetails = require("./PlayersDetails");

function ConfirmBattle(props) {
  if (props.isLoading === true) {
    return (<div>Loading</div>);
  } else {
    return (
      <div>
        <PlayersDetails playerOne={props.playersInfo[0]} playerTwo={props.playersInfo[1]}/>
        <div><button onClick={props.onInitiateBattle}>Initiate Battle</button></div>
        <div><Link to="/playerOne"><button>Reset Players</button></Link></div>
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

