<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=custom; host=54.180.112.225; port=3306", "root", "11111111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //php 변수 쓸려면 
        $id = $_SESSION['ID'];
        $id = $db->quote($id);
        $order = $_POST["order"];
        $order = $db->quote($order);
        $nav = $_POST["nav"];
        $nav = $db->quote($nav);
        $font = $_POST["selectFontFamily"];
        $font = $db->quote($font);
        $fontsize = $_POST["selectfontsize"];
        $fontsize = $db->quote($fontsize);
        $background = $_POST["selectBackground"];
        $background = $db->quote($background);
        
        // echo "<pre>";
        // var_dump($id);
        // var_dump($nav);
        // var_dump($order);
        // var_dump($font);
        // var_dump($fontsize);
        // var_dump($background);
        // echo "</pre>";


        $db->exec("UPDATE menu_page
        SET menuOrder = $order,
            nav = $nav,
            font = $font,
            fontsize = $fontsize,
            background = $background
        WHERE id = $id");

        header("Location: ".$_SERVER['HTTP_REFERER']);
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
    
?>