var React = require("react");
var PropTypes = React.PropTypes;

var Scores = function(props) {
  if (props.scores !== undefined) {
    return (<tr><td><strong>Score:{props.scores[0]}</strong></td><td><strong>Score:{props.scores[1]}</strong></td></tr>);
  }
  return (<tr></tr>);
}

var PlayersDetails = function(props) {
  return (
    <table>
      <tr>
        <th>Player One</th>
        <th>Player Two</th>
      </tr>
      <Scores scores={props.scores}/>
      <tr>
        <td><img src={props.playerOne.avatar_url}/></td>
        <td><img src={props.playerTwo.avatar_url}/></td>
      </tr>
      <tr>
        <td>Name: {props.playerOne.name}</td>
        <td>Name: {props.playerTwo.name}</td>
      </tr>
      <tr>
        <td>Login: {props.playerOne.login}</td>
        <td>Login: {props.playerTwo.login}</td>
      </tr>
      <tr> </tr>
      <tr>
        <td>Location: {props.playerOne.location}</td>
        <td>Location: {props.playerTwo.location}</td>
      </tr>
      <tr>
        <td>Company: {props.playerOne.company}</td>
        <td>Company: {props.playerTwo.company}</td>
      </tr>
      <tr>
        <td>Followers: {props.playerOne.followers}</td>
        <td>Followers: {props.playerTwo.followers}</td>
      </tr>
      <tr>
        <td>Public Repos: {props.playerOne.public_repos}</td>
        <td>Public Repos: {props.playerTwo.public_repos}</td>
      </tr>
    </table>
  );
}

PlayersDetails.PropTypes = {
  playerOne: PropTypes.object.isRequired,
  playerTwo: PropTypes.object.isRequired,
  scores: PropTypes.array
}

module.exports = PlayersDetails;

