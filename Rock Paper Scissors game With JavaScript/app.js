const ComputerChoiceDisplay = document.getElementById('computer-choice');
const UserChoiceDisplay = document.getElementById('user-choice');
const ResultDisplay = document.getElementById('result');
const PossibleChoices = document.querySelectorAll('button');

let UserChoice
let ComputerChoice
let Result

PossibleChoices.forEach(PossibleChoice => PossibleChoice.addEventListener('click', (e) => {
	UserChoice = e.target.id
	UserChoiceDisplay.innerHTML = UserChoice
	GenerateComputerChoice()
	getresult()
}))


function GenerateComputerChoice(){
	const RandomNumber = Math.floor(Math.random() * 3) + 1
	// console.log(RandomNumber)

	if(RandomNumber == 1){
		ComputerChoice = 'rock'
	}
	if(RandomNumber == 2){
		ComputerChoice = 'paper'
	}
	if(RandomNumber == 3){
		ComputerChoice = 'scissors'
	}
	ComputerChoiceDisplay.innerHTML = ComputerChoice
}

function getresult(){
	if(ComputerChoice == UserChoice){
		Result = 'Its a draw!'
	}
	if(ComputerChoice == 'rock' && UserChoice == 'paper'){
		Result = 'You win!'
	}
	if(ComputerChoice == 'rock' && UserChoice == 'scissors'){
		Result = 'You Lose!'
	}
	if(ComputerChoice == 'paper' && UserChoice == 'scissors'){
		Result = 'You Win!'
	}
	if(ComputerChoice == 'paper' && UserChoice == 'rock'){
		Result = 'You Lose!'
	}
	if(ComputerChoice == 'scissors' && UserChoice == 'rock'){
		Result = 'You Win!'
	}
	if(ComputerChoice == 'scissors' && UserChoice == 'paper'){
		Result = 'You Lose!'
	}
	
	ResultDisplay.innerHTML = Result
}