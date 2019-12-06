<?php

  include "../../../common/db.php";

  // 로그인된 계정(학생)의 아이디
  $id = "id2";

  if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['lang'])){
    $lang = $_POST['lang'];
    for ($i=0; $i<count($langList); $i++) {
      if (in_array($langList[$i], $lang)) {
        $updayeQ = $db->query("UPDATE students SET $langList[$i] = 1 WHERE id='$id'");
      }
      else {
        $updayeQ = $db->query("UPDATE students SET $langList[$i] = 0 WHERE id='$id'");
      }
    }
  }

  echo "<script>location.replace('mypage.html')</script>";
?>
