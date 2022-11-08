var firstCommit;
firstCommit = "Coders";
console.log(firstCommit + " welcome");

var startBtn = document.querySelector("#start-button");

var clock = document.getElementById("timeleft");
var secondsLeft = 90;

function remainingTime() {
    var timer = setInterval(function () {

        secondsLeft--;
        clock.textContent = secondsLeft + " s";

        if (secondsLeft <= 0){
            clearInterval(clock);
            clock.textContent = "Time is up!";
        }
        else {
            

        }
    
}, 1000);
}

function startQuiz() {
    remainingTime();
}

startBtn.addEventListener("click", startQuiz);