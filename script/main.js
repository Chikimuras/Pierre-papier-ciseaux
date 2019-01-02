//Document JavaScript

//CACHED DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".results>p");
const pierre_div = document.getElementById("pierre");
const papier_div = document.getElementById("papier");
const ciseaux_div = document.getElementById("ciseaux");

function getComputerChoice(){

	const choices = ['pierre', 'papier', 'ciseaux'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function convertToWord(code){
	if (code === "pierre") return("La Pierre");
	if (code === "papier") return("Le Papier");
	if (code === "ciseaux") return ("Les Ciseaux");
}

function win(user, computer){
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	userChoice_div = document.getElementById(user); 
	result_p.innerHTML = `${convertToWord(user)} gagne contre ${convertToWord(computer)}. Bravo!`
	userChoice_div.classList.add("green-glow");
	setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);

}

function loose(user, computer){
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	userChoice_div = document.getElementById(user); 
	result_p.innerHTML = `${convertToWord(computer)} gagne contre ${convertToWord(user)}. Vous perdez!`
	userChoice_div.classList.add("red-glow");
	setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);

}

function draw(user, computer){
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	userChoice_div = document.getElementById(user); 
	result_p.innerHTML = `Égalité`
	userChoice_div.classList.add("orange-glow");
	setTimeout(() => userChoice_div.classList.remove("orange-glow"), 300);

}


function game(userChoice){

	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "pierreciseaux":
		case "papierpierre":
		case "ciseauxpapier":
			win(userChoice, computerChoice);
			break;
		case "pierrepapier":
		case "papierciseaux":
		case "ciseauxpierre":
			loose(userChoice, computerChoice);
			break;
		case "pierrepierre":
		case "papierpapier":
		case "ciseauxciseaux":
			draw(userChoice, computerChoice);
			break;
	}
}

game();

function main(){

	pierre_div.addEventListener('click', () => game('pierre'));

	papier_div.addEventListener('click', () => game('papier'));

	ciseaux_div.addEventListener('click', () => game('ciseaux'));

}

main();