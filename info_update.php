<?
session_start();
if(@$_SESSION['auth'] != "staff"){
	header("Location: login.php");
	exit();
}

	include("dac.inc.php");		// db access info
	$cnct = mysqli_connect($host,$dbusr,$dbpw,$dbname);
	mysqli_query($cnct,"SET NAMES 'UTF8'");

	$id_in=$_SESSION['user_id'];
	$tbl='staff';	
		
	$key_values = "";
	foreach ($_POST as $key => $value)
		$key_values .= $key."='".$value."',";
		
	$key_values = rtrim($key_values,",");

	$qry = "UPDATE $tbl SET $key_values WHERE id='$id_in'";
	mysqli_query($cnct,$qry);

	$_SESSION['msg']='Successfully Updated';
	header("Location: index.php");
?>