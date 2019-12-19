function Request() {
    // new Ajax.Request("common/php/loadsetting.php", {
    //     method: "get",
    //     onSuccess: loadsetting,
    //     onFailure: ajaxFailure,
    //     onException: ajaxFailure
    // });

    $.ajax({
        url: "common/php/loadsetting.php",
        type: "GET",
        dataType: json,
        success: loadsetting,
        error: ajaxFailure
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
