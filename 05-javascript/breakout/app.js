const grid=document.querySelector('.grid');
const scoreDisplay=document.getElementById('score')

const blockWidth=100;
const blockHeight=20;

const gridWidth=560
const gridHeight=300
const startPosition=[230,10]
const currentPosition=startPosition
const ballStartPosition=[270,40]
const ballCurrentPosition=ballStartPosition
const ballDiameter=20
let xDirection=-1
let yDirection=1
let score=0
let timerId


class Block{
    constructor(xAxis,yAxis){
        this.bottomLeft=[xAxis,yAxis]
        this.bottomRight=[xAxis+blockWidth,yAxis]
        this.topLeft=[xAxis,yAxis+blockHeight]
        this.topRight=[xAxis+blockWidth,yAxis+blockHeight]
    }
}

const blocks=[
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),

    
]


function addBlocks(){
    for (let i=0;i<blocks.length;i++){
    const block=document.createElement('div');
    block.classList.add('block')
    block.style.left=blocks[i].bottomLeft[0]+ 'px';
    block.style.bottom=blocks[i].bottomLeft[1]+ 'px';
    grid.appendChild(block)
}
}
const user=document.createElement('div');
    user.classList.add('user')
    user.style.left=startPosition[0]+'px'
    user.style.bottom=startPosition[1]+'px'
    grid.appendChild(user)
addBlocks();


function drawUser(){
    user.style.left=currentPosition[0]+'px';
    user.style.bottom=currentPosition[1]+'px';
}

function moveUser(e){

switch (e.key){
    case 'ArrowLeft':
        if (currentPosition[0]>0){
    currentPosition[0]-=10
    drawUser()
}
    break;
    case 'ArrowRight':
        if (currentPosition[0]<gridWidth-blockWidth){
        currentPosition[0]+=10
        drawUser()
    }
        break;
}
}


document.addEventListener('keydown',moveUser)

const ball=document.createElement("div")
ball.classList.add('ball')
ball.style.left=ballCurrentPosition[0]+'px'
ball.style.bottom=ballCurrentPosition[1]+'px'

grid.append(ball)


function drawBall(){
    ball.style.left=ballCurrentPosition[0]+'px';
    ball.style.bottom=ballCurrentPosition[1]+'px';
}
function moveBall(){
    ballCurrentPosition[0]+=xDirection
    ballCurrentPosition[1]+=yDirection
    drawBall()
    checkForCollision()
}

function checkForCollision(){

//check for block collision

for(let i=0;i<blocks.length;i++){
    if (ballCurrentPosition[0]>=blocks[i].bottomLeft[0] && ballCurrentPosition[0]<=blocks[i].bottomRight[0] && (ballCurrentPosition[1]+ballDiameter) >= blocks[i].bottomLeft[1] && ballCurrentPosition[1]<blocks[i].topLeft[1]){
        const allBlocks=Array.from(document.querySelectorAll(".block"))
        allBlocks[i].classList.remove('block')
        blocks.splice(i,1)
        score++
        scoreDisplay.innerHTML=score
        yDirection*=-1


        if (blocks.length==0){
            score.innerHTML="YOU WIN";
            clearInterval(timerId)
        }
    } 
}

if (ballCurrentPosition[0]>currentPosition[0] && ballCurrentPosition[0]< currentPosition[0]+blockWidth && 
    ballCurrentPosition[1]>currentPosition[1] && ballCurrentPosition[1]< currentPosition[1]+blockHeight ){
        yDirection*=-1
    }

    //check for wall collision
    if (ballCurrentPosition[0]>=gridWidth-ballDiameter || ballCurrentPosition[0]<=0){
        xDirection*=-1
    }
    if (ballCurrentPosition[1]>=gridHeight-ballDiameter){
            yDirection*=-1
        }

        //check for gameOver 
    if ( ballCurrentPosition[1]<=0){
        score.textContent=('Game Over');
         clearInterval(timerId)
    }
}


timerId=setInterval(moveBall,15)