<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	
	<title>NameGenerator 0.1</title>
	
	<link rel="stylesheet" type="text/css" media="all" href="style.css" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
	<script type="text/javascript" src="javascript.js"></script>
</head>
<body>
<?php
include("config.php");

$keys = array_keys($langs);
if(count($keys) == 1){
	$lang = $keys[0];
}else{
	$lang = "";
}
?>

<h1>NameGenerator 0.1</h1>

<p><strong>Help</strong><br />
>>insert help here<<
</p>

<form action="" method="post" id="namegenform">
<?php if($lang == ""){ ?>
	<p>Choose language file:<br />
	<select name="lang" id="lang">
		<?php
		for($i=0; $i < count($keys); $i++){
			echo "<option value=\"".$keys[$i]."\">".$keys[$i]." - ".$langs[$keys[$i]]."</option>";
		}
		?>
	</select>
	</p>
<?php }else{ echo "<input type=\"hidden\" name=\"lang\" value=\"".$lang."\" id=\"lang\" >"; } ?>
<p>Choose how many names you want to generate: <small>(male/female/total)</small><br/>
<input type="text" name="male" id="male" size="5" value="0" /> <input type="text" name="female" id="female" size="5" value="0" /> <input type="text" name="all" id="all" size="5" /></p>
<p>Syntax:<br />
<input type="text" name="syntax" id="syntax" size="80" value="[FIRST] [LAST]" /></p>
<div id="error"></div>
<p><input type="submit" value="Generate" id="button" /></p>
</form>

<div id="stuff"></div>

</body>
</html>