$(document).ready(function () {
	$("#add").click(clickAddBtn);
	$("#cancel").click(clickCancelBtn);
	$("#submit").click(clickSubmitBtn);
	$(".delete").click(clickDeleteBtn);
	$("#tab").find('div').click(function(){
		$('#tab').find('div').addClass("deactive");
		$(this).removeClass("deactive");
		$('.back').addClass('hidden');
		$var = $(this).data('type');
		$('#'+$var).removeClass('hidden');
	});
});

function clickCancelBtn(){
	$("#register").addClass("hidden");
	return false;
}

function clickAddBtn () {
	$("#register").removeClass("hidden");
}

function clickSubmitBtn () {
	if ($("#register_title")[0].value=="" || $("#file")[0].value == "") {
		alert("Please fill out the form");
		return false;
	} else{
		$.ajax();
	}
	
}

function clickDeleteBtn(){
	$.ajax({
		url:"delete.php",
		method:"post",
		data:{id:$(this).attr("data-id")}
	}).done(function(msg){
		location.reload();
	});
}