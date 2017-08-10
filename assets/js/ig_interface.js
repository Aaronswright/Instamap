/* 
|	ig_interface.js-
|		javascript library for authorizing and
|		interacting with the Instagram API.		
*/

// TODO: oauth token reciept

// TODO: decide what functions should be covered
		/* > Retrieve a IG user's info, eg. name,
			  email, etc.
		   > Pull thumbnails from a user's public
		      albums, CONSIDER: two seperate img
			  retr methods, one for pics of the
			  user, the other a sample of their
			  interests (or whatever)
		   > More to come.  None of it works w/o
		   	  the oAuth token, so that is 1st
			  priority.							*/

var ig_isLoggedIn = false;


var igInterface = {
	token: false,
	loggedIn: false,
	errorList: [];
	redirectUri: "http://aaronswright.github.io/Instamap/" + "InstaAuth.php",
	
	init: function(me) {
		if ( ig_isLoggedIn ) {
			this.loggedIn = true;
			// TODO: finish init for IG obj.
		} else {
			this.loggedIn = false;
		}
	},
	getStatus: function(x = 0) {
		if ( x === 0 ) {
			// TODO: use x to vary output... eg, 
				// 1 to output boolean describing login state
				// 2 to output a user-friendly string explaining status of the login,
				//    and any other useful info, etc.
				// 3 to return a list of error codes that have occured, if any
				// 4 to output string with user-friendly description of any errors
				//	  that may have occured, along with suggestions on how to amend
				//	  them.
				// default = 0 will return boolean for object state, always true
				//    until error occurs. 
			return true;
		} else {
			switch (x) {
				case 1:
					return "oAuth status t/f";
					break;
				case 2:
					return "Status string...";
					break;
				case 3:
					if ( this.errorList.length != 0 ) {
						return this.errorList;
					} else {
						return false;
					}
					break;
				case 4:
					if ( this.errorList.length != 0) {
						var errString = "";
						for ( var i = 0; i < this.errorList.length; i++ ) {
							var errDesc = descError(this.errorList[i])
							if (! errDesc) {
								// Error retreieving err description...
								errString += "[" + this.errorList[i] + "] : No description available\n";
							} else {
								errString += "[" + this.errorList[i] + "] : " + errDesc + "\n";
							}
						}
						return errString;
					} else {
						return false;
					}
					break;
				default:
					console.log("IG_Interface.getStatus():  invalid arg (" + x + ").  Valid args are int 0-4.");
					return false;
			}
		}
						
	}

}
