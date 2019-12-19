<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "11111111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->query("set session character_set_connection=utf8;");
        $db->query("set session character_set_results=utf8;");
        $db->query("set session character_set_client=utf8;");

        $mynum = $_POST['mynum'];
        $sender = $_POST['sender'];
        $day = $_POST['day'];
        $q_mynum = $db->quote($mynum);
        $q_sender = $db->quote($sender);
        $q_day = $db->quote($day);

        echo "<pre>";
        var_dump($q_mynum);
        var_dump($q_sender);
        var_dump($q_day);
        echo "</pre>";

        echo "<pre>";
        var_dump($q_sender);
        echo "</pre>";

        #나의 teamname
        $check = "SELECT * FROM member WHERE studentNum = $q_mynum";
        $rows = $db->query($check);
        $results = $rows->fetchAll();
        if ($results[0]["teamname"] != NULL){
            $myteam = $results[0]["teamname"];
            $q_myteam = $db->quote($myteam);
            echo "<pre>";
            var_dump($q_myteam);
            echo "</pre>";
            #나의 team member 가 나뿐이면 팀 삭제
            $check = "SELECT * FROM member WHERE teamname = $q_myteam";
            $rows = $db->query($check);
            $results = $rows->fetchAll();
            if (count($results) == 1) {
                $db->exec("DELETE FROM team
                        WHERE
                        teamname = $q_myteam");
            }
        }

        $db->exec("UPDATE member SET
                    teamname=$q_sender
                    WHERE studentNum = $q_mynum");

        $db->exec("DELETE FROM message
                    WHERE
                    sender = $q_sender and
                    receiver = $q_mynum and
                    sendDay = $q_day");

        header("Location: ../team.html");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
