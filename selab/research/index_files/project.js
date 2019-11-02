"use strict";

$(document).ready(function () {
	$("#start_date").datepicker();
	$("#end_date").datepicker();
	$(".information").click(function () {
		$(this).next().slideToggle('fast');
	});
	$('#cancel').click(clickCancelBtn);
	$('#submit').click(clickSubmitBtn);
	$('#add').click(clickAddBtn);
	$('.delete').click(clickDeleteBtn); 
});

function clickCancelBtn(){
	$('#register').addClass('hidden');
	$("#Project_name")[0].value="";
	$("#start_date")[0].value="";
	$("#end_date")[0].value="";
	$("#related")[0].value="";
	return false;
}
function clickSubmitBtn(){
	if ($("#Project_name")[0].value =="" || $("#start_date")[0].value =="") {
		alert("Please fill out the form");
		return false;
	}
	else if($("#end_date")[0]!=""){
		$start=$("#start_date")[0].value.split("/");
		$end=$("#end_date")[0].value.split("/");
		alert($start[0]);
		if($start[2]>$end[2]){ /*year*/
			alert("The end date should be latter than the start date");
			return false;
		}
		else if($start[2]==$end[2] && $start[0]>$end[0]){	/*month*/
			alert("The end date should be latter than the start date");
			return false;
		}
		else if($start[2]==$end[2]  && start[0]=$end[0] && $start[1]>$end[1]){
			alert("The end date should be latter than the start date");
			return false;
		}
	}
	$.ajaxForm();
}
function clickAddBtn(){
	$('#register').removeClass('hidden');
}

function clickDeleteBtn(){
	$(".information").off("click");
	$.ajax({
		url:"delete.php",
		method:"post",
		data:{id:$(this).attr("data-id")}
	}).done(function(msg){
		location.reload();
	})
}