<?php
//$dbHost = "52.78.148.203";
$dbHost = "54.180.112.225";
$dbName = "team";
$dbUser = "root";
$dbPass = "1111";
// $db = new PDO("mysql:dbname=custom;host=54.180.112.225;port=3306","root","1111"); //프로젝트에는 실제 mysql의 id, password 입력
//$db = new PDO("mysql:host={$dbHost};dbname={$dbName}; port=3306", $dbUser, $dbPass);
$db = new PDO("mysql:host={$dbHost};dbname={$dbName};port=3306", $dbUser, $dbPass);
$db->exec("set names utf8");

$langList = array("html","css","js","jquery","php","db","ajax","xml","c","c++","java","python","ruby","Django","Perl");
$str = "select * from lang as l join member as m on l.studentNum = m.studentNum";
?>
