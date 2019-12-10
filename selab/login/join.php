<?php
include "../common/db.php";

if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['name']) && isset($_POST['num']) && isset($_POST['class'])){
  $name = $_POST['name'];
  $num = $_POST['num'];
  $class = $_POST['class'];

  $insertQ = $db-> query("insert into member (studentNum,class,name) values ('$num',$class,'$name')");
  $a = "insert into lang (studentNum,teamNum,html,css,js,jquery,php,db,ajax,xml,c,cplusplus,java,python,ruby,Django,Perl,etc) values ('$num',null,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null)";
  $insert = $db->query($a);

  echo "<script>location.replace('index4e7d.html')</script>";
} ?>
