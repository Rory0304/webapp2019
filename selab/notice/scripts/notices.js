"use strict";

$(document).ready(function () {
	$(".information").click(function () {
		$(this).next().slideToggle('fast');
	});

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
	
	$('#cancel').click(clickCancelBtn);
	$('#submit').click(clickSubmitBtn);
	$('#add').click(clickAddBtn);
	$('.delete').click(clickDeleteBtn); 
	$(document).on("click", ".add-file", clickAddFileBtn);
	$(document).on("click", ".delete-file", clickDeleteFileBtn);
});

function clickAddFileBtn(){
	$(this).removeClass('fa-plus-square-o add-file');
	$(this).addClass('fa-minus-square-o delete-file');
	$('#filewrap').append("<div class='file-block'><i class='fa fa-plus-square-o add-file'></i><input type='file' name='file[]' /></div>");
	$("#register").height($("#register").height() + 20);
}

function clickDeleteFileBtn(){
	$(this).parent().remove();
	$("#register").height($("#register").height() - 20);
}

function clickCancelBtn(){
	$('#register').addClass('hidden');
	$("#register_title").val("");
	$("#register_contents").val("");
	$("#register").find("input:checkbox").each(function () {
		$(this).prop("checked", false);
	});
	$("#filewrap").empty();
	$("#filewrap").append("<div class='file-block'><i class='fa fa-plus-square-o add-file'></i><input type='file' name='file[]' /></div>");
	return false;
}

function clickSubmitBtn(){
	if ($("#register_title")[0].value =="" || $("#register_contents")[0].value =="") {
		alert("Please fill out the form");
		return false;
	} else{
		$.ajax();
	}
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

function clickDeleteFile () {
	$('#edit-attachement').addClass("hidden");
	$("input:hidden[name='is-delete']").val(1);
}
