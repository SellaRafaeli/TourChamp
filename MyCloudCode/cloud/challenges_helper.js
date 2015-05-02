
function did_user_completed_all_theme_challenges(user_completed_challenges, theme_challenges){
		var completed_challenge_ids = Object.keys(user.attributes.challenges_completed);
		res = theme_challenges.filter(function (theme_challenge) {
    			return completed_challenge_ids.indexOf(theme_challenge) > -1;
		}).length == completed_challenge_ids.length
		return res;
}

function completed_task_payload(){
	return {"created_at": new Date().getTime()}
}

exports.is_already_completed = function(user_completed_challenges_object, challenge_id) {
	return !!user_completed_challenges_object[challenge_id];
}


exports.mark_challenge_completed = function(user, challenge){
  
	var challenges_completed = user.attributes.challenges_completed || {},
	themes_completed = user.attributes.themes_completed || {};

	challenges_completed[challenge.id] = completed_task_payload();
	user.set("challenges_completed", challenges_completed)
	console.log("111");
	console.log(challenges_completed);
	user.save();
	
	//update user points
	var points = user.attributes.points || 0;
	user.set("points", points +  parseInt(challenge.attributes.points));

	//update user completed themes, id needed
	challenge.attributes.themes.forEach(function(theme){
		var theme_challenges = theme.attributes.challenges;
		//check if needs to update the themes completed for the user
		if (did_user_completed_all_theme_challenges(user.attributes.challenges_completed, theme_challenges)){
			//actually update in the user model	
			themes_completed[theme.id] = {"created_at": new Date().getTime(), "badge": theme.badge};
			user.set("themes_completed", themes_completed);
				console.log("222");
				console.log(themes_completed);
		}

	});

	user.save();
	

}


