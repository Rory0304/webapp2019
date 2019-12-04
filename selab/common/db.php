<?php
//$dbHost = "52.78.148.203";
$dbHost = "localhost";
$dbName = "test";
$dbUser = "root";
$dbPass = "root";

//$db = new PDO("mysql:host={$dbHost};dbname={$dbName}; port=3306", $dbUser, $dbPass);
$db = new PDO("mysql:host={$dbHost};dbname={$dbName};", $dbUser, $dbPass);
$db->exec("set names utf8");

?>
