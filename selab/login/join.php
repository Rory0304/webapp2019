<?php

    function initailizecustom($num, $password) {
        $custom_db = new PDO("mysql:host=54.180.112.225;dbname=custom;port=3306", "root", "11111111");
        $custom_db->exec("set names utf8");

        $custom_db->exec("insert into main_page values ('$num',NULL,NULL,NULL,NULL)");
        $custom_db->exec("insert into menu_page values ('$num',NULL,NULL,NULL,NULL,NULL)");
        $custom_db->exec("insert into slide values ('$num',1,NULL,NULL,NULL,NULL)");
        $custom_db->exec("insert into user values ('$num','$password')");
    }

    try {
        include "../common/db.php";

        if($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['name']) && isset($_POST['num']) && isset($_POST['class'])) {
            $name = $_POST['name'];
            $password = $_POST['password'];
            $num = $_POST['num'];
            $class = $_POST['class'];

            $overlapQ = $db-> query("select * from member where studentNum = '$num'");
            if ($overlapQ->rowCount() > 0) { echo "<script>location.replace('join.html')</script>"; }
            $db-> exec("insert into member (studentNum,class,teamname,name) values ('$num',$class,NULL,'$name')");
            $a = "insert into lang (studentNum,html,css,js,jquery,php,db,ajax,xml,c,cplusplus,java,python,ruby,Django,Perl,etc) values ('$num',0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,null)";
            $db->exec($a);

            initailizecustom($num, $password);
            echo "<script>location.replace('index4e7d.html')</script>";
        }

    } catch (PDOException $ex) {
?>
		<p>Sorry, a database error occurred. Please try again later.</p>
		<p>(Error details: <?= $ex->getMessage() ?>)</p>
<?php
	}
?>
