// first i defined all of the following variables; a lot of queryselectors used to manipulated html and css via javascript
var startBtn = document.querySelector("#start-button");
var intro = document.querySelector("#intro");
var heading = document.querySelector("#heading")
var introduct = document.querySelector("introduct");
var askQuestion = document.querySelector("#ask-question");
var answerBtn1 = document.querySelector("#answer-btn1");
var answerBtn2 = document.querySelector("#answer-btn2");
var answerBtn3 = document.querySelector("#answer-btn3");
var answerBtn4 = document.querySelector("#answer-btn4");
var answerButtons = document.querySelector("#choices");
var finalNote = document.querySelector("#note");
var quiz = document.querySelector("#quiz-area");
var timeBox = document.querySelector("#time-section");
var answerCheck = document.querySelector("#check-answer");
var countdown = document.querySelector("#time-section");
var score = 0;
var questionNumber = 0;
var userInitial = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit");
var scoreBoard = document.querySelector("#scores");

// this is the object of the 8 questions in the quiz
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
        choices: ["a. variable = apple;", "b. v * apple", "c. var apple;", "d. v is apple"],
        answer: ["c"]
    }
];

// this function starts the quiz timer and displays the first multiple choice question
function startQuiz() {
    showQuestion(questionNumber);
    remainingTime();
    answerButtons.style.display = "block";
    intro.style.display = "none"; 
    askQuestion.style.display = "block";
    
}

// sets variables needed for the timer to function
var clock = document.getElementById("timeleft");
var secondsLeft = 90;

// this tells the timer how to function; timer starts, displays countdown on page
function remainingTime() {
    var timer = setInterval(function () {
// displays countdown on page
        secondsLeft--;
        clock.textContent = "Time left: " + secondsLeft + " s";
// when timer reaches zero; quiz ends
        if (secondsLeft <= 0){
            clearInterval(clock);
            clock.textContent = "Time is up!";
            gameOver();
        }
        else {
            
        }
    
}, 1000);
}


// assigns questions in object to display on page
function showQuestion(questionNumber) {
   
    askQuestion.textContent = quizQuestions[questionNumber].quests[0];
    answerBtn1.textContent = quizQuestions[questionNumber].choices[0];
    answerBtn2.textContent = quizQuestions[questionNumber].choices[1];
    answerBtn3.textContent = quizQuestions[questionNumber].choices[2];
    answerBtn4.textContent = quizQuestions[questionNumber].choices[3];
    
}

// this below function deals with transitioning to next questions and ending quiz after last question is answered
answerButtons.onclick = () => {
   
    // when user clicks the answer button page transitions to next question
    if (questionNumber < quizQuestions.length - 1){
        userAnswer(event);
        questionNumber++;
        showQuestion(questionNumber);
        
    }
    // when user answers last question page will display if their answer was wrong/right then end quiz
    else if (questionNumber == 7){
        userAnswer(event);
        setTimeout(function () {
            gameOver();
        }, 500);
          
    
}
    else {
        gameOver();
    }

    
}


// checks in the users answer matches the correct answer assigned in the quiz questions object
// also displays 'correct' or 'incorrect' to user
function userAnswer(event) {

    // sets a time limit on how long 'correct' or 'incorrect' display on page
    answerCheck.style.display = "block";
    setTimeout(function () {
        answerCheck.style.display = 'none';
    }, 600);
   
//   evaluates if user answer is correct and displays 'correct'
    if (quizQuestions[questionNumber].answer == event.target.value) {
        answerCheck.textContent = "Correct!"; 
        score = score + 1;
        console.log(quizQuestions[questionNumber].answer);
        console.log(event.target.value);

    }
   
    // if users answer is incorrect; subtracts 10 seconds from timer and displays 'incorrect' on page
    else{

        secondsLeft = secondsLeft - 10;
        answerCheck.textContent = "Incorrect!";
    }
    
}

// ends quiz; manipulates styling to transition to the user seeing their final score
// prompts user to enter their initials then click a submit button
function gameOver() {
heading.textContent = "Thanks for taking the Code Quiz!";
document.getElementById("heading").style.paddingBottom = "60px";
startBtn.style.display = "none";
askQuestion.style.display = "none";
timeBox.style.display = "none";
countdown.textContent = "";
answerCheck.style.display = "none";
answerButtons.style.display = "none";
scoreBoard.style.display = "block";
finalNote.textContent = "You answered " + score + "/8 correct!";
document.getElementById("note").style.fontSize = "40px";
}

// when user clicks submit their initials and score are saved to local storage
submitBtn.addEventListener("click", function () {
    var initials = userInitial.value;

    if (initials === null) {
        
        console.log("No value entered!");
    } 
    
    else {
        // defines format of object to be saved in localstorage
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
        // Travels to another page where the users initials and scores will be displayed in a list
        window.location.replace("./score.html");
        
    }
});

// when user clicks the start button the startquiz function displays the quiz and starts the timer
startBtn.addEventListener("click", startQuiz);
