/*
ig_interface.js
*/


var token = window.location.hash;

if (token == "") {
	$('#content-main').show();
	$('#map_page').hide();
} else {
	token = token.split("=")[1]
	$('#content-main').hide();
	$('#map_page').show();
}
