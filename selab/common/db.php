<?php
    $dbHost = "54.180.112.225";
    $dbName = "team";
    $dbUser = "root";
    $dbPass = "11111111";

    $db = new PDO("mysql:host={$dbHost};dbname={$dbName};port=3306", $dbUser, $dbPass);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->query("set session character_set_connection=utf8;");
    $db->query("set session character_set_results=utf8;");
    $db->query("set session character_set_client=utf8;");

    $langList = array("html","css","js","jquery","php","db","ajax","xml","c","cplusplus","java","python","ruby","Django","Perl");
    $str = "select * from lang as l join member as m on l.studentNum = m.studentNum";

function recommend($m_kind,$class) {
  $arr = array();
  global $str, $db;
  $studentQuery = $db->query($str . " where m.class= '$class'");
  foreach($studentQuery as $s) {
    $s_kind = score($s);
    if ($s_kind != $m_kind) {
      array_push($arr, $s["studentNum"]);
    }
  }
  return $arr;
}

function score($s) {
    global $langList;
    $s_front = 0;
    $s_back = 0;
    $s_server = 0;
    $s_kind = "front";

    for($i=0; $i<count($langList); $i++) {
        if ($s[$i+1] == 1) {
          if (in_array($i, array(0,1,2,3))) {
            $s_front = $s_front + 1;
          }
          if (in_array($i, array(2,3,6,7,8,9,10,11,12,14))) {
            $s_back += 1;
          }
          if (in_array($i, array(4,5,6,7,13))) {
            $s_server += 1;
          }
        }
    }
    if ($s_back != 0 && $s_back >= $s_front && $s_back > $s_server) {
      $s_kind = "back";
    }
    else if ($s_server != 0 && $s_server >= $s_front && $s_server >= $s_back) {
      $s_kind = "server";
    }
    return $s_kind;
}

function conlog($data){
  echo "<script>console.log('" . $data . "');</script>";
}
?>
