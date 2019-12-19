<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "11111111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->query("set session character_set_connection=utf8;");
        $db->query("set session character_set_results=utf8;");
        $db->query("set session character_set_client=utf8;");

        $mynum = $_POST['mynum'];
        $receiver = $_POST['receiver'];
        $day = $_POST['day'];
        $q_mynum = $db->quote($mynum);
        $q_receiver = $db->quote($receiver);
        $q_day = $db->quote($day);

        $teams = "SELECT * FROM member WHERE studentNum = $mynum";
        $rows = $db->query($teams);
        $results = $rows->fetchAll();
        $teamname = $results[0]["teamname"];
        $q_teamname = $db->quote($teamname);

        echo "<pre>";
        var_dump($q_mynum);
        var_dump($q_receiver);
        var_dump($q_day);
        var_dump($q_teamname);
        echo "</pre>";

        $db->exec("DELETE FROM message
                    WHERE
                    sender = $q_teamname and
                    receiver = $q_receiver and
                    sendDay = $q_day");

        header("Location: ../message.php");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
