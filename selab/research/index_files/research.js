$(document).ready(function(){
	$('#tab').find('div').click(function(){
		$('#tab').find('div').addClass("deactive");
		$(this).removeClass("deactive");
		$('.tabs').css({"display": "none"});
		$var = $(this).data('tab');
		$('#'+$var).css({"display": "block"})
	});
});