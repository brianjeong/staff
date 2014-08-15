<?php
session_start();
if(@$_SESSION['auth'] != "staff"){
	$_SESSION['back'] =  $_SERVER['PHP_SELF'];
	header("Location: login.php");
	exit();
}

require_once("inc/dac.inc.php");		// db access info
$cnct = mysqli_connect($host,$dbusr,$dbpw,$dbname);
mysqli_query($cnct,"SET NAMES 'UTF8'");

$id_in=$_SESSION['user_id'];
$pw_in=$_SESSION['user_pw'];

$tbl='staff';
$qry = "SELECT * FROM $tbl WHERE id='$id_in' AND pw='$pw_in'";
$rslt = mysqli_query($cnct,$qry);
$row = mysqli_fetch_assoc($rslt);

?>

<html>
<head>
</head>
<body>
	<div>
		<form method="post" action="info_update.php">
			<input type="text" name="first_name" value = "<?echo $row['first_name']; ?>" placeholder="First Name" />
			<input type="text" name='last_name' value = "<?echo $row['last_name']; ?>" placeholder="Last Name" />
			<input type="text" name='korean_name' value = "<?echo $row['korean_name']; ?>" placeholder="Korean Name" />
			<input type="text" name='school_email' value = "<?echo $row['school_email']; ?>" placeholder="School Email" />
			<input type="text" name='private_email' value = "<?echo $row['private_email']; ?>" placeholder="Private Email" />
			<input type="text" name='ssn' value = "<?echo $row['ssn']; ?>" placeholder="SSN" />
			<input type="text" name='address_street' value = "<?echo $row['address_street']; ?>" placeholder="Street" />
			<input type="text" name='address_city' value = "<?echo $row['address_city']; ?>" placeholder="City" />
			<input type="text" name='address_state' value = "<?echo $row['address_state']; ?>" placeholder="State" />
			<input type="text" name='address_zip' value = "<?echo $row['address_zip']; ?>" placeholder="Zip" />
			<input type="text" name='address_country'value = "<?echo $row['address_country']; ?>"  placeholder="Country" />
			<input type="submit" value="Update Info" />
		</form>
	</div>

	<div>
		<form method="post" action="pw_reset.php">
			<input type="password" name="new_pw" placeholder="New Password" />
			<input type="password" placeholder="Confirm Password" />
			<input type="submit" value="Reset Password" />
		</form>
	</div>
</body>
</html>