<?
session_start();
if(@$_SESSION['auth'] != "staff"){
	header("Location: login.php");
	exit();
}

	require_once("inc/dac.inc.php");		// db access info
	$cnct = mysqli_connect($host,$dbusr,$dbpw,$dbname);
	
	$id_in=$_SESSION['user_id'];
	$new_pw=$_POST['new_pw'];
	
	$tbl='staff';
	$qry = "UPDATE $tbl SET pw='$new_pw' WHERE id='$id_in'";
	$rslt = mysqli_query($cnct,$qry);

	$_SESSION['user_pw'] = $new_pw;
	$_SESSION['msg']='Successfully Updated';
	header("Location: index.php");
?>