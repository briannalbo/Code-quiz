var firstCommit;
firstCommit = "Coders";
console.log(firstCommit + " welcome");

var startBtn = document.querySelector("#start-button");


var quizQuestions = [
    {
        question: "Which part of the HTML is the JavaScript linked in?",
        choices: ["a. Head", "b. Body", "c. Footer", "d. Nav"],
        answer: "b. Body"
    },
    {
        question: "Which of the following is not a commonly used data type?",
        choices: ["a. Booleans", "b. Strings", "c. Numbers", "d. Element ID"],
        answer: "d. Element ID"
    },
    {
        question: "What is the first index in an array?"
        choices: ["a. 1", "b. 0", "c. -1", "d. 10"],
        answer: "b. 0"
    },
    {
        question: "How do you write 'Hello World' in an alert?",
        choices: ["a. alertBox(Hello World)", "b. alert("Hello World");", "c. promptAlert('Hello World'):", "d. showAlert("Hello World")"],
        answer: "b. alert("Hello World");"
    },
    {
        question: "How do you call a function called 'myFunction'?",
        choices: ["a. use = myFunction", "b. function == myFunction", "c. myFunction()", "d. call myFunction()"],
        answer: "c. myFunction()"
    },
    {
        question: "How can you add a comment in JavaScript?",
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment'", "d. **This is a comment"],
        answer: "a. //This is a comment"
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        choices: ["a. touch", "b. onMouse", "c. onTouch", "d. onclick"],
        answer: "d. onclick"
    },
    {
        question: "How do you declare a variable in JavaScript?",
        choices: ["a. v = myVariable", "b. v myVariable", "c. var myVariable", "d. variable = myVariable"],
        answer: "c. var myVariable"
    }
];


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