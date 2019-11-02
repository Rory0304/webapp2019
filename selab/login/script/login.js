$( document ).ready(function(){
	$("#idform").focus();
	$("#error").slideDown("slow");
	var timer = setInterval(function () {
		$("#error").slideUp("slow");
		clearInterval(timer);
	}, 2000);
});
