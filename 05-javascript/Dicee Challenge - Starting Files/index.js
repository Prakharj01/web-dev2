
var randomnum1=Math.random();
randomnum1=(Math.floor(randomnum1*6))+1

var randomnum2=Math.random();
randomnum2=(Math.floor(randomnum2*6))+1

var diceimage1="dice"+randomnum1+".png"
var diceimage2="dice"+randomnum2+".png"
var sourcedice1="images/"+diceimage1;
var sourcedice2="images/"+diceimage2;


document.querySelector(".img1").setAttribute("src",sourcedice1)
document.querySelector(".img2").setAttribute("src",sourcedice2)

if (randomnum1>randomnum2){
    document.querySelector(".container h1").textContent="🏆Player 1 wins";
}
else if (randomnum1<randomnum2){

    document.querySelector(".container h1").textContent="Player 2 wins🏆";
}
else{
    document.querySelector(".container h1").textContent="Refresh Me..!"
}
