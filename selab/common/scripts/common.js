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
  }
  if(value==2){
    var fontsize = document.getElementById("fontsizeSlect").value;
    document.getElementById("sortable").style.fontSize = fontsize;
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
        $(".header").css("display", "");
        $("#nav").css("display", "none");
        $(".main-container").css("top", "124px");
      }
      else if(nav == "left") {
        $(".header").css("display", "none");
        $("#nav").css({"display":"", "right":""});
        $(".main-container").css("top", "0");
      }
      else {
        $(".header").css("display", "none");
        $("#nav").css({"display":"", "right":"0"});
        $(".main-container").css("top", "0");
      }
    })
    if(nav == "top") {
      $(".header").css("display", "");
      $("#nav").css("display", "none");
      $(".main-container").css("top", "124px");
    }
    else if(nav == "left") {
      $(".header").css("display", "none");
      $("#nav").css({"display":"", "right":""});
      $(".main-container").css("top", "0");
    }
    else {
      $(".header").css("display", "none");
      $("#nav").css({"display":"", "right":"0"});
      $(".main-container").css("top", "0");
    }
  });
}

$(function(){
	$( "#menu ul" ).sortable();
})

function startup() {
  var setting = document.getElementById("settingtab");
  setting.style.display="none";
  navigation();
}

window.onload = startup;
