var storedScores = JSON.parse(localStorage.getItem("userData"));
var highScores = document.querySelector("#highScoresList");
var again = document.querySelector("#again");
var clearBtn = document.querySelector("#clearScores");
var Startbtn = document.querySelector("#start-btn")

function displayScores() {
    if (storedScores !== null) {
        var scoreList = document.createElement("ol");
        scoreList.className = "scoreListClass";
        for (var i = 0; i < storedScores.length; i++) {
            var initials = storedScores[i].inits;
            var scores = storedScores[i].userScore
            var scoreEntry = document.createElement("li");
            scoreEntry.innerHTML = initials + " - " + scores;
            scoreList.appendChild(scoreEntry);
        }
        highScores.appendChild(scoreList);
    }
};
displayScores();
again.addEventListener("click", function () {
    location.href = "index.html";
});

clearBtn.addEventListener("click", function () {
    highScores.innerHTML = "";
    window.localStorage.clear();
});


