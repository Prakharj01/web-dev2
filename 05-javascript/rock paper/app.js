const computerChoiceDisplay=document.getElementById("computer-choice");
const userChoiceDisplay=document.getElementById("user-choice");
const resultDisplay=document.getElementById("result");

let userChoice
const buttons=document.querySelectorAll("button");
let computerChoice

buttons.forEach(possibleChoice => 
    possibleChoice.addEventListener("click", (e)=>{
        userChoice=e.target.id;
        console.log(userChoice);
        userChoiceDisplay.innerHTML=userChoice;
        generateComputerChoice();
    })
    )

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1;

    if(randomNumber==1){
        computerChoice="rock";
    }
    if(randomNumber==2){
        computerChoice="scissor";
    }
    if(randomNumber==3){
        computerChoice="paper";
    }
    computerChoiceDisplay.innerHTML=computerChoice;

    if(computerChoice==userChoice){
result="Its a draww.. !!";
    }
    else if((computerChoice=="rock" && userChoice=="scissor") || (computerChoice=="scissor" && userChoice=="paper") ||(computerChoice=="paper" && userChoice=="rock")){
        result="Computer wins";
    }
    else{
        result="User wins";
    }
resultDisplay.innerHTML=result;
    
}