
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("mark_challenge_completed", function(request, response) {

   var user = Parse.User.current();

  //get user data
  var response_str = ""
  response_str +=  request.params.challenge_id
  response_str.
  response.success(response_str + console.log(user));
});
