
function play(){
	var newpos;
	var roll = (Math.floor(Math.random() * (6 - 1 + 1) + 1));
	turn = getPlayerTurn();
	if (turn == 'red' && (redpos+roll<=80)) {
		newpos=redpos+roll;
		python_checker(newpos);
		console.log(red_see_snakes);
		newpos = ladder_snake_chekcer(newpos,red_see_snakes)
		updateGUI(turn,redpos,newpos,roll,false,hasPlayerWon(newpos));
		redpos = newpos;
	}else if (turn == 'white' && (whitepos+roll<=80)){
		newpos=whitepos+roll;
		python_checker(newpos);
		console.log(white_see_snakes);
		newpos = ladder_snake_chekcer(newpos,white_see_snakes)
		updateGUI(turn,whitepos,newpos,roll,false,hasPlayerWon(newpos));
		whitepos = newpos;
	}

	changePlayerTurn(turn,roll);
	updateGUI(turn,0,0,roll,true,true);
}

function ladder_snake_chekcer(newpos,snake){
	var index;
	if (snakePositions.includes(newpos) && snake) {
		index = snakePositions.indexOf(newpos, 0)
		newpos = snakeNewPositions[index];
		is_snake = true;
	}else if(ladderPositions.includes(newpos)){
		index = ladderPositions.indexOf(newpos, 0)
		newpos = ladderNewPositions[index];
		is_ladder =true;
	}
	return newpos;
}

function python_checker(newpos) {
	if(newpos== 29 || newpos==46) {
		if (getPlayerTurn() == 'red') {
			red_see_snakes = false;
		}else{
			white_see_snakes = false;
		}
	}
}

function getPlayerTurn(){
	return turn;
}

function changePlayerTurn(player,diceNum){
	if (diceNum != 6) {
		if(player == 'red'){
			turn = "white";
		}else{
			turn = "red";
		}
	}else{
		turn = player;
	}
	is_ladder = false;
    is_snake = false;
}

function hasPlayerWon(position){
	if (position == 80) {
		return true; 
	}
	return false;
}

function updateGUI(turn,cpos,gpos,dice,newgame,victory){
	if (newgame && victory) {
		if (turn != 'red') {
			document.getElementById('turn').innerHTML = "Player white plays now";
		}else{
			document.getElementById('turn').innerHTML = "Player red plays now";
		}
		DiceGUI(dice,!newgame)
		return;
	}
	if (newgame) {
		initBoard()
	}
	DiceGUI(dice,newgame)
	if (gpos !=0) {
		changePosition(cpos,gpos,turn)
	}
	if (victory) {
		document.getElementById('victory').play();
		if (turn != 'red') {
			alert("Player white Won The Game!!");
			window.location.reload();
		}else{
			alert("Player red Won The Game!!");
			window.location.reload();
		}
	}
	if (newgame == false) {
		if (turn != 'red') {
			document.getElementById('turn').innerHTML = "Player red plays now";
			document.getElementById('python').style.display = 'none';
			if (red_see_snakes == false) {
				document.getElementById('python').style.display = 'block';
			}
			if (is_ladder) {
				document.getElementById('effects').innerHTML = "White used a ladder";
			}	
			if (is_snake) {
				document.getElementById('effects').innerHTML = "White a snake got u";
				new Audio('./snake.mp3').play();
			}
		}else{
			document.getElementById('turn').innerHTML = "Player white plays now";
			document.getElementById('python').style.display = 'none';
			if (white_see_snakes == false) {
				document.getElementById('python').style.display = 'block';
			}
			if (is_ladder) {
				document.getElementById('effects').innerHTML = "Red used a ladder";
			}	
			if (is_snake) {
				document.getElementById('effects').innerHTML = "Red a snake got u ";
				new Audio('./snake.mp3').play();
			}
		}
		if (is_snake == false && is_ladder==false) {
			document.getElementById('effects').innerHTML = "";
		}
	}
}

function DiceGUI(dice,newgame){
	if (dice!=0 && !newgame) {
		document.getElementById('diceImg').src = "./ImagesDice/dice.gif"
		new Audio('./ImagesDice/slap.wav').play();
		if (dice == 1) {
			document.getElementById('diceImg').src = "./ImagesDice/one.png"
		}else if(dice == 2){
			document.getElementById('diceImg').src = "./ImagesDice/two.png"
		}else if(dice == 3){
			document.getElementById('diceImg').src = "./ImagesDice/three.png"
		}else if(dice == 4){
			document.getElementById('diceImg').src = "./ImagesDice/four.png"
		}else if(dice == 5){
			document.getElementById('diceImg').src = "./ImagesDice/five.png"
		}else if(dice == 6){
			document.getElementById('diceImg').src = "./ImagesDice/six.png"
		}else{
			document.getElementById('diceImg').src = "./ImagesDice/dice.gif"
		}
	}
}