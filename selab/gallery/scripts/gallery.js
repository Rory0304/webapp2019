$(document).ready(function () {
	$("#add").click(clickAddBtn);
	$("#cancel").click(clickCancelBtn);
	$("#submit").click(clickSubmitBtn);
	$(".delete").click(clickDeleteBtn);
	filterSelection("all");
	$("#tab").find('div').click(function(){
		$('#tab').find('div').addClass("deactive");
		$(this).removeClass("deactive");
		filterSelection(this.dataset.type);
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

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
