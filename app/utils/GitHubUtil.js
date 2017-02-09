var axios = require("axios");
var ghApiConfig = require("../config/gh-api");

var client_id = ghApiConfig.client_id;
var secret_id = ghApiConfig.secret_id;

var getPlayerInfo = function(player) {
  return axios.get("https://api.github.com/users/" + player + "?client_id=" + client_id + "&secret_id=" + secret_id);
}

var getRepos = function(player) {
    return axios.get("https://api.github.com/users/" + player + "/repos?client_id=" + client_id + "&secret_id=" + secret_id + "&per_page=100");
  }

var getTotalStars = function(repos) {
  return repos.data.reduce(function(acc, item) {
    return acc + item.stargazers_count;
  }, 0);
}

var getPlayerData = function(player) {
  return getRepos(player.login).then(getTotalStars).then(function(totalStars) {
    return ({followers: player.followers, totalStars: totalStars});
  });
}

var calculateScores = function(players) {
  var playerOne = players[0].followers * 3 + players[0].totalStars;
  var playerTwo = players[1].followers * 3 + players[1].totalStars;
  return [playerOne, playerTwo];
}

var GitHubUtil = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(player) {
        return getPlayerInfo(player);
      })).then(function (result) {
        return result.map(function(player) { return player.data });
      }).catch(function(err) {
        console.warn("Error getting data from getPlayersInfo", err)});
  },

  battle: function(playersInfo) {
    var playerOneData = getPlayerData(playersInfo[0]);
    var playerTwoData = getPlayerData(playersInfo[1]);
    return axios.all([playerOneData, playerTwoData]).then(calculateScores).catch(function(error) { console.error("Error fetching player data", error)});
  }
};

module.exports =  GitHubUtil;
