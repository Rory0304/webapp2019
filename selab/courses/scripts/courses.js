$(document).ready(function(){
	$(".circle").hover(
		function(){
			$(this).animate({
				width: "30px",
				height: "30px"
			}, 50).animate({
				width: "25px",
				height: "25px"
			}, 50);
		},
		function(){
			$(this).animate({
				width: "20px",
				height: "20px"
		}, 50);
	});


	$(".active").hover(function(){
		$(this).addClass("hovered");
		$href = $(this).data("href");
		$("td[data-href='"+$href+"']").addClass("hovered");
	},
	function(){
		$(this).removeClass("hovered");
		$href = $(this).data("href");
		$("td[data-href='"+$href+"']").removeClass("hovered");
	});
});
