var title="";
var currentIndex;

$(document).ready(function () {
	$(".tile").click(openModal);
	$(".close").click(closeModal);
	filterSelection("all");
	tileHight();
	$("#tab").find('div').click(function(){
		$('#tab').find('div').addClass("deactive");
		$(this).removeClass("deactive");
		filterSelection(this.dataset.type);
	});
	$("#twitter,#facebook,#kakao").click(function(){
		shareAct(this);
	});
});

function openModal(){
	var src = $(this).children('img').attr('src');
	currentIndex = $(this).index();
	if(currentIndex==0){
		document.getElementsByClassName("prev")[0].style.display = "none";
	}
	title = $(this).children(".title").find("p").text();
	var modal = document.getElementById("modal");
	var modalImg = document.getElementById("imgM");
	modal.style.display = "block";
	modalImg.src = src;
	$("html").css({"overflow-y":"hidden"});
	// captionText.innerHTML = title;
}


function shareAct(a){
	var snsCode = $(a).attr('id');
	var imglink = document.getElementById("imgM").src.split("/");
	var url = "https://raw.githubusercontent.com/Rory0304/webapp2019/master/selab/gallery/index_files/" + imglink[imglink.length-1];
	switch(snsCode){
		case"twitter":
		curl = "https://twitter.com/intent/tweet?text="+title +":&url="+url;
		break;
		case"facebook":
		curl = 'http://www.facebook.com/sharer/sharer.php?u='+url;
		break;
		case"kakao":
		curl = 'https://story.kakao.com/share?url='+ url;		
		break;
	}
	window.open(curl,'','width=600,height=300,top=100,left=100,scrollbars=yes');
}


function closeModal(){
	var modal = document.getElementById("modal");
	modal.style.display = "none";
	$("html").css({"overflow-y":""});
}


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

//function from w3school https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
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

function tileHight() {
	jQuery(function($) {
		var tile = $(".tile");
		var tileWidth = tile.outerWidth();
		$(".tile").css("height", tileWidth/4*3);
	});
}

function minusSlides(){
	var tile = document.getElementsByClassName("tile");
	var nextClass = tile[currentIndex+1];
	var imgsrc = nextClass.getElementsByTagName("img")[0].src;
	var modalImg = document.getElementById("imgM");
	modalImg.src = imgsrc;
	currentIndex +=1;
	if(currentIndex==tile.length-1){
		document.getElementsByClassName("next")[0].style.display = "none";
	}
	if(currentIndex==1){
		document.getElementsByClassName("prev")[0].style.display = "block";
	}	
}

function plusSlides(){
	var tile = document.getElementsByClassName("tile");
	var prevClass = tile[currentIndex-1];
	var imgsrc = prevClass.getElementsByTagName("img")[0].src;
	var modalImg = document.getElementById("imgM");
	modalImg.src = imgsrc;
	currentIndex -=1;
	if(currentIndex+2==tile.length){
		document.getElementsByClassName("next")[0].style.display = "block";
	}
	if(currentIndex==0){
		document.getElementsByClassName("prev")[0].style.display = "none";
	}
	

}

$(window).resize(function() {
	tileHight();
});
