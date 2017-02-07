var axios = require("axios");
var ghApiConfig = require("../config/gh-api");

var client_id = ghApiConfig.client_id;
var secret_id = ghApiConfig.secret_id;

var getPlayerInfo = function(player) {
  return axios.get("https://api.github.com/users/" + player + "?client_id=" + client_id + "&secret_id=" + secret_id);
}

var GitHubUtil = {
  getPlayersInfo: function(players) {
    return axios.all(players.map(function(player) {
        return getPlayerInfo(player);
      })).then(function (result) {
        return result.map(function(player) { return player.data });
      }).catch(function(err) {
        console.warn("Error getting data from getPlayersInfo", err)});
  }
};

module.exports =  GitHubUtil;
