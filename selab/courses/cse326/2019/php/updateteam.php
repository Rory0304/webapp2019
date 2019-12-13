<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "1111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->exec("set names utf8");

        #studentNum
        $id = $_SESSION['ID'];
        // var_dump($id);
        #class
        $check = "SELECT * FROM member WHERE studentNum = $id";
        $rows = $db->query($check);
        $results = $rows->fetchAll();
        foreach($results as $result) {
           $class = $result["class"];
        //    var_dump($class);
        }
        // $class = $results[0]['class'];
        // $class = $db->query($class);
        

        $teamname = $_POST['teamname'];
        var_dump($teamname);
        $db->exec("insert into team values (NULL,$class,$teamname,NULL)");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
