var firstCommit;
firstCommit = "Coders";
console.log(firstCommit + " welcome");

var startBtn = document.querySelector("#start-button");
var questionNumber = 0;
var askQuestion = document.querySelector("#ask-question");
var answerBtn1 = document.querySelector("#answer-btn1");
var answerBtn2 = document.querySelector("#answer-btn2");
var answerBtn3 = document.querySelector("#answer-btn3");
var answerBtn4 = document.querySelector("#answer-btn4");
var answerButtons = document.querySelector("#choices");
var quiz = document.querySelector("#quiz-area");
var answerCheck = document.querySelector("#check-answer");

var quizQuestions = [
    {
        quests: ["Which part of the HTML is the JavaScript linked in? "],
        choices: ["a. Head", "b. Body", "c. Footer", "d. Nav"],
        answer: ["b. Body"]
    },
    {
        quests: ["Which of the following is not a commonly used data type?"],
        choices: ["a. Booleans", "b. Strings", "c. Numbers", "d. Element ID"],
        answer: ["d. Element ID"]
    },
    {
        quests: ["What is the first index in an array?"],
        choices: ["a. 1", "b. 0", "c. -1", "d. 10"],
        answer: ["b. 0"]
    },
    {
        quests: ["Which operator is used to assign a value to a variable in JavaScript?"],
        choices: ["a. #", "b. =", "c. ^ ", "d. * "],
        answer: ["b. = "]
    },
    {
        quests: ["How do you call a function called 'myFunction'?"],
        choices: ["a. use = myFunction", "b. function == myFunction", "c. myFunction()", "d. call myFunction()"],
        answer: ["c. myFunction()"]
    },
    {
        quests: ["How can you add a comment in JavaScript?"],
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment'", "d. **This is a comment"],
        answer: ["a. //This is a comment"]
    },
    {
        quests: ["Which event occurs when the user clicks on an HTML element?"],
        choices: ["a. touch", "b. onMouse", "c. onTouch", "d. onclick"],
        answer: ["d. onclick"]
    },
    {
        quests: ["How do you declare a variable in JavaScript?"],
        choices: ["a. v e", "b. v my", "c. va", "d. v"],
        answer: ["c. vaVariable"]
    }
];

function startQuiz() {
    showQuestion(questionNumber);
    remainingTime();
    
}

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
var questionNumber = 0;

function showQuestion(questionNumber) {
   
    askQuestion.textContent = quizQuestions[questionNumber].quests[0];
    answerBtn1.textContent = quizQuestions[questionNumber].choices[0];
    answerBtn2.textContent = quizQuestions[questionNumber].choices[1];
    answerBtn3.textContent = quizQuestions[questionNumber].choices[2];
    answerBtn4.textContent = quizQuestions[questionNumber].choices[3];
    
}

    answerButtons.onclick = () => {
        if (questionNumber < quizQuestions.length - 1) {
            questionNumber++;
            showQuestion(questionNumber);
            userAnswer(event);
            
    }
    else {
        alert("error");
    }
  
}

function userAnswer(event) {
    // event.preventDefault();

    if (quizQuestions[questionNumber].answer == event.target.value) {
        answerCheck.textContent = "Correct!"; 
    }
    else{
        secondsLeft = secondsLeft - 10;
        answerCheck.textContent = "incorrect";
    }
}




var questionCount = 0;



function gameOver() {
quiz.style.display = "none";
}

startBtn.addEventListener("click", startQuiz);
answerButtons.addEventListener("click", showQuestion(questionNumber) );