<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "11111111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->query("set session character_set_connection=utf8;");
        $db->query("set session character_set_results=utf8;");
        $db->query("set session character_set_client=utf8;");
        // $db->exec("set names utf8");


        $id = $_SESSION['ID'];

        $check = "SELECT * FROM member WHERE studentNum = $id";
        $rows = $db->query($check);
        $results = $rows->fetchAll();
        foreach($results as $result) {
           $class = $result["class"];
        }

        $teamname = $_POST['teamname'];
        $teamname = $db->quote($teamname);

        $checkQ = $db->query("SELECT * FROM team WHERE name = $teamname");
        if ($checkQ ->rowCount() > 0) {
          echo "<script>location.replace('../myteam.php')</script>";
        }

        $db->exec("insert into team values ($teamname,$class,NULL)");
        $db->exec("UPDATE member SET teamname=$teamname WHERE studentNum = $id");

        header("Location: ../myteam.php");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
