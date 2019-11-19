<!DOCTYPE html>
<html lang="en">
	<head>
		<title>login</title>
		<meta charset="utf-8" />
  </head>

	<body>
    <?php
    try {
      $db = new PDO("mysql:dbname=user;host=localhost","test","test"); //프로젝트에는 실제 mysql의 id, password 입력
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $id = $_POST['id'];
      $pw = $_POST['password'];
      $check = "SELECT * FROM user WHERE id = '$id'";
      $rows = $db->query($check);
			$results = $rows->fetchAll();
			foreach($results as $result) {
				if ($result[id] == $id)
					if ($result[password] == $pw)
						Header("Location:index.html"); //프로젝트에는 실제 index.html 경로를 입력
					else
						Header("Location:index4e7d.html"); // 위와 마찬가지
			}
			else
				Header("Location:index4e7d.html"); // 위와 마찬가지
    }
    catch (PDOException $ex) {
    ?>
    <p>Sorry, a database error occurred. Please try again later.</p>
    <p>(Error details: <?= $ex->getMessage() ?>)</p>
    <?php
    }
    ?>
  </body>
</html>
