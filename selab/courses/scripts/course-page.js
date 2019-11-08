$(document).ready(function(){
	$('#tab').find('div').click(function(){
		$('#tab').find('div').addClass("deactive");
		$(this).removeClass("deactive");
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
