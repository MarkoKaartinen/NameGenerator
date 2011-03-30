$(document).ready(function(){
	$("#male").keyup(updateAll);
	$("#female").keyup(updateAll);
	$("#namegenform").submit(generoi);
	$(":input").keyup(checkData);
	$(document).ready(checkData);
});

function generoi(){
	var male = $("#male").val();
	var female = $("#female").val();
	var all = $("#all").val();
	var syntax = $("#syntax").val();
	
	$("#stuff").html('<div id="loading">Please wait, loading...</div>');
	$("#stuff").load("generate.php?");
	
	return false;
}

function updateAll(){
	var male = $("#male").val();
	var female = $("#female").val();
	if(male != "" && female != ""){
		var yht = eval(male)+eval(female);
		$("#all").val(yht);
	}else if(male != "" && female == ""){
		$("#all").val(male);
	}else if(female != "" && male == ""){
		$("#all").val(female);
	}else{
		$("#all").val("");
	}
}

function checkData(){
	var male = $("#male").val();
	var female = $("#female").val();
	var all = $("#all").val();
	var syntax = $("#syntax").val();
	
	var maleimg = '<img src="img/male.png" alt="male" /> ';
	var femaleimg = '<img src="img/female.png" alt="female" /> ';
	var allimg = '<img src="img/all.png" alt="all" /> ';
	var syntaximg = '<img src="img/syntax.png" alt="syntax" /> ';
	
	$("#error").html("ERRORS: "+maleimg+femaleimg+allimg+syntaximg);
}