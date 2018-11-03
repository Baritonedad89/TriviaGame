var correct = 0;
var incorrect = 0;
var submitBtn = null;
var seconds = 120;
var intervalId = null;

// for (var i = 0; i < questions.length; i++) {
// 	console.log(`The answer to ${questions[i].question} is ${questions[i].correctAnswer}`) }

var questions = [{
    question: "Which one of these characters did Angela not date?",
    answers: {
      a: "The Senator",
      b: "Dwight",
      c: "State Senator",
      d: "Andy"
    },
    correctAnswer: "a"
  },
  {
    question: "In season 5, who replaces Pam as the new receptionist?",
    answers: {
      a: "Kelly",
      b: "Erin",
      c: "Phyllis",
      d: "Creed"
    },
    correctAnswer: "b"
  },
  {
    question: "In season 7, episode 17 Michael finally debuts his action film to the office after ten years of writing, schooting, re-shooting and editing. What is the name of this film?",
    answers: {
      a: "Code Red Threat",
      b: "Threat Level Midnight",
      c: "Scarn vs. Goldenface",
      d: "Michael Bond"
    },
    correctAnswer: "b"
  },
  {
    question: "What is Creed Bratton's official job title?",
    answers: {
      a: "Salesman",
      b: "Accountant",
      c: "No one knows",
      d: "Quality Assurance Director"
    },
    correctAnswer: "d"
  },
  {
    question: "When did Jim buy Pam's engagement ring?",
    answers: {
      a: "While Pam was engaged to her first fiancé Roy",
      b: "While Pam was away at Art School in New York City",
      c: "The first week that Jim and Pam started dating",
      d: "He never bought a ring"
    },
    correctAnswer: "c"
  },
  {
    question: "In season 5, when Michael Scott leaves Dunder Miflin, what is the name of his new paper company?",
    answers: {
      a: "The Dundees Paper Company",
      b: "Michael Scott Paper Company",
      c: "The Paper Connection",
      d: "PaperRUs"
    },
    correctAnswer: "b"
  },
  {
    question: "In season 1, episode 2 'Diversity Day', Michael imitates which famous comedians stand up routine?",
    answers: {
      a: "Richard Pryor",
      b: "Robin Williams",
      c: "Chris Rock",
      d: "George Carlin"
    },
    correctAnswer: "c"
  },
  {
    question: "Which was NOT a prank that Jim successfully pulled on Dwight?",
    answers: {
      a: "Classical conditioning Dwight to expect a mint at the sound of a computer log-in bell",
      b: "Jim impersonates Dwight by dressing up as a Dwight look-alike",
      c: 'Tricking Dwight into trading a $150 telescope for "miracle legumes" ',
      d: "Stealing beets from Dwight's bed-and-breakfast and beet farm"
    },
    correctAnswer: "d"
  },
]

var questionArray = [];
var optionsArray = [];



var getQuestions = function () {
  for (var i = 0; i < questions.length ; i++) {
    // creates a new div for each answer
    var newDiv = $(`<div>${questions[i].question}</div>`)
    var newRadioBtnA = $(`<div id="format-answers"><input type="radio" name="question-${i}-option" id="AnswerA" value="a"><label id="choiceA" for="AnswerA">${questions[i].answers.a}</label></div>`)
    var newRadioBtnB = $(`<div id="format-answers"><input type="radio" name="question-${i}-option" id="AnswerB" value="b"><label id="choiceB" for="AnswerB">${questions[i].answers.b}</label></div>`)
    var newRadioBtnC = $(`<div id="format-answers"><input type="radio" name="question-${i}-option" id="AnswerC" value="c"><label id="choiceC" for="AnswerC">${questions[i].answers.c}</label></div>`)
    var newRadioBtnD = $(`<div id="format-answers"><input type="radio" name="question-${i}-option" id="AnswerD" value="d"><label id="choiceD" for="AnswerD">${questions[i].answers.d}</label></div>`)

    // appends all radio buttons to the contentDiv
    $("#contentDiv").append(newDiv)
    $("#contentDiv").append(newRadioBtnA)
    $("#contentDiv").append(newRadioBtnB)
    $("#contentDiv").append(newRadioBtnC)
    $("#contentDiv").append(newRadioBtnD)


  }
}

// function passing into the setInterval function argument
var tick = function () {
    seconds--;
    $("#timeDiv").html(`<h2>Time Remaining: ${seconds} seconds</h2>`);
    if (seconds == 0) {
      clearInterval(intervalId);
      // eventually write on the display you ran out of time and then move on to the next question
      // alert("Times up!")
    }
}

var timer = function (){
  intervalId = setInterval(tick, 1000);
}
var submitBtn = null;
// on the start button click
$("#startBtn").on("click", function() {
  $(".back-white").css("background", "white");
  $("#startBtn").hide();
  getQuestions()
  timer()
  submitBtn = $("#submit").html("<button>submit</button")
  showResults()
})

var showResults = function () {
  $(submitBtn).on("click", function (){
    getResults()
    console.log("working")
    $("#contentDiv").hide()
    $("#timeDiv").hide()
    $("#submit").hide()
    $("#resultsDiv").show();
    $("#resultsDiv").html()
    $("#reset-game").on("click", resetGame)

  })
}
// reset game function
var resetGame = function (){
  $(".back-white").css("background", "white");
  var correct = 0;
  var incorrect = 0;
  $("#resultsDiv").hide();
  $("#contentDiv").show()
  $("#submit").show()
  timer()
}
 // runs the reset game function when the play again button is clicked 
$("#reset-game").on("click",resetGame)

var userAnswer = null;
var getResults = function () {
  correct = 0;
  for (var i = 0; i < questions.length ; i++) {
  var currentQuestion = questions[i].correctAnswer;
  userAnswer = $(`input[name=question-${i}-option]:checked`).val()

    if (userAnswer === currentQuestion) {
      correct++;
      console.log(`correct count is ${correct}`);
      console.log("I think this is working right!");
    } else {
      incorrect++
      console.log(`incorrect count is ${incorrect}`);

	  console.log("wrong!");
  }
}
}

//submit-quiz is a class on a button at the end of the trivia quiz
// $(".submit-quiz").click(showResults);

//submit-quiz is a class on a button at the end of the trivia quiz
// $(".submit-quiz").click(showResults);



// var getBtnText = function (){
// $("input").on("click", function(){
//   $(this).text.().toString().trim()
//
// })
// }
