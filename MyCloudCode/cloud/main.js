
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("mark_challenge_completed", function(request, response) {

	//get user data
   var user = Parse.User.current();

  response.success("challangeid " + request.params.challenge_id + " user id is "  + console.log(user.id));
});
