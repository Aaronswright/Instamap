/*
ig_interface.js
*/


var token = window.location.hash;
var username, profile_pic, bio;

if (token == "") {
	$('#content-main').show();
	$('#map_page').hide();
} else {
	token = token.split("=")[1]
	$('#content-main').hide();
	$('#map_page').show();
	$.get('https://api.instagram.com/v1/users/self/?' + token, function(data) {
		console.log(data);
	});

}
