<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=custom; host=54.180.112.225; port=3306", "root", "11111111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //php 변수 쓸려면 
        $id = $_SESSION['ID'];
        $id = $db->quote($id);
        $font = $_POST["selectFontFamily"];
        $font = $db->quote($font);
        $fontsize = $_POST["selectfontsize"];
        $fontsize = $db->quote($fontsize);
        $titlecolor = $_POST["t_color"];
        $titlecolor = $db->quote($titlecolor);
        $contentscolor = $_POST["c_color"];
        $contentscolor = $db->quote($contentscolor);
        
        // echo "<pre>";
        // var_dump($id);
        // var_dump($font);
        // var_dump($fontsize);
        // var_dump($titilecolor);
        // var_dump($contentscolor);
        // echo "</pre>";


        $db->exec("UPDATE slide 
        SET 1by1 = 1,
            font = $font,
            fontsize = $fontsize,
            t_color = $titlecolor,
            c_color = $contentscolor
        WHERE id = $id");

        header("Location: ".$_SERVER['HTTP_REFERER']);
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
    
?>