<?php
//for debugging
error_reporting(-1);

include("config.php");

$keys = array_keys($langs);
if(count($keys) == 1){
	$lang = $keys[0];
}else{
	$lang = "";
}

echo $lang;
?>

<form action="index.php?do=generate" method="post">

</form>