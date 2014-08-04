<html>
<head>
	<meta name="viewport" content="width=device-width"/>
<title>
Staff Login
</title>
	<link rel="stylesheet" href="login.css" />
	<script src="jquery.js"></script>
	<script src="prevalid.js"></script>
</head>

<body>
	<div id='login_form'>
		<form method='post' action="<?echo $_SERVER['PHP_SELF']?>">
			<div id='errmsg'>
				<? if(isset($err_msg)){ echo "$err_msg";} ?>
			</div>
			<input id='user_id' name='user_id' type='text'  placeholder="Staff ID"/>
			<input id='user_pw' name='user_pw' type='password'  placeholder="Password"/>
			<input id='login_btn' name='login_btn' type='submit' value='Login'/>
		</form>
	</div>
</body>
</html>