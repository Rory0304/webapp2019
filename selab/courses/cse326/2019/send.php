<?php
include "../../../common/db.php";

$today = date("Y-m-d");

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['sender']) && isset($_POST['receiver'])){
  $sender = $_POST['sender'];
  $receiver = $_POST['receiver'];
  $insertQ = $db->query("insert into message (sender,receiver,sendDay) values ('$sender','$receiver','$today')");

  echo "<script>location.replace('team.html')</script>";
}
 ?>
