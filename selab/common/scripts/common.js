// fubction for customize

function settingview(){
  var setting = document.getElementById("settingtab");
  setting.style.width = "100%";
}

function closesetting() {
  var setting = document.getElementById("settingtab");
  setting.style.width = "0%";
}

function fontupdate(value){
  if(value==1){
   var font = document.getElementById("fontselect").value;
   document.getElementById("main").style.fontFamily = font;
   document.getElementById("samplePage").style.fontFamily = font;
  }
  if(value==2){
    var fontsize = document.getElementById("fontsizeSlect").value;
    document.getElementById("sortable").style.fontSize = fontsize;
    document.getElementById("sampleC").style.fontSize = fontsize;
  }
}

 function backupdate(){
  var back = document.getElementById("backselect").value;
  var backcss = document.getElementById("backcss");
  backcss.href=('home/styles/theme' + back +'.css');
 }

function navigation() {
  jQuery(function($) {
    var nav = $(':radio[name="nav"]:checked').val();
    $("input:radio[name=nav]").click(function() {
      var nav = $(':radio[name="nav"]:checked').val();
      if(nav == "top") {
        $(".header").css("display", "block");
        $("#sideNav").css("display", "none");
        $(".main-container").css({"margin-top":"120px", "margin-left":"0", "margin-right":"0"});
      }
      else if(nav == "left") {
        $(".header").css("display", "none");
        $("#sideNav").css({"display":"block", "left":"0", "top":"0"});
        $(".main-container").css({"margin-top":"0", "margin-left":"120px", "margin-right":"0"});
        $(".nav-list-right").css("float", "left");
        $(".nav-list-left").css("float", "left");
      }
      else {
        $(".header").css("display", "none");
        $("#sideNav").css({"display":"block", "right":"0", "top":"0"});
        $(".main-container").css({"margin-top":"0", "margin-left":"0", "margin-right":"120px"});
        $(".nav-list-right").css("float", "right");
        $(".nav-list-left").css("float", "right");
      }
    })
    if(nav == "top") {
      $(".header").css("display", "block");
      $("#sideNav").css("display", "none");
      $(".main-container").css("margin-top", "120px");
    }
    else if(nav == "left") {
      $(".header").css("display", "none");
      $("#sideNav").css({"display":"block", "left":"0", "top":"0"});
      $(".main-container").css("margin-top", "0");
      $(".nav-list-right").css("float", "left");
      $(".nav-list-left").css("float", "left");
    }
    else {
      $(".header").css("display", "none");
      $("#nav").css({"display":"block", "right":"0", "top":"0"});
      $(".main-container").css("margin-top", "0");
      $(".nav-list-right").css("float", "right");
      $(".nav-list-left").css("float", "right");
    }
  });
}

// function for make index sortable
$(function(){
	$( "#menu ul" ).sortable();
  $( ".nav-list-right" ).sortable();
})

function startup() {
  navigation();
}

window.onload = startup;
