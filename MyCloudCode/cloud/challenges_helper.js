exports.is_already_completed = function(user_completed_challenges_object, challenge_id) {
	return !!user_completed_challenges_object[challenge_id];
  
}


exports.mark_challenge_completed = function(user, challenge_id){
	user.attributes.challenges_completed = user.attributes.challenges_completed || {};
	user.attributes.challenges_completed[challenge_id] = {"created_at": new Date().getTime()};
	//update user points
	
	//check for themes completed

	user.save();

}