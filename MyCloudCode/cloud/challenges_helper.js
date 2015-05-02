var _ = require('underscore');

function did_user_completed_all_theme_challenges(user_completed_challenges, theme_challenges){
		var completed_challenge_ids = _.pluck(user_completed_challenges, "id");
		res = theme_challenges.filter(function (theme_challenge) {
    			return user_completed_challenges.indexOf(theme_challenge) > -1;
		}).length == arr1.length
		return res;
}

exports.is_already_completed = function(user_completed_challenges_object, challenge_id) {
	return !!user_completed_challenges_object[challenge_id];
}


exports.mark_challenge_completed = function(user, challenge){
  
	var user_data = user.attributes,
	challenge_data = challenge.attributes;
	user_data.challenges_completed = user_data.challenges_completed || {};
	user_data.challenges_completed.add(challenge);
	

	//update user points
	user_data.points = user_data.points || 0;
	user_data.points += challenge_data.points;

	//update user completed themes, id needed
	challenge_data.themes.forEach(function(theme){
		var theme_challenges = theme.attributes.challenges;
		//check if needs to update the themes completed for the user
		if (did_user_completed_all_theme_challenges(user_data.challenges_completed, theme_challenges)){
			user_data.themes_completed.add(theme);
		}

	});

	user.save();

}


