var quizQuestions = document.getElementById("quiz-questions");
var timer = document.getElementById("timer");
var Startbtn = document.getElementById("start-btn");
var clock = document.getElementById("clock");
var titleIt = document.getElementById("titleIt");
var nextQuestions;
var questionanswers = document.getElementById("question-answers");
var myScore = document.getElementById("score");
var submitBtn = document.getElementById("submitBtn");
var currentindex = 0;
var score = 0;
var count = 120;
var alert =document.getElementById("alert");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
{ subject: "1. What does css stand for?",
choices: ["Cascading Style Sheets","Colorful Style Sheets","Computer Style Sheets", "Common Style Sheets"],
answer : "Cascading Style Sheets"    
},
{ subject: "2. Which year html introduced?",
    choices: ["2005","1995","1993", "2015"],
    answer : "1993"    
},
{ subject: "3. Who invented the internet?",
    choices: ["Steve Jobs","Vint Cerf","Bill Gates", "Albert Einstein"],
    answer : "Vint Cerf"    
},
{ subject: "4. When internet was invented?",
    choices: ["1870","1930","1960","1990"],
    answer : "1960"    
},
{ subject: "5. Which one is largest technology company by revenue? ",
choices: ["Apple","Amazon","AT&T","Samsung"],
answer : "Amazon"    
},
{ subject: "6. Who created the like button on facebook? ",
choices: ["Mark Zuckerberg","Madonna","Justin Rosenstein","Borat"],
answer : "Justin Rosenstein"    
},
{ subject: "7. When microsoft was founded?  ",
choices: ["1995","1965","1985","1975"],
answer : "1975"    
},
{ subject: "8. Which country has best supercomputer?",
choices: ["Japan","USA","Russia","China"],
answer : "Japan"    
},
{ subject: "9. Where is fastest internet in the world?",
choices: ["USA","South Korea","North Korea","Taiwan"],
answer : "Taiwan"    
},
{ subject: "10. Did you liked this quiz?",
choices: ["I don't know","No","Yes","You'll see"],
answer : "You'll see"    
},
]

Startbtn.addEventListener("click", starQuiz);
function starQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.classList.add("d-none")
    Startbtn.classList.add("d-none")
    clock.classList.remove("d-none")
    quizQuestions.classList.remove("d-none")
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.subject)
    
        displayQuestion(nextQuestions)
    gametime()
}
submitBtn.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});
function gametime(){
    var timeinterval = setInterval(function(){
        count--;
        timer.textContent = count
        if (count === 0) {
            clearInterval(timeinterval)
            endgame()
        }
        }, 1000);
}
function scorePage(a, b) {
    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);
    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}
function displayQuestion(question){
    titleIt.innerText=question.subject
    question.choices.forEach(element => {
     var button =document.createElement("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element

    questionanswers.appendChild(button)
    button.addEventListener("click", displaynextQuestion)
    });
}
function displaynextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            displayQuestion(nextQuestions)  
        }else {
            currentindex = 0
            displayQuestion(nextQuestions)  
        }
    }else{
        console.log("endgame")
        endgame()
    }
}
    function correction(response){
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -10
        timer.innerHTML = count
        console.log("Wrong")
    }
}
 function endgame (){
    myScore.innaText = count
    addscore.classList.remove("d-none")
    clock.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")
 }
