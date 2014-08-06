<?
/* if login (submit) button pressed, db check
** else display login form
** at initial open, $_POST for submit button doesn't exist, so login form first
** when login form displayed, client-side validation with jQuery. No need for additional validation for server-side
*/
session_start();
header('Cache-Control: no-cache, no-store, must-revalidate'); // HTTP 1.1.
header('Pragma: no-cache'); // HTTP 1.0.
header('Expires: 0'); // Proxies.

if(!isset($_SESSION["back"])){
	$_SESSION["back"] = "index.php";
}

if (@$_POST['login_btn']=="Login"){
	require_once("dac.inc.php");		// db access info
	$cnct = mysqli_connect($host,$dbusr,$dbpw,$dbname);
	
	$id_in = $_POST['user_id'];
	$pw_in = $_POST['user_pw'];
	$tbl='staff';
	$qry = "SELECT id,first_name,expired FROM $tbl WHERE id='$id_in' AND pw='$pw_in'";
	$rslt = mysqli_query($cnct,$qry);
	$num = mysqli_num_rows($rslt);
	
	if($num>0){	// pass
		$row = mysqli_fetch_assoc($rslt);
				
		$_SESSION['auth']="staff";
		$_SESSION['user_id']=$id_in;
		$_SESSION['user_pw']=$pw_in;
		$_SESSION['user_name']=$row['first_name'];
		$_SESSION['id_chk']=($row['expired']==1?"Expired ID":"");

		header('Location: ' . $_SESSION["back"]);
		
	}else{
		$err_msg = "Incorrect ID or Password";
		include ("login.inc.php");
	}
	
} else {
	include ("login.inc.php");
}
?>