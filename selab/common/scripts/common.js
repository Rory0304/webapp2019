function settingview(){
  var setting = document.getElementById("settingtab");

  if(setting.style.display=="none"){
    setting.style.display="block";
  }
  else{
    setting.style.display="none";
  }
}

//add name
function font(){

  var fontdiv = document.getElementById("font");
  fontdiv.innerHTML = '<p>Font</p>' +
  '<select id="fontselect" name="selectFontFamily" onchange="fontupdate(1);">' +
  '<option style="font-family:Serif" value="serif"> Serif </option><option style="font-family:Tahoma" value="Tahoma"> Tahoma </option>'+
  '<option style="font-family:Arial" value="Arial"> Arial </option><option style="font-family:Monospace" value="Monospace">Monospace</option>' +
  '<option style="font-family:Roboto" value="Roboto">Roboto</option><option style="font-family:Times New Roman" value="Times New Roman">Times New Roman</option>' +
  '<option style="font-family:Garamond" value="Garamond">Garamond</option><option style="font-family:Comic Sans MS" value="Comic Sans MS">Comic Sans MS</option>' +
  '<option style="font-family:Courier" value="Courier">Courier</option><option style="font-family:Impact" value="Impact">Impact</otpion></select>' +
  '<p>Font Size</p>' +
  '<select id="fontsizeSlect" name="selectfontsize" onchange="fontupdate(2);">' +
  '<option>10pt</option><option>12pt</option><option>14pt</option><option>16pt</option><option>18pt</option>' +
  '<option>20pt</option><option>22pt</option><option>24pt</option><option>26pt</option><option>28pt</option>' +
  '<option>30pt</option></select>'
}

//add name
function background(){
  var backgrounddiv = document.getElementById("background");
  backgrounddiv.innerHTML = '<p>Background</p>' +
  '<select id="backselect" name="selectBackground" onchange="backupdate();">' +
  '<option value="1"> Theme1 </option>' +
  '<option value="2"> Theme2</option>' +
  '<option value="3" data-style="background-image: url(../home/styles/theme3.css)"> Theme3 </option>' +
  '<option value="4" data-style="background-image: url(../home/styles/theme4.css)"> Theme4 </option>' +
  '<option value="5" data-style="background-image: url(../home/styles/theme5.css)"> Theme5 </option></select>'
}

function fontupdate(value){
  if(value==1){
   var font = document.getElementById("fontselect").value;
   document.getElementsByClassName("container")[0].style.fontFamily = font;
  //  jQuery(function($){
  //   $(".container :not(#settingtab)").css("fontFamily",font);
  // });
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
        $("#menu").css("display", "");
        $("#nav").css("display", "none");
      }
      else if(nav == "left") {
        $("#menu").css("display", "none");
        $("#nav").css({"display":"", "left":"15px", "right":"", "top":"100px"});
      }
      else {
        $("#menu").css("display", "none");
        $("#nav").css({"display":"", "left":"","right":"15px", "top":"100px"});
      }
    })
    if(nav == "top") {
      $("#menu").css("display", "");
      $("#nav").css("display", "none");
    }
    else if(nav == "left") {
      $("#menu").css("display", "none");
      $("#nav").css({"display":"", "left":"15px", "right":"", "top":"100px"});
    }
    else {
      $("#menu").css("display", "none");
      $("#nav").css({"display":"", "left":"","right":"15px", "top":"100px"});
    }
  });
}

$(function(){
	$( "#menu ul" ).sortable();
})

function startup() {
  font();
  background();
  // navigation();
}

window.onload = startup;
