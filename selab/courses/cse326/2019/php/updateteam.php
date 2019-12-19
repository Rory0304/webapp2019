<?php
    session_start();

    try {
        $db = new PDO("mysql:dbname=team; host=54.180.112.225; port=3306", "root", "11111111");
        $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $db->query("set session character_set_connection=utf8;");
        $db->query("set session character_set_results=utf8;");
        $db->query("set session character_set_client=utf8;");

        $exname = $_POST['exname'];
        $teamname = $_POST['teamname'];
        $github = $_POST['github'];
        $q_exname = $db->quote($exname);
        $q_teamname = $db->quote($teamname);
        $q_github = $db->quote($github);

        $db->exec("UPDATE team SET 
                    name=$q_teamname,
                    github=$q_github
                    WHERE name = $q_exname");

        $db->exec("UPDATE member SET 
                    teamname=$q_teamname
                    WHERE teamname = $q_exname");

        header("Location: ../team.html");
    } catch (PDOException $ex) {
    ?>
        <p>Sorry, a database error occurred. Please try again later.</p>
        <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
?>
