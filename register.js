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
function finish1(){
	var obj = document.getElementsByName("Sex");
	var gery = document.getElementsByClassName("greybox");
	var female = document.getElementsByClassName("female");
	var male = document.getElementsByClassName("male");
	
	for(var j = 0;j<gery.length;j++){

		gery[j].style.display = "none";		
	}
	document.getElementById("biglabel").style.display="block";
    for(var i=0; i<obj.length; i ++){
        if(obj[i].checked===true){
           var sex = obj[i].value;
		   if(sex==="male"){
			   for(var m=0;m<male.length;m++){
				   male[m].style.display="block";
			   }
		   }else if(sex==="female"){
			   for(var f=0;f<male.length;f++){
				   female[f].style.display="block";
			   }
		   }else if(sex==="secret"){
			   
		   }			
        }		
    }
	
	
	
	
}

$(document).ready(function(){
	
});


$(function(){
$("a").not("#finish1").click(function(){
	    
	    var a_choosed = $(this);
	    
	    $(a_choosed).toggleClass("unchooesd");
	    $(a_choosed).toggleClass("choosed");
	    $(a_choosed).find(">h3").toggleClass("delete");
	
	
});
});


