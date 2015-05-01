  // Initialize Parse
  window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({ // this line replaces FB.init({
      appId      : '1413783292275789', // Facebook App ID
      status     : true,  // check Facebook Login status
      cookie     : true,  // enable cookies to allow Parse to access the session
      xfbml      : true,  // initialize Facebook social plugins on the page
      version    : 'v2.2' // point to the latest Facebook Graph API version
    });    
  };
 
  function fb_login() {
    Parse.FacebookUtils.logIn("public_profile,email", {
            success: function(user) {
            if (!user.existed()) {
                
              alert("User signed up and logged in through Facebook!");
                FB.api('/me', function(me) {
                    user.set("displayName", me.name);
                    user.set("email", me.email);
                    user.save();
                    //console.log("/me response", me);
                });
            } else {
              tc.user(user.attributes);
              redirect('/#city/Tel Aviv');
            }
          },
          error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
          }
    });
  }

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
   