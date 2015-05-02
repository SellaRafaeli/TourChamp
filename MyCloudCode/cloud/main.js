var challenges_helper = require('cloud/challenges_helper.js');

Parse.Cloud.define("mark_challenge_completed", function(request, response) {

   var user = Parse.User.current(),
   challenge_id = request.params.challenge_id ,
   challenges_completed = user.attributes.challenges_completed || {}
   already_completed = challenges_helper.is_already_completed(challenges_completed, challenge_id);
   
   if (already_completed){
   		res = "already completed chanllenge id " + challenge_id + " for user_id "  + user.id
   		console.log(res);
   }{
   		res = "marking completed " + challenge_id + " for user_id "  + user.id
   		var Challenge = Parse.Object.extend("Challenge");
	  	var query = new Parse.Query(Challenge);
	  	query.include("themes");
		query.get(challenge_id, {
			  success: function(challenge) {
			   if (challenge){
			   		challenges_helper.mark_challenge_completed(user, challenge)	   		
			   }else{
			   		response.success("didnt find that challenge in the db");		
			   }
			    
			  },
			  error: function(error) {
			    alert("Error: " + error.code + " " + error.message);
			  }
		});
   	   
   }

   response.success(res);
});


