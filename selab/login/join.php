<?php

  function initailizecustom($num, $password) {
    $custom_db = new PDO("mysql:host=54.180.112.225;dbname=custom;port=3306", "root", "1111");
    $custom_db->exec("set names utf8");

    $custom_db->exec("insert into main_page values ('$num',NULL,NULL,NULL,NULL)");
    $custom_db->exec("insert into menu_page values ('$num',NULL,NULL,NULL,NULL,NULL)");
    $custom_db->exec("insert into slide values ('$num',1,NULL,NULL,NULL,NULL)");
    $custom_db->exec("insert into user values ('$num','$password')");
  }

  include "../common/db.php";

  if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['name']) && isset($_POST['num']) && isset($_POST['class'])){
    $name = $_POST['name'];
    $password = $_POST['password'];
    $num = $_POST['num'];
    $class = $_POST['class'];

    $db-> exec("insert into member (studentNum,class,name) values ('$num',$class,'$name')");
    $a = "insert into lang (studentNum,teamNum,html,css,js,jquery,php,db,ajax,xml,c,cplusplus,java,python,ruby,Django,Perl,etc) values ('$num',null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null)";
    $db->exec($a);

    initailizecustom($num, $password);
    echo "<script>location.replace('index4e7d.html')</script>";
} 
?>
