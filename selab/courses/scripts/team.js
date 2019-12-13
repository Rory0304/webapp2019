function sorting() {
  jQuery($(function(){
	  var by = $( "#by" ).val();
    $(location).attr('href', 'team.html?by='+by);
  }));
}

function addSelec() {
  var a = "";
  var t = "";
  var l = "";
  var r = "";
  var where = document.getElementById("by");
  if (by == "all") {
    a = 'selected="selected"';
  }
  else if (by == "byTeam") {
    t = 'selected="selected"';
  }
  else if (by == "recommendation") {
    r = 'selected="selected"';
  }
  else {
    l = 'selected="selected"';
  }
  where.innerHTML =
  '<option value="all" ' +a+ '> all </option>' +
  '<option value="byTeam" ' +t+ '> by team</option>' +
  '<option value="byLang" ' +l+ '> by lang </option>' +
  '<option value="recommendation" ' +r+ '> recommendation </option>';
}

function editLangClass() {
  for (var i=0; i<langSelected.length; i++) {
    var langButton = document.getElementById(langSelected[i]);
    langButton.className = "selectedlangOption";
  }
}

function selectLang(val) {
  var langButton = document.getElementById(val);
  if (langButton.className == "langOption") {
    if (langSelected.length >= 5) {
      return;
    }
    langSelected.push(val);
  }
  else {
    if (langSelected.indexOf(val) > -1) {
      langSelected.splice(langSelected.indexOf(val),1);
      langButton.className = "langOption";
    }
  }

  var link = 'team.html?by=' + by;
  for (var i=0; i<langSelected.length; i++) {
    link = link + "&langSelected[]=" + langSelected[i];
  }
  location.href = link;
}

function cardWidth() {
  jQuery($(function(){
    var cardsWidth = $(".cards").outerWidth();
    var cardNum = Math.floor(cardsWidth/220);
    var cardMargin = (cardsWidth - 200*cardNum)/(cardNum*2);
    $(".card").css({"margin-left":cardMargin, "margin-right":cardMargin});
  }));
}

$(document).ready(function() {
  cardWidth();
});
