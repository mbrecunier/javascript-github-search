exports.getRepos = function(searchUser, apiKey){
  $.get('https://api.github.com/users/' + searchUser if(apikey !== null) {+ '?access_token=' + apiKey}).then(function(response){
    console.log(response);
    $("#username").html("<h2>User: " + response.login + "</h2>");
    $("#name").html("<h4>Name: " + response.name + "</h4>");
    $("#user-location").html("<h4>Location: " + response.location + "</h4>");
    $("#user-url").html("<h4><a href=" + response.html_url + ">Github</a></h4>");
    $("#user-avatar").html("<img src=" + response.avatar_url + ">");
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $.get('https://api.github.com/users/' + searchUser + '/repos' if(apikey !== null) {+ '?access_token=' + apiKey}).then(function(response){
    console.log(response);
    $(".user-repositories").empty();
    for (var i = 0; i < 15; i++) {
      $("#col-1").append("<li><a href=" + response[i].html_url + ">" + response[i].name + "</a>" + ": " + response[i].description + "</li>");
    }
    for (var i2 = 15; i2 < 30; i2++) {
      $("#col-2").append("<li><a href=" + response[i2].html_url + ">" + response[i2].name + "</a>" + ": " + response[i2].description + "</li>");
    }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
  $(".displays").show();
};
