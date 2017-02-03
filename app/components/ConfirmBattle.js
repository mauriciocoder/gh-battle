var React = require("react");

function ConfirmBattle(props) {
  return (props.isLoading === true ?  <div>LOADING</div> : <div>FINISHED</div>);
}

module.exports = ConfirmBattle;

