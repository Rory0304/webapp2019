<?php
	session_start();



	function loadSetting($id) {
		$db = new PDO("mysql:dbname=custom;host=54.180.112.225;port=3306","root","11111111"); // passwoar, ip 
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$check_slide = "SELECT * FROM slide WHERE id = '$id'";
		$slide_rows = $db->query($check_slide);
		if (!empty($check_slide)) {
			foreach ($slide_rows as $row) {
				$_SESSION['slide_1by1'] = $row['1by1'];
				$_SESSION['slide_font'] = $row['font'];
				$_SESSION['slide_fontsize'] = $row['fontsize'];
				$_SESSION['slide_t_color'] = $row['t_color'];
				$_SESSION['slide_c_color'] = $row['c_color'];
			}
		}

		$check_main_page = "SELECT * FROM main_page WHERE id = '$id'";
		$main_page_rows = $db->query($check_main_page);
		if (!empty($check_main_page)) {
			foreach ($main_page_rows as $row) {
				$_SESSION['main_menuOrder'] = $row['menuOrder'];
				$_SESSION['main_font'] = $row['font'];
				$_SESSION['main_fontsize'] = $row['fontsize'];
				$_SESSION['main_background'] = $row['background'];
			}
		}

		$check_menu_page = "SELECT * FROM menu_page WHERE id = '$id'";
		$menu_page_rows = $db->query($check_menu_page);
		if (!empty($check_menu_page)) {
			foreach ($menu_page_rows as $row) {
				$_SESSION['menu_menuOrder'] = $row['menuOrder'];
				$_SESSION['menu_nav'] = $row['nav'];
				$_SESSION['menu_font'] = $row['font'];
				$_SESSION['menu_fontsize'] = $row['fontsize'];
				$_SESSION['menu_background'] = $row['background'];
			}
		}

	}

?>


<?php

	try {
		$db = new PDO("mysql:dbname=custom;host=54.180.112.225;port=3306","root","11111111"); //프로젝트에는 실제 mysql의 id, password 입력
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$id = $_POST['id'];
		$pw = $_POST['password'];
		$check = "SELECT * FROM user WHERE id = '$id'";
		$rows = $db->query($check);
		$results = $rows->fetchAll();

		$bool = FALSE;
		foreach($results as $result) {
			if ($result["id"] == $id && $result["password"] == $pw) {
				$bool = TRUE;
			}
		}

		if($bool == true){
				$_SESSION['is_logged'] = 'YES';
				$_SESSION['ID']=$id;
				//setcookie('user_id',$id,time()+(86400*30),'/');

				loadSetting($id);
				//Print_r($_SESSION);
				Header("Location:../index.html"); //프로젝트에는 실제 index.html 경로를 입력

		}else{
				$_SESSION['is_logged'] = 'NO';
				//$_SESSION['errorMessage'] = "WARNING: Worng Password.";
				Header("Location:index4e7d.html");
		}

	}
	catch (PDOException $ex) {
?>
		<p>Sorry, a database error occurred. Please try again later.</p>
		<p>(Error details: <?= $ex->getMessage() ?>)</p>
<?php
	}
?>
