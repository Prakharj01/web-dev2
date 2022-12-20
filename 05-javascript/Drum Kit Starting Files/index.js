
var numberOfButton=document.querySelectorAll(".drum").length;

    document.querySelector(".w").addEventListener("click",function() {
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    }
    );
    document.querySelector(".a").addEventListener("click",function() {
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    }
    );
    document.querySelector(".s").addEventListener("click",function() {
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    }
    );
    document.querySelector(".d").addEventListener("click",function() {
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    }
    );
    document.querySelector(".j").addEventListener("click",function() {
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    }
    );
    document.querySelector(".k").addEventListener("click",function() {
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
    
    });
    
    document.querySelector(".l").addEventListener("click",function() {
      var audio=new Audio("sounds/crash.mp3");
      audio.play();
    });

    document.addEventListener("keydown",function(event){
     console.log(event.key);   
    });