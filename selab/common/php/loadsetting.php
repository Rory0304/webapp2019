<?php
    session_start();

    header("Content-type: application/jason");
    if ( !isset($_SESSION["ID"]) ) {
        $data = array();
        $jason_data = json_encode($data);
        print $jason_data;
        exit;
    }

    $data = array(
        "slide" => array(
           "1by1" => $_SESSION['slide_1by1'],
           "font" => $_SESSION['slide_font'],
           "fontsize" => $_SESSION['slide_fontsize'],
           "tcolor" => $_SESSION['slide_t_color'],
           "ccolor" => $_SESSION['slide_c_color']
        ),
        "main" => array(
           "menuorder" => $_SESSION['main_menuOrder'],
           "font" => $_SESSION['main_font'],
           "fontsize" => $_SESSION['main_fontsize'],
           "background" => $_SESSION['main_background']
        ),
        "menu" => array(
           "menuorder" => $_SESSION['menu_menuOrder'],
           "nav" => $_SESSION['menu_nav'],
           "font"=>$_SESSION['menu_font'],
           "fontsize"=>$_SESSION['menu_fontsize'],
           "background" => $_SESSION['menu_background']
        )
    );
    $jason_data = json_encode($data);
    print $jason_data;
    exit;
?>