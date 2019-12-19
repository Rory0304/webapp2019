<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "1111");
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

        echo "<pre>";
        var_dump($q_mynum);
        var_dump($q_receiver);
        var_dump($q_day);
        echo "</pre>";
        
        $db->exec("DELETE FROM message
                    WHERE 
                    sender = $q_mynum and
                    receiver = $q_receiver and
                    sendDay = $q_day");

        header("Location: ../team.html");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
