var turns = ["#","#","#","#","#","#","#","#"];
var turnO = "";
var turnX = "";
var game = false;
var count = 0;

turnO = "O";
turnX = "X";

  
function turn(id){

  var location = document.getElementById(id).innerHTML;

  if (location === "#"){
    count++;
	if(count % 2 == 0)
	{
		turns[id] = turnO;
		document.getElementById(id).innerHTML = "O";
        gameState(turns,turnO);
	}
    else
	{
		turns[id] = turnX;
		document.getElementById(id).innerHTML = "X";
        gameState(turns,turnX);
	}
  }
}

function gameState(trace, currentTick) {
    if (trace[0] === currentTick && trace[1] === currentTick && trace[2] === currentTick) {
        game = true;
        document.getElementById('0').style.color = 'green';
        document.getElementById('1').style.color = 'green';
        document.getElementById('2').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }

    } else if (trace[2] === currentTick && trace[4] === currentTick && trace[6] === currentTick) {
        game = true;
        document.getElementById('2').style.color = 'green';
        document.getElementById('4').style.color = 'green';
        document.getElementById('6').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }

    } else if (trace[0] === currentTick && trace[3] === currentTick && trace[6] === currentTick) {
        game = true;
        document.getElementById('0').style.color = 'green';
        document.getElementById('3').style.color = 'green';
        document.getElementById('6').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }
		
    } else if (trace[0] === currentTick && trace[4] === currentTick && trace[8] === currentTick) {
        game = true;
        document.getElementById('0').style.color = 'green';
        document.getElementById('4').style.color = 'green';
        document.getElementById('8').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }
		
    } else if (trace[1] === currentTick && trace[4] === currentTick && trace[7] === currentTick) {
        game = true;
        document.getElementById('1').style.color = 'green';
        document.getElementById('4').style.color = 'green';
        document.getElementById('7').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }
		
    } else if (trace[2] === currentTick && trace[5] === currentTick && trace[8] === currentTick) {
        game = true;
        document.getElementById('2').style.color = 'green';
        document.getElementById('5').style.color = 'green';
        document.getElementById('8').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }

    } else if (trace[3] === currentTick && trace[4] === currentTick && trace[5] === currentTick) {
        game = true;
        document.getElementById('3').style.color = 'green';
        document.getElementById('4').style.color = 'green';
        document.getElementById('5').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }

    } else if (trace[6] === currentTick && trace[7] === currentTick && trace[8] === currentTick) {
        game = true;
        document.getElementById('6').style.color = 'green';
        document.getElementById('7').style.color = 'green';
        document.getElementById('8').style.color = 'green';
		document.getElementById("message").innerHTML = "Wygrał gracz " + currentTick + "!";
		for (i = 0; i < 9; i++) 
        {
        document.getElementById(i).style.pointerEvents = 'none';
        }
    }
    else if(!(trace.includes("#"))){
    game = true;
    		document.getElementById("message").innerHTML = "Remis!";
    }﻿ 
    else {
        game = false;
    }
}

function reset(){
  turns = ["#","#","#","#","#","#","#","#"];
  for (i = 0; i < 9; i++) 
  {
  document.getElementById(i).style.color = 'white';
  }
  count = 0;
  game = true;
  document.getElementById("message").innerHTML = "";
	for (i = 0; i < 9; i++) 
	{
	document.getElementById(i).style.pointerEvents = 'auto';
        document.getElementById(i).innerHTML = "#"
	}
}	