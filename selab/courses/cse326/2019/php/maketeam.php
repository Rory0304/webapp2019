<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "1111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // $db->exec("set names utf8");

        #studentNum
        $id = $_SESSION['ID'];
        #class
        $check = "SELECT * FROM member WHERE studentNum = $id";
        $rows = $db->query($check);
        $results = $rows->fetchAll();
        foreach($results as $result) {
           $class = $result["class"];
        }
        #teamname
        $teamname = $_POST['teamname'];
        $teamname = $db->quote($teamname);
        #make team!
        $db->exec("insert into team values (NULL,$class,$teamname,NULL)");
        #get team num
        // $check = "SELECT * FROM team WHERE class=$class and name=$teamname";
        // $rows = $db->query($check);
        // $results = $rows->fetchAll();
        // foreach($results as $result) {
        //    $teamNum = $result["teamNum"];
        $teamNum = 7;
        $teamNum = $db->quote($teamNum);
        var_dump($id);
        // $id = $db->quote($id);
        // }

        $db->exec("UPDATE lang SET teamNum=$teamNum Where studentNum=$id");
        
        
        // header("Location: ../team.html");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
