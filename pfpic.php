<?php
session_start();
if(@$_SESSION['auth'] != "staff"){
	header("Location: login.php");
	exit();
}

if(strlen(@$_SESSION['pic_link']) < 5){
	exit();
}

$pic_link = $_SESSION['pic_link'];
$location = "pfpics/".$pic_link;
header('Content-Type: image/jpeg');
readfile($location);
?>