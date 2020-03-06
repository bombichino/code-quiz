// create Q&A object (or array)
	
var questionsAnswers = [
    {q: "Question 1: What do you type at the start of a line of code to make it pseudocode?",
    options: ["//", "*", "hey girl", "<ps>"],
    answer: 0},
    {q: "Question 2: What is '.js'?",
    options: ["A website containing javascript documentation", "A designator indicating a man page of content", "The file extension for a javascript file", "A standalone piece of code to put in the head of your document to activate javascript"],
    answer: 2},
    {q: "Question 3: What symbol, effectively used as shorthand some might say, becomes available to us when we use jQuery?",
    options: ["#", "+", "@", "$"],
    answer: 3},
    {q: "Question 4: What code would you use to return what is in an array (named Array) in a given place in the said array?",
    options: ["Array.charAt", "Array.indexOf", "Array[i]", "parseInt(Array)"],
    answer: 2},
    {q: "Question 5: What does DOM stand for?",
    options: ["Document Object Model", "Document Overall Model", "DOM Object Model", "Document Object Markup"],
    answer: 0}
]

var allScores = []
// var allInitials = []

var introBlock = document.querySelector("#main-content-area");
var scorePage = document.querySelector("#score-page");
var seeScorePage = document.querySelector("#see-high-scores");

var startBtn = document.querySelector("#start");
var timeLeft = 74;

function startTime(){
var downloadTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "KEYBOARDS DOWN!";
    endQuiz();
    showQuiz();
  } else {
    document.getElementById("time").innerHTML = timeLeft;
  }
  timeLeft -= 1;
}, 1000);
}

function showIntro(){
  if (introBlock.style.display === "none") {
  introBlock.style.display = "block";
  } else {
  introBlock.style.display = "none";
  }
  if (seeScorePage.style.display = "none"){
    seeScorePage.style.display = "block";
  }
}

function hideSeeHighScores(){
  if (seeScorePage.style.display = "block"){
    seeScorePage.style.display = "none";
  }
}

function showQuiz() {
    var quizQuestions = document.getElementById("quiz-questions");
    if (quizQuestions.style.display === "none") {
      quizQuestions.style.display = "block";
    } else {
      quizQuestions.style.display = "none";
    }
    hideSeeHighScores();
  }

function endQuiz() {
  var scoreDisplay = document.getElementById("score-enter");
  var finalScore = document.getElementById("final-score");
  var yourScore = timeLeft;
  if (scoreDisplay.style.display === "none") {
    scoreDisplay.style.display = "block";
  } else {
    scoreDisplay.style.display = "none";
  }
  finalScore.textContent = yourScore;
  localStorage.setItem("yourScore", yourScore);
  // timeLeft = 0;
  hideSeeHighScores();
}
function showScore(){
  if (scorePage.style.display === "none") {
  scorePage.style.display = "block";
  } else {
  scorePage.style.display = "none";
  hideSeeHighScores();
  }
}

// generate first question + answer options (buttons +data attributes or IDs to 		track which was clicked and which was correct)
var currentQuestion = 0

function generateNextQuestion(){
    //for (var i = 0; i < questionAnswers.length; i++) {
    var question = document.querySelector("#question");
    var opt1 = document.querySelector("#option1");
    var opt2 = document.querySelector("#option2");
    var opt3 = document.querySelector("#option3");
    var opt4 = document.querySelector("#option4");
    var previousAnswer = document.querySelector("#result");

    console.log(questionsAnswers);

    question.textContent = questionsAnswers[currentQuestion].q;
    opt1.textContent = questionsAnswers[currentQuestion].options[0];
    opt2.textContent = questionsAnswers[currentQuestion].options[1];
    opt3.textContent = questionsAnswers[currentQuestion].options[2];
    opt4.textContent = questionsAnswers[currentQuestion].options[3];
    
    console.log('document.querySelectorAll(".btn.btn-secondary"):'); 
    console.log(document.querySelectorAll(".btn.btn-secondary"));

    document.querySelectorAll(".btn.btn-secondary").forEach(function(button, index) {
      console.log("index " + index + " correponds to:");
      console.dir(button);
      // create onclick listener
    
    button.addEventListener("click", function(){
        console.log("you clicked on the option with the index: " + index);
        event.stopImmediatePropagation();
        // if (index) {}
        if (index === questionsAnswers[currentQuestion].answer){
          console.log("Correct!");
          previousAnswer.textContent = "Correct!";
        }
        else {
          console.log("Incorrect");
          previousAnswer.textContent = "Incorrect";
          // decrease counter
          timeLeft -=5;
        }
    currentQuestion++;
    if (currentQuestion < questionsAnswers.length){ 
      generateNextQuestion();
    }
    else {
      showQuiz();
      endQuiz();
      timeLeft="STOP TIME";
      document.querySelector("#timer").style.display = "none";
    }
      

})
});
}

startBtn.onclick = function () {
    var timeLeft = 75,
        display = document.querySelector('#time');
    startTime(timeLeft, display);
    showIntro();
    showQuiz();
    generateNextQuestion();
};

document.querySelector("#submit").onclick = function (){
  event.preventDefault();

  var yourInitials = document.querySelector("#initials").value;
  var checkYourScore = document.querySelector("#here-is-yours");

  if (yourInitials === "") {
    alert("Error: Initials cannot be blank");
  } 
  else {
    var yourEntry = yourInitials+" ..... "+localStorage.yourScore;
    localStorage.setItem("yourEntry", yourEntry);
    // console.log(localStorage.yourEntry);
    document.querySelector("#here-is-yours").textContent = localStorage.yourEntry;
    document.querySelector("#score-enter").style.display = "none";
    // console.log(localStorage.allScores);  
    // my method for adding onto the screen
    // var li = document.createElement("li");
    // li.textContent = localStorage.yourEntry;
    // document.querySelector("#score-list").appendChild(li);    
    
      // var todoText = todoInput.value.trim();
    
      // Return from function early if submitted todoText is blank
      if (yourEntry === "") {
        return;
      }
      init();
      // Add new todoText to todos array, clear the input
      allScores.push(yourEntry);
      storeScores();
   
    showScore();
  }

};

var scoreList = document.querySelector("#score-list");

function renderScores() {

  for (var i = 0; i < allScores.length; i++) {
    var score = allScores[i];

    var li = document.createElement("li");
    li.textContent = score;
    li.setAttribute("data-index", i);

    scoreList.appendChild(li);
  }
}

function init() {
  var storedScores = JSON.parse(localStorage.getItem("allScores"));
  if (storedScores !== null) {
    allScores = storedScores;
  }
  renderScores();
}

function storeScores() {
  localStorage.setItem("allScores", JSON.stringify(allScores));
}

document.querySelector("#test-again").onclick = function (){
  location.reload();
  };

document.querySelector("#clear-scores").onclick = function (){
  localStorage.clear();
  document.querySelector("#here-is-yours").innerHTML = "";
  document.querySelector("#score-list").innerHTML = "";

  };

document.querySelector("#see-high-scores").onclick = function(){
  showIntro();
  hideSeeHighScores();
  showScore();
  init();
}
	