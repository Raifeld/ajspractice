
$(document).ready(function(){ //to declare functions available as soon as document is finished loading


$('button').mouseenter(function() {
    $(this).removeClass('makeRed').addClass('makeBlue');
});
 
$('button').mouseleave(function() {
    $(this).removeClass('makeBlue').addClass('makeRed');
});



	$("#button1").click(function() {
 	$("#cbutton1").removeClass("hidetext").addClass("showtext");
 	window.open ("http//www.apple.com/uk/itunes/"); //opens a nonexsistant page within the website folder
	});