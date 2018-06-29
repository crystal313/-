var input = document.getElementsByClassName("input");
var input2 = document.getElementsByClassName("input2");


function next(){

	document.getElementById("next1").style.display = "none";
	for(var i = 0;i<input.length;i++){

		input[i].style.display = "none";		
	}
	for(var t=0;t<input2.length;t++){
		input2[t].style.display = "block";
	}

	document.getElementById("finish").style.display = "block";


}
