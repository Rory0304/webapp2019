$(document).ready(function () {
	mapHight();
	initialize();
	$("body").keydown(function(event) {
		if(event.which == '27'){
			$("#cancel").click();
		}
	});

	$('input').keypress(function (event) {
		if (event.which == 13) {
			event.preventDefault();
		}
	});
	$('#mail').click(clickMailBtn);
	$("#send").click(clickSendBtn);
	$("#madeby").click(function(){
		alert("디자인 : 컴퓨터 공학과 서유경, 김창주, 김가연, 현종환, 권기원, 김은숙 \n개발 : 컴퓨터 공학과 현종환, 권기원, 김은숙, 서유경, 김창주, 김가연\n유지보수: 컴퓨터 공학과 안윤근");
	});
	$("#cancel").click(function(){
		$("#mail-wrap").addClass("hidden");
		return false;
	});
});

function initialize () {
	var SElabLocation = new google.maps.LatLng(37.297608,126.836463);
	var mapOptions = {
		zoom: 17,
		center: SElabLocation,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		scrollwheel:false
	}
	var map = new google.maps.Map($("#map")[0], mapOptions);
	var pin = new google.maps.Marker({
		position: SElabLocation,
		animation: google.maps.Animation.BOUNCE,
		map: map
	});
}

function clickMailBtn (){
	$('#mail-wrap').removeClass('hidden');
}

function clickSendBtn () {
	if ($("#from")[0].value == "" ||  $("#subject")[0].value == "" || $("#message")[0].value == "") {
		alert("Please fill out the form");
		return false;
	} else {
		$.ajax({
			url:"mail.php",
			method:"post",
			data:{from:$("#from")[0].value, subject:$("#subject")[0].value, message:$("#message")[0].value}
		});
	}
}

function mapHight() {
	jQuery(function($) {
		var mapWidth = $("#map").outerWidth();
		$("#map").css("height", mapWidth);
		$(".wrap").css("height", mapWidth+80);
	});
}
