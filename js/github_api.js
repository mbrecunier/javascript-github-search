exports.getRepos = function(searchUser, apiKey){
  $.get('https://api.github.com/users/' + searchUser + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#username").html("<h2>User: " + response.login + "</h2>");
    $("#name").html("<h4>Name: " + response.name + "</h4>");
    $("#user-location").html("<h4>Location: " + response.location + "</h4>");
    $("#user-url").html("<h4><a href=" + response.html_url + ">Github</a></h4>");
    $("#user-avatar").html("<img src=" + response.avatar_url + ">");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + searchUser + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    $("#user-repositories").empty();
    for (var i = 0; i < response.length; i++) {
      $("#user-repositories").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
