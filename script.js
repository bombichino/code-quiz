// create Q&A object (or array)
	
var questionsAnswers = [
    {q: "What do you type at the start of a line of code to make it pseudocode?",
    options: ['//', '*', 'hey girl', '<ps>'],
    answer: 0
    // l: "test",
    // m: "//",
    // n: "hey girl",
    // o: "<ps>",
    // a: "m"
    },
    {q: "What is '.js'?",
    options: ["A website containing javascript documentation", "A designator indicating a man page of content", "The file extension for a javascript file", "A standalone piece of code to put in the head of your document to activate javascript"],
    answer: 2
    // l: "A website containing javascript documentation",
    // m: "A designator indicating a main page of content",
    // n: "The file extension for a javascript file",
    // o: "A standalone piece of code to put in the head of your document to activate javascript",
    // a: "n"
    },
    // {q: "What symbol, effectively used as shorthand some might say, becomes available to us when we use jQuery?",
    // l: "#",
    // m: "+",
    // n: "@",
    // o: "$",
    // a: "o"
    // },
    // {q: "What would you write to return the value in an array (named Array) in a given place in the said array?",
    // 1: "Array.charAt",
    // 2: "Array.indexOf",
    // 3: "Array[i]",
    // 4: "parseInt(Array)",
    // a: 3
    // },
    // {q: "What does DOM stand for?",
    // 1: "Document Object Model",
    // 2: "Document Overall Model",
    // 3: "DOM Object Model",
    // 4: "Document Object Markup",
    // a: 1
    // }
]

// create start button (HTML is fine)

// attach a click event
var startBtn = document.querySelector("#start");
var timeLeft = 74;

function startTime(){
var downloadTimer = setInterval(function(){
  if(timeLeft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "KEYBOARDS DOWN";
  } else {
    document.getElementById("time").innerHTML = timeLeft;
  }
  timeLeft -= 1;
}, 1000);
}

function showQuiz() {
    var quizQuestions = document.getElementById("quiz-questions");
    if (quizQuestions.style.display === "none") {
      quizQuestions.style.display = "block";
    } else {
      quizQuestions.style.display = "none";
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
    
      button.addEventListener("click", function(event){
        console.log("you clicked on the option with the index: " + index);
        // if (index) {}
        if (index === questionsAnswers[0].answer){
          console.log("correct answer")
        }
        else {
          console.log("wrong answer")
          // decrease counter
          timeLeft -=5;
        }
        currentQuestion++;
        generateNextQuestion();
      })

      // check if right answer. so compare selected button to the answer
    
    
      // onclick compare whatever answer is in that given object and it would clear the text and replace with the text in the next element in the array, and display whether its right or wrong and take away time from the timer
    });
}

function clickChoice(){

}


// if target === a then generate next question
// else take 5 seconds off timer and generate next question
// start timer count down (set interval)
startBtn.onclick = function () {
    var timeLeft = 75,
        display = document.querySelector('#time');
    startTime(timeLeft, display);
    document.querySelector("#main-content-area").innerHTML = "";
    showQuiz();
    generateNextQuestion();
};



function clickChoice(){

}

	// add “click” event @all buttons to track score etc, assign to correct answers counter
	
		// increment question counter

		// generate question

		// if incorrect, subtract time from clock

		// if done
			
			// generate form for user 

			// save score to local storage

			// clear page and display all scores in local storage 