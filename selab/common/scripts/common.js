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
  jQuery(function($) {
    if(value=='fontstyle'){
      var font = $("#fontselect").val();
      $("#main").css("fontFamily",font);
      $("#samplePage").css("fontFamily",font);
    }

    else if(value=='home'){
      var select = $("#fontsizeSlectz").val();
      var fontsize = titleSize(select);
      $("#sortable").css("font-size",fontsize);
      $("#sampleC").css("font-size",fontsize);
    }

    else if(value=='notice'){
      var select = $("#fontsizeSlect").val();
      var title = titleSize(select);
      var content = contentSize(select);
      $(".title pull-left").css("font-size",title);
      $(".name pull-left").css("font-size",title);
      $(".time pull-left").css("font-size",title);
      $(".entry").css("font-size",content);
    }

    else if(value=='members'){
      var select = $("#fontsizeSlect").val();
      var title = titleSize(select);
      var content = contentSize(select);
      $(".position h2").css("font-size",title);
      $(".name").css("font-size",title);
      $("#main ul").css("font-size",content);
    }

     else if(value=='research'){
      var select = $("#fontsizeSlect").val();
      var title = titleSize(select);
      var content = contentSize(select);
      $("#tab div").css("font-size",title);
      $(".contents h3").css("font-size",title);
      $(".subject li").css("font-size",content);
    }

    else if(value=='publication'){
      var select = $("#fontsizeSlect").val();
      var title = titleSize(select);
      var content = contentSize(select);
      $("#tab div").css("font-size",title);
      $("#publications td").css("font-size",content);
    }

    else if(value=='gallery'){
     var select = $("#fontsizeSlect").val();
     var title = titleSize(select);
     var content = contentSize(select);
     $("#tab div").css("font-size",title);
     $(".title").css("font-size",content);
   }
 });
}

function backupdate(){
  var back = document.getElementById("backselect").value;
  var backcss = document.getElementById("backcss");
  backcss.href=('home/styles/theme' + back +'.css');
}

function titleSize(select){
  switch(select){
    case 'Small':
    var result =  '15px';
    break;

    case 'Normal':
    var result =  '20px';
    break;

    case 'Medium':
    var result ='25px';
    break;

    case 'Large':
    var result =  '30px';
    break;

    case 'Huge':
    var result = '35px';
    break;
  }

  return result;
}

function contentSize(select){
  switch(select){
    case 'Small':
    var result =  '13px';
    break;

    case 'Normal':
    var result =  '18px';
    break;

    case 'Medium':
    var result ='23px';
    break;

    case 'Large':
    var result =  '28px';
    break;

    case 'Huge':
    var result = '32px';
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
        $(".header").css("display", "block");
        $("#sideNav").css("display", "none");
        $(".main-container").css({"margin-top":"120px", "margin-left":"0", "margin-right":"0"});
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
      else {
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
      $(".header").css("display", "block");
      $("#sideNav").css("display", "none");
      $(".main-container").css("margin-top", "120px");
    }
    else if(nav == "left") {
      $(".header").css("display", "none");
      $("#sideNav").css({"display":"block", "left":"0", "top":"0", "right":""});
      var w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      $(".main-container").css({"margin-top":"0", "width":w-sideNavWidth, "margin-left":sideNavWidth, "margin-right":""});
      $(".nav-list-right").css("float", "left");
      $(".nav-list-left").css("float", "left");
    }
    else {
      $(".header").css("display", "none");
      $("#nav").css({"display":"block", "right":"0", "top":"0", "left":""});
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
	$( "#menu ul" ).sortable();
  $( ".nav-list-right" ).sortable();
})

function startup() {
  navigation();
}

window.onload = startup;
