var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var crash = new Audio("sounds/crash.mp3");
var snare = new Audio("sounds/snare.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

document.addEventListener("keydown", function(event){ // listen to key strokes
    makeSound(event.key);
    playAnimation(event.key);
});

var drumList = document.querySelectorAll(".drum");
for(var i = 0; i < drumList.length; i++){ // listen to mouse clicks
    drumList[i].addEventListener("click", function(){
        makeSound(this.textContent);
        playAnimation(this.textContent);
    });
}

function makeSound(pressedOrClicked){
    switch (pressedOrClicked) {
        case "w":
            resetIfPlaying(tom1);
            tom1.play();
            break;
        case "a":
            resetIfPlaying(tom2);
            tom2.play();
            break;
        case "s":
            resetIfPlaying(tom3);
            tom3.play();
            break;
        case "d":
            resetIfPlaying(tom4);
            tom4.play();
            break;
        case "j":
            resetIfPlaying(snare);
            snare.play();
            break;
        case "k":
            resetIfPlaying(crash);
            crash.play();
            break;
        case "l":
            resetIfPlaying(kick);
            kick.play();
            break;
        default:
            break;
    }
}

function playAnimation(drumName){
    var drumObj = document.querySelector("." + drumName);
    drumObj.classList.add("pressed");
    setTimeout(() => {
        drumObj.classList.remove("pressed");
    }, 100);
}

function isPlaying(audelem) {
    return !audelem.paused; 
}

function resetIfPlaying(audio){
    if(isPlaying(audio) && audio.currentTime > 0.1){
        audio.pause();
        audio.currentTime = 0;
    }
}