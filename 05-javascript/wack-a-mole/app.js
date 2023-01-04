const squares=document.querySelectorAll(".square")
const score=document.querySelector(".score")
const timeLeft=document.querySelector(".time-left")
const mole=document.querySelector('.mole')

let result=0
let currentTime=5
let timerId=null;
let hitPosition
function randomsquare(){

squares.forEach((x)=>{
    x.classList.remove('mole');
})

let randomSquare=squares[Math.floor(Math.random()*9)]
randomSquare.classList.add('mole')
hitPosition=randomSquare.id
//console.log(randomSquare)
}

squares.forEach(square=>{
    square.addEventListener("mousedown",()=>{
        if (square.id==hitPosition){
            result++;
            console.log(score)
            score.textContent=result
            hitPosition=null
        }
    })
})


function moveMole(){

timerId=setInterval(randomsquare,1000)
}

moveMole()


function countDown(){
currentTime-=1;
    timeLeft.textContent=currentTime;
    if (currentTime==0){
clearInterval(countDownTimerId)
clearInterval(timerId)
alert("countdown over")
    }
}

let countDownTimerId=setInterval(countDown,1000)