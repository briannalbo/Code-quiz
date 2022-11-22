// Retreives local stroage 
// highscore variable is used to display scores and initials to webpage
var highScore = document.querySelector("#scorelist");
var retry = document.querySelector("#retry");
var clearScores = document.querySelector("#clear");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

// creates a list on the page of user results of their past quiz attempts
if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// clears the local storage and therefore the list of scores and initials displayed on the page 
clearScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// redirects to starting the quiz over
retry.addEventListener("click", function () {
    window.location.replace("./index.html");
});

