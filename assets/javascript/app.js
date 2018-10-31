var correct = 0;
var incorrect = 0;
var question = null;
var answerA= null;
var answerB= null;
var answerC= null;
var answerD= null;
var seconds = 45;
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

var getQuestions = function () {
  for (var i = 0; i < questions.length + 1; i++) {
      $("#questionDiv").html(`<h3>${question}</h3>`);
      $("#choiceA").html(`<div class="questionOptions"><input  type="radio" name="option" id="AnswerA" value="a">${answerA}<label id="choiceA" for="AnswerA"></label></div>`)
      $("#choiceB").html(`<div class="questionOptions"><input  type="radio" name="option" id="AnswerB" value="b">${answerB}<label id="choiceB" for="AnswerB"></label></div>`)
      $("#choiceC").html(`<div class="questionOptions"><input  type="radio" name="option" id="AnswerC" value="c">${answerC}<label id="choiceC" for="AnswerC"></label></div>`)
      $("#choiceD").html(`<div class="questionOptions"><input  type="radio" name="option" id="AnswerD" value="d">${answerD}<label id="choiceD" for="AnswerD"></label></div>`)
      question = questions[i].question;
      answerA = questions[i].answers.a;
      answerB =questions[i].answers.b;
      answerC =questions[i].answers.c;
      answerD =questions[i].answers.d;

  }
}








// function passing into the setInterval function argument
var tick = function () {
    seconds--;
    $("#timeDiv").html(`<h2>Time Remaining: ${seconds} seconds</h2>`);
    if (seconds == 0) {
      clearInterval(intervalId);
      // eventually write on the display you ran out of time and then move on to the next question
      alert("Times up!")

    }
}

var timer = function (){
  intervalId = setInterval(tick, 1000);
}

// on the start button click
$("#startBtn").on("click", function() {
  $(".back-white").css("background", "white");
  $("#startBtn").hide();
  getQuestions()
  timer()
})
