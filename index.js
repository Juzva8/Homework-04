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
var count = 75;
var alert =document.getElementById("alert");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
{ title: "1. What does css stand for?",
choices: ["Cascading Style Sheets","Colorful Style Sheets","Computer Style Sheets", "Common Style Sheets"],
answer : "Cascading Style Sheets"    
},
{ title: "2. Which year html introduced?",
    choices: ["2005","1995","1993", "2015"],
    answer : "1993"    
},
{title: "3. Who invented the internet?",
    choices: ["Steve Jobs","Vint Cerf","Bill Gates", "Albert Einstein"],
    answer : "Vint Cerf"    
},
{title: "4. When internet was invented?",
    choices: ["1870","1930","1960","1990"],
    answer : "1960"    
},
{title: "5. Which one is largest technology company by revenue? ",
choices: ["Apple","Amazon","AT&T","Samsung"],
answer : "Amazon"    
},
{title: "6. Who created the like button on facebook? ",
choices: ["Mark Zuckerberg","Priscilla Chan","Justin Rosenstein","Sean Parker"],
answer : "Justin Rosenstein"    
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
    console.log(nextQuestions.title)
    
        displayQuestion(nextQuestions)

    gametime()
}
submitBtn.addEventListener("click" , function(){
    let name = document.getElementById("inputScore").value
    scorePage(name, count)
});

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);
//     if (count < 0)
//     endgame();      

// cant stop timer going negative. 
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
    titleIt.innerText=question.title
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
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

       
}
 function endgame (){

    myScore.innaText = count
    addscore.classList.remove("d-none")
    clock.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")
 }