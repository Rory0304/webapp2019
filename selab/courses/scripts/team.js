function sorting() {
  jQuery($(function(){
	  var by = $( "#by" ).val();
    $(location).attr('href', 'team.html?by='+by);
  }));
}

function addSelec(op) {
  var a = "";
  var t = "";
  var l = "";
  var where = document.getElementById("by");
  if (op == "all") {
    a = 'selected="selected"';
  }
  else if (op == "byTeam") {
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

function selectLang() {

}
