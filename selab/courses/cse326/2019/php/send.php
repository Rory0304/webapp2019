<?php
    include "../../../../common/db.php";

    date_default_timezone_set("Asia/Seoul");
    $today = date("Y-m-d");

    if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['sender']) && isset($_POST['receiver'])){
        $sender = $_POST['sender'];
        $receiver = $_POST['receiver'];

        if ($sender == $receiver) { echo "<script>location.replace('../team.html')</script>"; }

        $checkQ = $db->query("select * from message where sender = '$sender' and receiver = '$receiver'");
        if ($checkQ ->rowCount() > 0) {
          $db->exec("delete from message where sender = '$sender' and receiver = '$receiver'");
        }

        $db->exec("insert into message (sender,receiver,sendDay) values ('$sender','$receiver','$today')");

        echo "<script>location.replace('../team.html')</script>";
    }
 ?>
