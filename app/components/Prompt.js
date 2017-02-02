var React = require("react");
var PropTypes = React.PropTypes;
var ColoredHeader = require("../styles/index").ColoredHeader;

function Prompt(props) {
  return(
    <div>
      <h1 style={ColoredHeader}>{props.header}</h1>
        <form onSubmit={props.onSubmit}>
          <input type="text" value={props.username} onChange={props.onChange}/>
          <div><button>Next</button></div>
        </form>
    </div>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

module.exports = Prompt;
