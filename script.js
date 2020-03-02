// create Q&A object (or array)
	
var questionsAnswers = [
    {q: "What do you type at the start of a line of code to make it pseudocode?",
    1: "<",
    2: "//",
    3: "\\",
    4: "<ps>",
    a: 2
    },
    {q: "What is '.js'?",
    1: "A website containing javascript documentation",
    2: "A designator indicating a main page of content",
    3: "The file extension for a javascript file",
    4: "A standalone piece of code to put in the head of your document to activate javascript",
    a: 3
    },
    {q: "What symbol, effectively used as shorthand some might say, becomes available to us when we use jQuery?",
    1: "#",
    2: "+",
    3: "@",
    4: "$",
    a: 4
    },
    {q: "What would you write to return the value in an array (named Array) in a given place in the said array?",
    1: "Array.charAt",
    2: "Array.indexOf",
    3: "Array[i]",
    4: "parseInt(Array)",
    a: 3
    },
    {q: "What does DOM stand for?",
    1: "Document Object Model",
    2: "Document Overall Model",
    3: "DOM Object Model",
    4: "Document Object Markup",
    a: 1
    }
]

// create start button (HTML is fine)

// attach a click event
var startBtn = document.querySelector("#start");

function startTime(){
var timeleft = 74;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "KEYBOARDS DOWN";
  } else {
    document.getElementById("time").innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
}

// generate first question + answer options (buttons +data attributes or IDs to 		track which was clicked and which was correct)
function generateNextQuestion(){
    document.querySelector("#main-content-area").innerHTML = ""      
    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
        var question = questionsAnswers[i].q;
        
        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);
      
        var button = document.createElement("button");
        button.textContent = "Complete";
      
        li.appendChild(button);
        todoList.appendChild(li);
        }
          
}


// if target === a then generate next question
// else take 5 seconds off timer and generate next question
// start timer count down (set interval)
startBtn.onclick = function () {
    var timeLeft = 75,
        display = document.querySelector('#time');
    startTime(timeLeft, display);
    generateNextQuestion();
};


	// add “click” event @all buttons to track score etc, assign to correct answers counter
	
		// increment question counter

		// generate question

		// if incorrect, subtract time from clock

		// if done
			
			// generate form for user 

			// save score to local storage

			// clear page and display all scores in local storage 