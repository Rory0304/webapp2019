<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta charset="utf-8" />
	<title>Software Engineering Lab - Courses: Web Application Development</title>
	<link rel="stylesheet" href="../../../common/styles/reset-1.6.1.css" type="text/css" />
	<link rel="stylesheet" href="../../../common/styles/jquery-ui.css" type="text/css" />
	<link rel="stylesheet" href="../../../common/styles/common.css" type="text/css" />
	<link rel="shortcut icon" href="../../../common/images/SelabFavicon.png" type="image/png">
	<link rel="stylesheet" href="../../styles/course-home.css" type="text/css" />
	<link rel="stylesheet" href="../../styles/card.css" type="text/css" />

	<script type="text/javascript" src="../../../common/scripts/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="../../../common/scripts/jquery-ui.js"></script>
	<script type="text/javascript" src="../../../common/scripts/buffered-keyup.js"></script>
	<script type="text/javascript" src="../../../common/scripts/common.js"></script>
	<!-- <script type="text/javascript" src="../../scripts/course-page.js"></script> -->
	<script type="text/javascript" src="../../scripts/team.js"></script>

</head>

<body>
	<header role="banner" class="header">
		<div class="container">
			<nav>
				<div id="logo" class="pull-left">
					<a href="../../../index.html"><img src="../../../common/images/selab_logo_S.png" alt="logo"/></a>
				</div>

				<a id="setting" class="pull-right" href="javascript:settingview();"> <img src="../../../common/images/color_lens-24px.svg" alt="customize"> </a>

				<div role="login" class="pull-right">
					<a href="../../../login/index4e7d.html?source=/index.php"> <img src="../../../common/images/vpn_key-24px.svg" alt="login"> </a>
				</div>

				<a id="contact" href="../../../contact/index.html" class='pull-right'> <img src="../../../common/images/phone-24px.svg" alt="contact"> </a>
			</nav>
			<div id="menu">
				<ul class="inline-list pull-left">
					<li><a href="../../../notice/index.html" >NOTICE</a></li>
					<li><a href="../../../members/index.html" >MEMBERS</a></li>
					<li><a href="../../../research/index.html" >RESEARCH</a></li>
					<li><a href="../../../publications/index.html" >PUBLICATIONS</a></li>
					<li><a href="../../../courses/index.html" class="selected" >COURSES</a></li>
					<li><a href="../../../gallery/index.html" >GALLERY</a></li>
				</ul>
			</div>
		</div>
	</header>

	<div id="settingtab">
		<a href="javascript:void(0)" class="closebtn" onclick="closesetting()">&times;</a>
		<div id="sample">
			<div id="samplePage">
				<div id="SampleH">
					<div id="SampleH1">
						<p>[lab];</p>
					</div>
					<div id="SampleH2">
						<p>notice members research ...</p>
					</div>
				</div>
				<div id="sampleC">
					<h1>sample</h1>
					<p>This is sample to help your costomizing. I hope you satisfied whith our wepsite.</p>
				</div>
			</div>
		</div>

		<div id="option">
			<div id="font">
				<p>Navigation</p>
				<input type="radio" name="nav" value="top" checked="checked" /> Top
				<input type="radio" name="nav" value="left" /> Left
				<input type="radio" name="nav" value="right" /> Right
				<p>Font</p>
				<select id="fontselect" name="selectFontFamily" onchange="fontupdate('fontstyle')">
					<option style="font-family:Serif" value="serif"> Serif </option>
					<option style="font-family:Tahoma" value="Tahoma"> Tahoma </option>
					<option style="font-family:Arial" value="Arial"> Arial </option>
					<option style="font-family:Monospace" value="Monospace">Monospace</option>
					<option style="font-family:Roboto" value="Roboto">Roboto</option>
					<option style="font-family:Times New Roman" value="Times New Roman">Times New Roman</option>
					<option style="font-family:Garamond" value="Garamond">Garamond</option>
					<option style="font-family:Comic Sans MS" value="Comic Sans MS">Comic Sans MS</option>
					<option style="font-family:Courier" value="Courier">Courier</option>
					<option style="font-family:Impact" value="Impact">Impact</option>
				</select>
				<p>Font Size</p>
				<select id="fontsizeSlect" name="selectfontsize" onchange="fontupdate('sizeTC')">
					<option style="font-size: 15px">Small</option>
					<option style="font-size: 20px" selected>Normal</option>
					<option style="font-size: 25px">Medium</option>
					<option style="font-size: 30px">Large</option>
					<option style="font-size: 35px">Huge</option>
				</select>
			</div>
			<div id="background">
				<p>Background</p>
				<select id="backselect" name="selectBackground" onchange="backupdate();">
					<option value="1"> Theme1 </option>
					<option value="2"> Theme2</option>
					<option value="3"> Theme3 </option>
					<option value="4"> Theme4 </option>
					<option value="5"> Theme5 </option>
				</select>
			</div>
		</div>
	</div>

	<main role="main">
		<div id="sideNav">
			<div class="nav-list-left">
				<div id="sideLogo"><a href="../../../index.html"><img src="../../../common/images/selab_logo_S.png" /></a></div>
				<a id="sideSetting" href="javascript:settingview();"> <img src="../../../common/images/color_lens-24px.svg" alt="customize"> </a>
				<div role="login">
					<a href="../../../login/index4e7d.html?source=/index.php"> <img src="../../../common/images/vpn_key-24px.svg" alt="login"> </a>
				</div>
				<a id="sideContact" href="../../../contact/index.html"> <img src="../../../common/images/phone-24px.svg" alt="contact"> </a>
			</div>
			<div class="nav-list-right">
				<a href="../notice/index.html" >NOTICE</a>
				<a href="../members/index.html" >MEMBERS</a>
				<a href="../research/index.html" >RESEARCH</a>
				<a href="../publications/index.html" >PUBLICATIONS</a>
				<a href="../courses/index.html" class="selected" >COURSES</a>
				<a href="../gallery/index.html" >GALLERY</a>
			</div>
		</div>

		<div class="main-container">
			<div class="contents">
				<h1>Web Application Development</h1>
				<div id="tab">
					<div class="deactive first-tab" data-tab="main"> <a href="index.html">Home</a></div>
					<div class="deactive"> <a href="slides.html">Slides</a></div>
					<div class="last-tab">Team</div>
				</div>
				<div id="hl"></div>
				<div id="team">
					<div class="teamMenu">
						<select id="by" class="pull-left" onchange="sorting();">
							<option value="all" selected="selected"> all </option>
							<option value="byTeam"> by team</option>
							<option value="byLang"> by lang </option>
						</select>
						<a class="pull-right" href="message.php"> <img src="../../images/mail-24px.svg" alt="message"> </a>
						<a class="pull-right" href="myteam.php"> <img src="../../images/supervised_user_circle-24px.svg" alt="myTeam"> </a>
						<a class="pull-right" href="mypage.html"> <img src="../../images/account_circle-24px.svg" alt="myPage"> </a>
					</div>
					
				</div>
			</div>
		</div>
	</main>

<footer role="contentinfo">
	<div class="container">
		<p>COPYRIGHT 2019 SELAB, ALL RIGHTS RESERVED. COMPUTER SCIENECE AND ENGINEERING, HANYANG UNIV. LOCATION: ENGINEERING BUILDING #3, ROOM 421. T +82-31-400-4754</p>
	</div>
</footer>
</body>
</html>