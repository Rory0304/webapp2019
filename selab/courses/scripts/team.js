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
  var where = document.getElementById("by");
  if (by == "all") {
    a = 'selected="selected"';
  }
  else if (by == "byTeam") {
    t = 'selected="selected"';
  }
  else {
    l = 'selected="selected"';
  }
  where.innerHTML =
  '<option value="all" ' +a+ '> all </option>' +
  '<option value="byTeam" ' +t+ '> by team</option>' +
  '<option value="byLang" ' +l+ '> by lang </option>';
}

function editLangClass() {
  for (var i=0; i<langSelected.length; i++) {
    var langButton = document.getElementById(langSelected[i]);
    langButton.className = "selectedlangOption";
  }
}

function selectLang(val) {
  //최대 5개까지 선택 가늠
  if (langSelected.length < 5) {
    var langButton = document.getElementById(val);
    if (langButton.className == "langOption") {
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
}
