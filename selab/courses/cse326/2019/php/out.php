<?php
include "../../../../common/db.php";
session_start();

$num = $_SESSION["ID"];

$teamQ = $db->query("select * from member where studentNum='$num'");
$teamR = $teamQ->fetch();
$team = $teamR["teamname"];

$db->exec("UPDATE member SET teamname = null WHERE studentNum='$num'");

$checkQ = $db->query("select * from member where teamname = '$team'");
if ($checkQ ->rowCount() <= 0) {
  $db->exec("delete from team where name = '$team'");
  $db->exec("delete from message where sender = '$team'");

}

echo "<script>location.replace('../myteam.php')</script>";
?>
