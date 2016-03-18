var apiKey = require('./../.env').apiKey;
var getRepos = require('./../js/github_api.js').getRepos;

$(document).ready(function() {
  var searchUser;

  $('#search-form').submit(function(event) {
    event.preventDefault();
    searchUser = $("#search-username").val();
    getRepos(searchUser, apiKey);

  });
});
