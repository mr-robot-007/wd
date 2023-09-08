var numOfDrumButtons = document.querySelectorAll(".drum").length;

for( var i = 0; i <  numOfDrumButtons ;i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        var buttonInnerHTML = this.innerHTML;
        console.log(buttonInnerHTML);
        playSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    }) ;
}

addEventListener("keydown",function(event) {
    console.log(event);
    playSound(event.key);
    buttonAnimation(event.key);
})


function playSound(key) {
    switch (key) {
        case "w":
            console.log("w");
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
    
        default:
            break;
    }
}

function buttonAnimation(key) {
    var activeBtn = document.querySelector("."+key)
    activeBtn.classList.add("pressed");
    setTimeout(function () {
        activeBtn.classList.remove("pressed");
    },100);

}