// Retreives local stroage 

var highScore = document.querySelector("#scorelist");
var retry = document.querySelector("#retry");
var clearScores = document.querySelector("#clear");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);


if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}

clearScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

retry.addEventListener("click", function () {
    window.location.replace("./index.html");
});

