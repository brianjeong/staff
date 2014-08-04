<?php
session_start();
if(@$_SESSION['auth'] != "staff"){
	$_SESSION['back'] =  $_SERVER['PHP_SELF'];
	header("Location: login.php");
	exit();
}
?>

<html>
<head>
	<meta name="viewport" content="width=device-width"/>
	<link rel="stylesheet" href="index.css" />	
	<script src="jquery.js"></script>
	<script src="module_basic.js"></script>
</head>
<body>
	<div id='status_pane'>
		<div id='welcome'>
			Welcome, <? echo $_SESSION['user_name']; ?> !
		</div>
		<div id='id_chk'>
			<? echo $_SESSION['id_chk']; ?>
		</div>
		<div id='msg'>
			<? if(isset($_SESSION['msg'])){
				$msg=$_SESSION['msg'];
				echo "$msg";
				}
				$_SESSION['msg']='';
			?>
		</div>		
		<div id='my_account'>
			My Account
		</div>
		<div id='logout'>
			Logout
		</div>
	</div>
	
	<div id='module_pane'>
	</div>
		
	<div id='extra_pane'>
	</div>

	<div id="content_pane">
	</div>

</body>
</html>