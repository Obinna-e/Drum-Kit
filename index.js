var soundButtons = document.querySelectorAll(".drum");
var audio = new Audio('sounds/crash.mp3');

for (var i = 0; i < soundButtons.length; i++) {
    soundButtons[i].addEventListener("click", function () {
   

    audio.play();
});
}

