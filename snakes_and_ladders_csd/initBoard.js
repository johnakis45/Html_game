function initBoard(){
	var table = document.getElementById('mainTable');
	var tr = document.createElement('tr');

	for (var i = 8; i >=1; i--) {
	  var tr = document.createElement('tr');
	  for (var j = 9; j >=0; j--) {
	  var td1 = document.createElement('td');
	  var num=i*10-j;
	  td1.innerHTML="<div id='position"+num+"'><img  src='images/"+num+".png'  height=70 width=70></div>";
	  
	  tr.appendChild(td1);
	  
	  }
	  table.appendChild(tr);
	}
}

function changePosition(oldPosition,newPosition,turn){
	var both;
	if (oldPosition != 0) {
		both = redpos == whitepos;
		//document.getElementById("position"+oldPosition).innerHTML="<img  src='images/"+oldPosition+".png'  height=70 width=70></div>";
	}
	if (turn == 'red') {
		if (both && oldPosition != 0) {
			document.getElementById("position"+oldPosition).innerHTML="<img  src='imagesWhite/"+oldPosition+".png'  height=70 width=70></div>";
		}else if(oldPosition != 0){
			document.getElementById("position"+oldPosition).innerHTML="<img  src='images/"+oldPosition+".png'  height=70 width=70></div>";
		}
		if (newPosition == whitepos) {
			document.getElementById("position"+newPosition).innerHTML="<img  src='imagesBoth/"+newPosition+".png'  height=70 width=70></div>";		
		}else{
			document.getElementById("position"+newPosition).innerHTML="<img  src='imagesRed/"+newPosition+".png'  height=70 width=70></div>";		
		}
	}else{
		if (both && oldPosition != 0) {
			document.getElementById("position"+oldPosition).innerHTML="<img  src='imagesRed/"+oldPosition+".png'  height=70 width=70></div>";
		}else if(oldPosition != 0){
			document.getElementById("position"+oldPosition).innerHTML="<img  src='images/"+oldPosition+".png'  height=70 width=70></div>";
		}
		if (newPosition == redpos) {
			document.getElementById("position"+newPosition).innerHTML="<img  src='imagesBoth/"+newPosition+".png'  height=70 width=70></div>";		
		}else{
			document.getElementById("position"+newPosition).innerHTML="<img  src='imagesWhite/"+newPosition+".png'  height=70 width=70></div>";		
		}
	}
}


