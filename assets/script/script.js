var firstCommit;
firstCommit = "Coders";
console.log(firstCommit + " welcome");

var startBtn = document.querySelector("#start-button");
var questionNumber = 0;
var intro = document.querySelector("#intro");
var introduct = document.querySelector("introduct");
var askQuestion = document.querySelector("#ask-question");
var answerBtn1 = document.querySelector("#answer-btn1");
var answerBtn2 = document.querySelector("#answer-btn2");
var answerBtn3 = document.querySelector("#answer-btn3");
var answerBtn4 = document.querySelector("#answer-btn4");
var answerButtons = document.querySelector("#choices");
var finalNote = document.querySelector("#note");
var quiz = document.querySelector("#quiz-area");
var answerCheck = document.querySelector("#check-answer");
var countdown = document.querySelector("#time-section");
var score = 0;
var userInitial = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var scoreBoard = document.querySelector("#scores");

var quizQuestions = [
    {
        quests: ["Which part of the HTML is the JavaScript linked in? "],
        choices: ["a. Head", "b. Body", "c. Footer", "d. Nav"],
        answer: ["b"]
    },
    {
        quests: ["Which of the following is not a commonly used data type?"],
        choices: ["a. Booleans", "b. Strings", "c. Numbers", "d. Element ID"],
        answer: ["d"]
    },
    {
        quests: ["What is the first index in an array?"],
        choices: ["a. 1", "b. 0", "c. -1", "d. 10"],
        answer: ["b"]
    },
    {
        quests: ["Which operator is used to assign a value to a variable in JavaScript?"],
        choices: ["a. #", "b. =", "c. ^ ", "d. * "],
        answer: ["b"]
    },
    {
        quests: ["How do you call a function called 'myFunction'?"],
        choices: ["a. use = myFunction", "b. function == myFunction", "c. myFunction()", "d. call myFunction()"],
        answer: ["c"]
    },
    {
        quests: ["How can you add a comment in JavaScript?"],
        choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment'", "d. **This is a comment"],
        answer: ["a"]
    },
    {
        quests: ["Which event occurs when the user clicks on an HTML element?"],
        choices: ["a. touch", "b. onMouse", "c. onTouch", "d. onclick"],
        answer: ["d"]
    },
    {
        quests: ["How do you declare a variable in JavaScript?"],
        choices: ["a. v e", "b. v my", "c. va", "d. v"],
        answer: ["c"]
    }
];

function startQuiz() {
    showQuestion(questionNumber);
    remainingTime();
    answerButtons.style.display = "block";
    intro.style.display = "none"; 
    askQuestion.style.display = "block";
    
}

var clock = document.getElementById("timeleft");
var secondsLeft = 90;

function remainingTime() {
    var timer = setInterval(function () {

        secondsLeft--;
        clock.textContent = "Time left: " + secondsLeft + " s";

        if (secondsLeft <= 0){
            clearInterval(clock);
            clock.textContent = "Time is up!";
            gameOver();
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
            userAnswer(event);
            questionNumber++;
            showQuestion(questionNumber);
            
    }
    else {
        gameOver();
    }
  
}

function userAnswer(event) {
    // event.preventDefault();
    answerCheck.style.display = "block";
    setTimeout(function () {
        answerCheck.style.display = 'none';
    }, 1000);
   
  
    if (quizQuestions[questionNumber].answer == event.target.value) {
        answerCheck.textContent = "Correct!"; 
        score = score + 1;
    }

    else{

        secondsLeft = secondsLeft - 10;
        answerCheck.textContent = "incorrect";
    }
    
}





var questionCount = 0;



function gameOver() {
askQuestion.style.display = "none";
countdown.textContent = "";
answerCheck.style.display = "none";
answerButtons.style.display = "none";
finalNote.textContent = "You answered " + score + "/8 correct!";
}

submitBtn.addEventListener("click", function () {
    var initials = userInitial.value;

    if (initials === null) {
        
        console.log("No value entered!");

    } else {
        var finalScore = {
            initials: initials,
            score: score
        }
        console.log(finalScore);
        var allScores = localStorage.getItem("allScores");
        if (allScores === null) {
            allScores = [];
        } else {
            allScores = JSON.parse(allScores);
        }
        allScores.push(finalScore);
        var newScore = JSON.stringify(allScores);
        localStorage.setItem("allScores", newScore);
        // Travels to final page
        // window.location.replace("");
    
        askQuestion.textContent = allScores.value + "hjhj";
        
        
        
        
    }
});




startBtn.addEventListener("click", startQuiz);
answerButtons.addEventListener("click", showQuestion(questionNumber) );