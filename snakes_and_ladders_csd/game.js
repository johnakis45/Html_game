let turn;
let diceNumber;
let redpos;
let whitepos;
let red_see_snakes;
let white_see_snakes;
let is_ladder;
let is_snake;

let snakePositions   =[13,20,28,44,58,59,65,72,78]
let snakeNewPositions=[11,10,7,34,48,39,25,52,69]

let ladderPositions   =[5,16,21,37,42,54,60,67,73]
let ladderNewPositions=[33,36,61,56,53,64,80,77,76]


function setPositions() {
	var positions=[];

	for (var i = 1; i <=80 ; i++) {
	 positions[i]=new Object();
	 positions[i].from=i;
	 
	  
	 if(snakePositions.indexOf(i)!=-1){
	   positions[i].to=snakeNewPositions[snakePositions.indexOf(i)];
	   positions[i].type="Snake";
	 }
	 else if(ladderPositions.indexOf(i)!=-1){
	   positions[i].to=ladderNewPositions[ladderPositions.indexOf(i)];
	   positions[i].type="Ladders";
	 }
	 else if(i===29 || i===46){
		positions[i].to=i;
		positions[i].type="pythonEffect";   
	 }
	 else{
	   positions[i].to=i;
		positions[i].type="Normal";   
	   
	 }
	}
	 return positions; 
	}

var cells=setPositions();
for (var i = 1; i <=80 ; i++) {
    console.log("Cell: "+i+" type: "+cells[i].type+" From: "+cells[i].from+" To: "+cells[i].to)
}

function newGame(){

	if(Math.floor(Math.random() * (2 - 1 + 1) + 1) == 2){
		turn = 'red';
	}else{
		turn = 'white';
	}
	diceNumber = 0;
	diceNumber = 0;
	redpos = 0;
	whitepos = 0;
	red_see_snakes = true;
	white_see_snakes = true;
	is_ladder = false;
	is_snake = false;
	updateGUI(turn,0,0,6,true,false)
}


