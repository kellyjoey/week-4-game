$(document).ready(function(){

var game = {
    wins: 0,
    losses: 0
	};
$("#winsCounter").html(game.wins);
$("#lossesCounter").html(game.losses);

var redCrystal
var blueCrystal
var greenCrystal
var yellowCrystal
var magicNumber
var crystalNumber

function resetGame(){
		console.log("resetting");
		
		

magicNumber = Math.floor((Math.random() * 101) + 19);
console.log(magicNumber);
$("#magicNum").html(magicNumber);

redCrystal = Math.floor((Math.random() * 12)+ 1);
$("#red").attr("value", redCrystal);

blueCrystal = Math.floor((Math.random() * 12)+ 1);
$("#blue").attr("value", blueCrystal);

greenCrystal = Math.floor((Math.random() * 12)+ 1);
$("#green").attr("value", greenCrystal);

yellowCrystal = Math.floor((Math.random() * 12)+ 1);
$("#yellow").attr("value", yellowCrystal);

crystalNumber = 0;
$("#crystalNum").html(crystalNumber);
}
		
	$("#red").on("click", function(){
	console.log(redCrystal);
	crystalNumber = crystalNumber + redCrystal;
	console.log(crystalNumber);
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++;
		$("#winsCounter").html(game.wins);
		setTimeout(function(){
			alert("You Win!  You are the empress of crystals!");
			resetGame();	
		}, 50)
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		setTimeout(function(){
			alert("You lose.  All your crystals are now mine!");
			resetGame();	
		}, 50)
	}
	});
	
	$("#blue").on("click", function(){
	console.log(blueCrystal);
	crystalNumber = crystalNumber + blueCrystal;
	console.log(crystalNumber)
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++;
		$("#winsCounter").html(game.wins);
		setTimeout(function(){
			alert("You Win!  You are a crystal master!");
			resetGame();	
		}, 50)
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		setTimeout(function(){
			alert("You lose.  You can try again. But try harder!");
			resetGame();	
		}, 50)
	}
	});

	$("#green").on("click", function(){
	console.log(greenCrystal);
	crystalNumber = crystalNumber + greenCrystal;
	console.log(crystalNumber);
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++;
		$("#winsCounter").html(game.wins);
		setTimeout(function(){
			alert("You Win!  You are a crystal magician!");
			resetGame();	
		}, 50)	
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		setTimeout(function(){
			alert("You lose.  Say goodbye to your precious crystals!");
			resetGame();	
		}, 50)		
	}
	});

	$("#yellow").on("click", function(){
	console.log(yellowCrystal);
	crystalNumber = crystalNumber + yellowCrystal;
	console.log(crystalNumber);
	$("#crystalNum").html(crystalNumber);
	if (crystalNumber === magicNumber){
		console.log("WIN");
		game.wins++;
		$("#winsCounter").html(game.wins);
		setTimeout(function(){
			alert("You Win!  You are a crystal wizard!");
			resetGame();	
		}, 50)
	}

	if (crystalNumber > magicNumber){
		console.log("LOSE");
		game.losses++;
		$("#lossesCounter").html(game.losses);
		setTimeout(function(){
			alert("You lose.  Say goodbye to your precious crystals!");
			resetGame();	
		}, 50)
		
	}
	});


	$("#reset").on("click", function(){
		console.log('reset');
		resetGame();	
	});


resetGame();

	


});





