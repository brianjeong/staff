<?php
/*
if (!isset($_POST['qry']))
	exit();

if (empty($_POST['qry']))
	exit();
*/

require_once("inc/dac.inc.php");		// db access info
$cnct = mysqli_connect($host,$dbusr,$dbpw,$dbname);
mysqli_query($cnct,"SET NAMES 'UTF8'");

$qry = $_POST["qry"];

//$qry = "select id,first_name,last_name,school_email from staff";
$rslt = mysqli_query($cnct,$qry);

echo "<html><head></head><body><table><tr>";

//Column Heads
$row = mysqli_fetch_assoc($rslt);
foreach ($row as $col => $val)
	echo "<th>{$col}</th>";
echo "</tr>";

//Data
mysqli_data_seek($rslt, 0);
while($row = mysqli_fetch_row($rslt)) {
	echo "<tr>";
	foreach($row as $val) {
		echo "<td>{$val}</td>";
	}
	echo "</tr>";
}
echo "</table></body></html>";
?>