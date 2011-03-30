$(document).ready(function(){
	$("#male").keyup(updateAll);
	$("#female").keyup(updateAll);
	$("#namegenform").submit(generoi);
	$(":input").keyup(checkData);
	$(document).ready(checkData);
});

function generoi(){
	if(checkData() == true){
		var male = $("#male").val();
		var female = $("#female").val();
		var all = $("#all").val();
		var syntax = $("#syntax").val();
	
		$("#stuff").html('<div id="loading">Please wait, loading...</div>');
		$("#stuff").load("generate.php?");
	}
		
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
	
	if(male == ""){
		var maleimg = '<img src="img/male.png" alt="male" /> ';
	}else{
		if(isNaN(male)){
			var maleimg = '<img src="img/male.png" alt="male" /> ';
		}else{
			var maleimg = "";
		}
	}
	
	if(female == ""){
		var femaleimg = '<img src="img/female.png" alt="female" /> ';
	}else{
		if(isNaN(female)){
			var femaleimg = '<img src="img/female.png" alt="female" /> ';
		}else{
			var femaleimg = "";
		}
	}
	
	if(all == ""){
		var allimg = '<img src="img/all.png" alt="all" /> ';
	}else{
		if(isNaN(all)){
			var allimg = '<img src="img/all.png" alt="all" /> ';
		}else{
			if((eval(male)+eval(female))>all){
				var allimg = '<img src="img/all.png" alt="all" /> ';
			}else{
				if(all == 0){
					var allimg = '<img src="img/all.png" alt="all" /> ';
				}else{
					var allimg = "";
				}
			}
		}
	}
	
	if(syntax == ""){
		var syntaximg = '<img src="img/syntax.png" alt="syntax" /> ';
	}else{
		var syntaximg = '';
	}
		
	//alert(maleimg);
	
	$("#error").html("");
	
	if(maleimg == "" && femaleimg == "" && allimg == "" && syntaximg == ""){
		if(all > 1000){
			$("#error").html("ERROR: Row limit is 1000!");
			$("#button").hide();
			$("#button").attr("disabled","disabled");
			return false;
		}else{
			$("#error").html("");
			$("#button").show();
			$("#button").attr("disabled","");
			return true;
		}
	}else{
		$("#error").html("ERRORS: "+maleimg+femaleimg+allimg+syntaximg);
		$("#button").hide();
		$("#button").attr("disabled","disabled");
		return false;
	}
}