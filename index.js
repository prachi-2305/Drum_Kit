// for button on screen;

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        
        var innerHtmlbutton = this.innerHTML;
        makeSound(innerHtmlbutton);
        addAnimation(innerHtmlbutton);
    });

}

// for key on keyboard;
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

//function to make sound
function makeSound(abc){
    switch(abc){
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
            
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
    }
}

//Adding animation
function addAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function() {
        activeKey.classList.remove("pressed"); // Remove class after 0.1 sec
    }, 100);
}
