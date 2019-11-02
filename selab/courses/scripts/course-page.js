$(document).ready(function(){
	$('#tab').find('div').click(function(){
		$('#tab').find('div').css({"background-color": "#afafaf",
			"height": "41px",
			"margin-top": "7px",
			"color": "$d6d6d6"});
		$(this).css({"background-color": "#70c8e9",
			"height": "48px",
			"margin-top": "0px",
			"color": "white"});
		$('#main').css({"display": "none"});
		$('#slides').css({"display": "none"});
		$('#problems').css({"display": "none"});
		$var = $(this).data('tab');
		$('#'+$var).css({"display":"block"})
	});

	//$('#slides a').each(function () {
	//	var $self = $(this);
	//	$self.parents('tr').find('td').click(function () {
	//		$self.get(0).click();
	//	});
	//});
});
