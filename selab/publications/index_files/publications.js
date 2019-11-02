$(document).ready(function(){
	$('table tr').click(function(){
		if($(this).data('href')){
			window.open(
				$(this).data('href'),
				'_blank'
			);
		}
	});

	$('#upload').click(function(){
		$(location).attr('href', "./upload");
	});

	$('#tab').find('div').click(function(){
		$('#tab').find('div').addClass("deactive");
		$(this).removeClass("deactive");
		$('table').css({"display": "none"});
		$var = $(this).data('type');
		$('.'+$var).css({"display":"table"})
	});
});