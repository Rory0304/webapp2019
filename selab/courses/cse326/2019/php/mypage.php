<?php

  include "../../../../common/db.php";

  // 로그인된 계정(학생)의 학번
  session_start();
  $num = $_SESSION["ID"];

  if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['lang'])){
    $lang = $_POST['lang'];
    if (isset($_POST['etc'])) {
      $etc = $_POST['etc'];
      $update = $db->query("UPDATE lang SET etc = '$etc' WHERE studentNum='$num'");
    }
    for ($i=0; $i<count($langList); $i++) {
      if (in_array($langList[$i], $lang)) {
        $updateQ = $db->query("UPDATE lang SET $langList[$i] = 1 WHERE studentNum='$num'");
      }
      else {
        $updateQ = $db->query("UPDATE lang SET $langList[$i] = 0 WHERE studentNum='$num'");
      }
    }
  }

  echo "<script>location.replace('../mypage.html')</script>";
?>
