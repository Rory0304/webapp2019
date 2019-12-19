function Request() {
    new Ajax.Request("common/php/loadsetting.php", {
        method: "get",
        onSuccess: loadsetting,
        onFailure: ajaxFailure,
        onException: ajaxFailure
    });
    
}

function loadsetting(ajax) {
    var text = ajax.responseText;
    var data = JSON.parse(text);

    if (data.length != 0) {
        var main_menuorder = data.main['menuorder'];
        var main_font = data.main['font'];
        var main_fontsize = data.main['fontsize'];
        var main_background = data.main['background'];
    
        var menu_menuorder = data.menu['menuorder'];
        var menu_font = data.menu['font'];
        var menu_fontsize = data.menu['fontsize'];
        var menu_background = data.menu['background'];
    
        var slide_1by1 = "1";
        var slide_font = data.slide['font'];
        var slide_fontsize = data.slide['fontsize'];
        var slide_tcolor = data.slide['tcolor'];
        var slide_ccolor = data.slide['ccolor'];
        document.getElementById("sortable").innerHTML = main_menuorder;

        var options = document.getElementById("fontselect").children
        for(var i=0; i<options.length; i++) {
            if (options[i].getAttribute("value") == main_font) {
                options[i].setAttribute("selected", "selected")
            } else {
                options[i].setAttribute("selected", "")
            }
        }
        fontupdate("fontstyle")

        var options = document.getElementById("fontsizeSlect").children
        for(var i=0; i<options.length; i++) {
            if (options[i].innerHTML == main_fontsize) {
                options[i].setAttribute("selected", "selected")
            } else {
                options[i].setAttribute("selected", "")
            }
        }
        fontupdate("sizeC")

        var backgrounds = document.getElementById("backselect").children
        for(var i=0; i<backgrounds.length; i++) {
            if (backgrounds[i].getAttribute("value") == main_background) {
                backgrounds[i].setAttribute("selected", "selected")
            } else {
                backgrounds[i].setAttribute("selected", "")
            }
        }
        backupdate();
    }
}




function ajaxFailure(ajax, exception) {
	var errorMessage = "Error making Ajax request:\n\n";
	if (exception) {
		errorMessage += "Exception: " + exception.message;
	} else {
		errorMessage += "Server status:\n" + ajax.status + " " + ajax.statusText + 
		                "\n\nServer response text:\n" + ajax.responseText;
	}
	alert(errorMessage);
}
