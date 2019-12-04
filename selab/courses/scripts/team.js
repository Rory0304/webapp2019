function sorting() {
  jQuery($(function(){
	  var where = $( "#where" ).val();
    $(location).attr('href', 'index0.html?where='+where);
  }));
}

function addSelec(op) {
  var a = "";
  var t = "";
  var l = "";
  var where = document.getElementById("where");
  if (op == "all") {
    a = 'selected="selected"';
  }
  else if (op == "team") {
    t = 'selected="selected"';
  }
  else {
    l = 'selected="selected"';
  }
  where.innerHTML =
  '<option value="all" ' +a+ '> all </option>' +
  '<option value="team" ' +t+ '> by taem</option>' +
  '<option value="lang" ' +l+ '> by lang </option>';
}
