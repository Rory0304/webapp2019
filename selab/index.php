<!DOCTYPE html>
<html>

<!-- Mirrored from selab.hanyang.ac.kr/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Nov 2019 07:38:09 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=UTF-8" /><!-- /Added by HTTrack -->
<head>
	<meta charset="utf-8" />
	<title>Software Engineering Lab - Home</title>
	<!--[if IE]>
	<script src="https://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->

	<!-- <link rel="stylesheet" href="common/styles/reset-1.6.1.css" type="text/css" /> -->
	<!-- <link rel="stylesheet" href="common/styles/jquery-ui.css" type="text/css" /> -->
	<!-- <link rel="stylesheet" href="../common/styles/font-awesome-4.0.3/css/font-awesome.min.css" type="text/css" /> -->
	<link rel="stylesheet" href="common/styles/common.css" type="text/css" />
	<link rel="shortcut icon" href="common/images/SelabFavicon.png" type="image/png">
	<link rel="stylesheet" href="home/styles/home.css" type="text/css" />
	<link rel="stylesheet" href="home/styles/theme3.css" type="text/css" />
 
	<script type="text/javascript" src="common/scripts/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="common/scripts/jquery-ui.js"></script>
	<script type="text/javascript" src="common/scripts/buffered-keyup.js"></script>
	<script type="text/javascript" src="common/scripts/common.js"></script>
	<script type="text/javascript" src="home/scripts/home.js"></script>
	<script type="text/javascript" src="home/scripts/unslider.js"></script>

</head>

<body>
	<?php
		session_start();
		$id = $_SESSION['ID'];
		print($_SESSION['ID']);
		?>
		<script type="text/javascript"> 
			alert("5678");
			alert("<?php echo $id; ?>");
		</script>
		<?php
	?>
	
	<header role="banner">
		<div class="container">
			<nav role="navigation">
				<div id="logo" class="pull-left"><a href="index.html"><img src="common/images/selab_logo_S.png" /></a></div>
				<!-- <ul id="menu" class="inline-list pull-left">
					<li class="pull-left"><a href="notice/index.html" >NOTICE</a></li>
					<li class="pull-left"><a href="members/index.html" >MEMBERS</a></li>
					<li class="pull-left"><a href="research/index.html" >RESEARCH</a></li>
					<li class="pull-left"><a href="publications/index.html" >PUBLICATIONS</a></li>
					<li class="pull-left"><a href="courses/index.html" >COURSES</a></li>
					<li class="pull-left"><a href="gallery/index.html" >GALLERY</a></li>
				</ul> -->
				<div id="setting" href="" class='pull-right'>
					<input type="button" class="setting" value="SETTING" onclick="settingShow()" />
					<div class="setting-tab">
						<input type="button" value="close" onclick="settingClose()" />
						<p>Navigation</p>
						<input type="radio" name="nav" value="top" checked="checked" /> Top
						<input type="radio" name="nav" value="left" /> Left
						<input type="radio" name="nav" value="right" /> Right
						<p>Font</p>
						<select id="fontselect" name="selectFontFamily" onchange="fontupdate(1);">
					  <option style="font-family:Serif" value="serif"> Serif </option><option style="font-family:Tahoma" value="Tahoma"> Tahoma </option>
					  <option style="font-family:Arial" value="Arial"> Arial </option><option style="font-family:Monospace" value="Monospace">Monospace</option>
					  <option style="font-family:Roboto" value="Roboto">Roboto</option><option style="font-family:Times New Roman" value="Times New Roman">Times New Roman</option>
					  <option style="font-family:Garamond" value="Garamond">Garamond</option><option style="font-family:Comic Sans MS" value="Comic Sans MS">Comic Sans MS</option>
					  <option style="font-family:Courier" value="Courier">Courier</option><option style="font-family:Impact" value="Impact">Impact</otpion></select>
					  <p>Font Size</p>
					  <select id="fontsizeSlect" name="selectfontsize" onchange="fontupdate(2);">
					  <option>10pt</option><option>12pt</option><option>14pt</option><option>16pt</option><option>18pt</option>
					  <option>20pt</option><option>22pt</option><option>24pt</option><option>26pt</option><option>28pt</option>
					  <option>30pt</option></select>
					  <p>Title Color</p>
					  <input type="text" id="custom" />
					  <p>Contents Color</p>
					  <input type="text" id="custom1" />
					</div>
				</div>
				<?php
				
				if (isset($_SESSION['ID']) && isset($_SESSION['PW'])) { ?>
					<div role="login" class="pull-right">
						<a href="login/index4e7d.html?source=/index.php">LOGOUT</a>
					</div> <?php }
				else { ?>
				<div role="login" class="pull-right">
					<a href="login/index4e7d.html?source=/index.php">LOGIN</a>
				</div> <?php } ?>
				<a id="contact" href="contact/index.html" class='pull-right'>CONTACT</a>
			</nav>
		</div>
	</header>

	<main role="main">
		<div class="container">
			<!-- <div class="contents"> -->
				<!-- <div class="banner">
					<ul>
						<li id="img1"></li>
						<li id="img2"></li>
						<li id="img3"></li>
					</ul>
				</div> -->
				<!-- <div id="notices" class="pull-left">
					<h2><a href="notice/index.html">NOTICE</a></h2>
					<ul id="board">
					</ul>
				</div>
				<div id="courses" class="pull-left">
					<h2>COURSES</h2>
					<ul>
						<li><a href="courses/cse326/2019/index.html">CSE326 Web Application Development</a></li>
					</ul>
				</div> -->
      <div class="menu">
				<div id = 'ind'><a href="index.html"><img src="common/images/selab_logo_S_2.png" /></a></div>
        <a id='not' href="notice/index.html">NOTICE</a>
				<a id='mem' href="members/index.html">MEMBERS</a>
				<a id='res' href="research/index.html" >RESEARCH</a>
  			<a id='pub' href="publications/index.html" >PUBLICATIONS</a>
  			<a id='cou' href="courses/index.html" >COURSES</a>
  			<a id='gal' href="gallery/index.html" >GALLERY</a>
      </div>
			<!-- </div> -->
		</div>
	</main>

	<footer role="contentinfo">
		<div class="container">
			<p>COPYRIGHT 2014 SELAB, ALL RIGHTS RESERVED. COMPUTER SCIENECE AND ENGINEERING, HANYANG UNIV. LOCATION: ENGINEERING BUILDING #3, ROOM 421. T +82-31-400-4754</p>
		</div>
	</footer>
	
</body>

<!-- Mirrored from selab.hanyang.ac.kr/ by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 01 Nov 2019 07:38:16 GMT -->
</html>