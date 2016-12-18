var game = {
    wins: 0,
    losses: 0
};


var magicNumber = Math.floor((Math.random() * 120) + 19);
console.log(magicNumber);

var redCrystal = Math.floor((Math.random() * 12)+ 1);
$("#red").attr(redCrystal);

var blueCrystal = Math.floor((Math.random() * 12)+ 1);
$("#blue").attr(blueCrystal);

var greenCrystal = Math.floor((Math.random() * 12)+ 1);
$("#green").attr(greenCrystal);

var yellowCrystal = Math.floor((Math.random() * 12)+ 1);
$("#yellow").attr(yellowCrystal);

var crystalNumber = 0;


$(document).ready(function(){
	$("#magicNum").html(magicNumber);
	
	$("#red").click(function(){
	console.log(redCrystal);
	crystalNumber = crystalNumber + redCrystal;
	console.log(crystalNumber);
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		$("#winsCounter").html(game.wins);
		alert("You Win!  You are the empress of crystals!");
		resetGame();
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		alert("You lose.  All your crystals are now mine!");
		resetGame();
	}
	});
	
	$("#blue").click(function(){
	console.log(blueCrystal);
	crystalNumber = crystalNumber + blueCrystal;
	console.log(crystalNumber)
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++;
		$("#winsCounter").html(game.wins);
		alert("You Win!  You are a crystal master!");
		resetGame();
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		alert("You lose.  You can try again. But try harder!");
		resetGame();
	}
	});

	$("#green").click(function(){
	console.log(greenCrystal);
	crystalNumber = crystalNumber + greenCrystal;
	console.log(crystalNumber);
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++;
		$("#winsCounter").html(game.wins);
		alert("You Win!  You are a crystal magician!");
		resetGame();
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		alert("You lose.  I will take all the crystals!");
		resetGame();
	}
	});

	$("#yellow").click(function(){
	console.log(yellowCrystal);
	crystalNumber = crystalNumber + yellowCrystal;
	console.log(crystalNumber);
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++
		$("#winsCounter").html(game.wins);
		alert("You Win!  You are a crystal wizard!");
		resetGame();
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++
		$("#lossesCounter").html(game.losses);
		alert("You lose.  Say goodbye to your precious crystals!");
		resetGame();
	}
	});

	$("#reset").click(function(){
		console.log('reset');
		resetGame();	
	});
});

function resetGame(){
	console.log("resetting");
	crystalNumber = 0;
	$("#crystalNum").html(crystalNumber);
	var magicNumber = Math.floor((Math.random() * 120) + 19);
	console.log(magicNumber);
	$("#magicNum").html(magicNumber);
	var redCrystal = Math.floor((Math.random() * 12)+ 1);
	console.log(redCrystal);
	// $("#red").attr(redCrystal);
}







