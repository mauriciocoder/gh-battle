var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var ColoredHeader = require("../styles/index").ColoredHeader;

var Home = React.createClass({
  render: function() {
    return (
    <div>
      <h1 style={ColoredHeader}>GitHub-Battle</h1>
      <p>Fancy moto</p>
      <Link to="playerOne">
        <button type="button">Get Started!</button>
      </Link>
    </div>
    );
  }
})
module.exports = Home;
