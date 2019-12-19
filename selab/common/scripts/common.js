// function for customize

function settingview(){
  var setting = document.getElementById("settingtab");
  setting.style.width = "100%";
}

function closesetting() {
  var setting = document.getElementById("settingtab");
  setting.style.width = "0%";
}

function fontupdate(value){
  jQuery(function($){
    //font style select
    if(value=="fontstyle"){
     var font = $("#fontselect").val();
     j$("#main").css("fontFamily",font); //contents
     j$("h1").css("fontFamily",font); //title h1
     j$("#samplePage").css("fontFamily",font);
   }
   //font size select (contents)
   else if(value=="sizeC"){
     var select = $("#fontsizeSlect").val();
     var fontsize = titleSize(select);
     j$(".container").css("font-size",fontsize);
     j$("#sampleC").css("font-size",fontsize);
   }
    //font size select (contents and title)
    else if(value=="sizeTC"){
      var select = $("#fontsizeSlect").val();
      var content = contentSize(select);
      var title = titleSize(select);
      j$("#main").css("font-size",content); //contents
      j$("#tab").css("font-size",title); //tab menu
      j$("#title").css("font-size",title); //list spelcial item size (members)
      j$("#sampleC").css("font-size",content);
      j$("#sampleC h1").css("font-size",title);
    }
  });
}

function backupdate(){
  var back = document.getElementById("backselect").value;
  var backcss = document.getElementById("backcss").getAttribute("href");
  var backsplit = backcss.split("/");

  if(backsplit[1]=="common"){
     document.getElementById("backcss").href=('../common/styles/theme' + back +'.css');
  }
  else if(backsplit[1]=="styles"){
     document.getElementById("backcss").href=('common/styles/theme' + back +'.css');
  }
  else if(backsplit[1]==".."){
     document.getElementById("backcss").href=('../../../common/styles/theme' + back +'.css');
  }
}

// function backupdateO(){
//   var back = document.getElementById("backselect").value;
//   var backcss = document.getElementById("backcss");
// }

function titleSize(select){
  switch(select){
    case 'Small':
    var result =  '20px';
    break;

    case 'Normal':
    var result =  '22px';
    break;

    case 'Medium':
    var result ='24px';
    break;

    case 'Large':
    var result =  '26px';
    break;

    case 'Huge':
    var result = '28px';
    break;
  }

  return result;
}

function contentSize(select){
  switch(select){
    case 'Small':
    var result =  '17px';
    break;

    case 'Normal':
    var result =  '19px';
    break;

    case 'Medium':
    var result ='21px';
    break;

    case 'Large':
    var result =  '23px';
    break;

    case 'Huge':
    var result = '25px';
    break;
  }

  return result;
}


function navigation() {
  jQuery(function($) {
    var nav = $(':radio[name="nav"]:checked').val();
    $("input:radio[name=nav]").click(function() {
      var nav = $(':radio[name="nav"]:checked').val();
      if(nav == "top") {
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        $(".header").css("display", "block");
        $("#sideNav").css("display", "none");
        $(".main-container").css({"margin-top":"130px", "width":w, "margin-left":"0", "margin-right":"0"});
      }
      else if(nav == "left") {
        $(".header").css("display", "none");
        $("#sideNav").css({"display":"block", "left":"0", "top":"0", "right":""});
        var sideNavWidth = $("#sideNav")[0].clientWidth;
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        $(".main-container").css({"margin-top":"0", "width":w-sideNavWidth, "margin-left":sideNavWidth, "margin-right":""});
        $(".nav-list-right").css("float", "left");
        $(".nav-list-left").css("float", "left");
      }
      else if(nav=="right") {
        $(".header").css("display", "none");
        $("#sideNav").css({"display":"block", "right":"0", "top":"0", "left":""});
        var sideNavWidth = $("#sideNav")[0].clientWidth;
        var w = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
        $(".main-container").css({"margin-top":"0", "width":w-sideNavWidth, "margin-right":sideNavWidth, "margin-left":""});
        $(".nav-list-right").css("float", "right");
        $(".nav-list-left").css("float", "right");
      }
    })
    if(nav == "top") {
      var sideNavWidth = $("#sideNav")[0].clientWidth;
      var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      $(".header").css("display", "block");
      $("#sideNav").css("display", "none");
      $(".main-container").css({"margin-top":"130px", "width":w, "margin-left":"0", "margin-right":"0"});
    }
    else if(nav == "left") {
      $(".header").css("display", "none");
      $("#sideNav").css({"display":"block", "left":"0", "top":"0", "right":""});
      var sideNavWidth = $("#sideNav")[0].clientWidth;
      var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      $(".main-container").css({"margin-top":"0", "width":w-sideNavWidth, "margin-left":sideNavWidth, "margin-right":""});
      $(".nav-list-right").css("float", "left");
      $(".nav-list-left").css("float", "left");
    }
    else if(nav=="right") {
      $(".header").css("display", "none");
      $("#sideNav").css({"display":"block", "right":"0", "top":"0", "left":""});
      var sideNavWidth = $("#sideNav")[0].clientWidth;
      var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      $(".main-container").css({"margin-top":"0", "width":w-sideNavWidth, "margin-right":sideNavWidth, "margin-left":""});
      $(".nav-list-right").css("float", "right");
      $(".nav-list-left").css("float", "right");
    }
  });
}

// function for make index sortable
$(function(){
	j$( "#menu ul" ).sortable();
  j$( ".nav-list-right" ).sortable();
})

//function for save,
function saveorder() {
  var temp = document.getElementById("sortable");
  var order = temp.innerHTML;

  document.getElementById("saveOr").value = order;
}

function savemenu() {
  var temp = document.getElementsByClassName("ui-sortable");
  var order = temp[0].innerHTML;

  document.getElementById("saveOr").value = order;
}

function logout(){
  alert("로그아웃 되었습니다.");
}

function startup() {
  navigation();
  saveorder();
  Request();
}

window.onload = startup;
