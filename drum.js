
// adding the event listner 
var numberOfButtons = document.querySelectorAll(".button").length;

for (var j = 0; j < numberOfButtons; j++) {

document.querySelectorAll(".button")[j]
	.addEventListener("click", function() {
	var buttonStyle = this.innerHTML;
	sound(buttonStyle);
	
});
}

// adding the keypress
document.addEventListener("keypress", function(event) {
    sound(event.key);
    });
    

// adding music using the sound function
    function sound(key) {
        switch (key) {
            case "d":
            var sound1 = new Audio("songs/sounds_crash.mp3");
            sound1.play();
            break;
        
            case "r":
            var sound2 = new Audio("songs/sounds_kick-bass.mp3");
            sound2.play();
            break;
        
            case "u":
            var sound3 = new Audio('songs/sounds_snare.mp3');
            sound3.play();
            break;
        
            case "m":
            var sound4 = new Audio('songs/sounds_tom-1.mp3');
            sound4.play();
            break;
        
            case "k":
            var sound5 = new Audio('songs/sounds_tom-2.mp3');
            sound5.play();
            break;
        
            case "i":
            var sound6 = new Audio('songs/sounds_tom-3.mp3');
            sound6.play();
            break;
        
            case "t":
            var sound7 = new Audio('songs/sounds_tom-4.mp3');
            sound7.play();
            break;
        
            default: console.log(key);
        }
        }
        