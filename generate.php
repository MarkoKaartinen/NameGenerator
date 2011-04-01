<?php
$lang = $_GET['lang'];
$female = $_GET['fe'];
$male = $_GET['ma'];
$all = $_GET['all'];
$syntax = htmlentities(urldecode($_GET['s']));

$women = file("names/$lang/female_firstnames.txt");
$men = file("names/$lang/male_firstnames.txt");
$last = file("names/$lang/surnames.txt");

$randoms = $all-$male-$female;

$i = 0;
while($i < $all){
	for($j = 0; $j < $female; $j++){
		shuffle($women);
		$first = $women[0];
		shuffle($last);
		$sur = $last[0];
		$str = "";
		$str = str_replace("[FIRST]", $first, $syntax);
		$str = str_replace("[LAST]", $sur, $str);
		echo "$str<br />";
		$i++;
	}
	for($j = 0; $j < $male; $j++){
		shuffle($men);
		$first = $men[0];
		shuffle($last);
		$sur = $last[0];
		$str = "";
		$str = str_replace("[FIRST]", $first, $syntax);
		$str = str_replace("[LAST]", $sur, $str);
		echo "$str<br />";
		$i++;
	}
	for($j = 0; $j < $randoms; $j++){
		$rnd = rand(0, 1);
		if($rnd == 0){
			shuffle($men);
			$first = $men[0];
		}else{
			shuffle($women);
			$first = $women[0];
		}
		shuffle($last);
		$sur = $last[0];
		$str = "";
		$str = str_replace("[FIRST]", $first, $syntax);
		$str = str_replace("[LAST]", $sur, $str);
		echo "$str<br />";
		$i++;
	}
}
?>