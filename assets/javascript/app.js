// var questions = [
//   {
//   question: "Which one of these characters did Angela not date?"
//   answers: {
//     a: "The Senator",
//     b: "Dwight",
//     c: "State Senator",
//     d: "Andy"
//   },
//   correctAnswer: "a"
// },
// {
//   question: "In season 5, who replaces Pam as the new receptionist?"
//   answers: {
//     a: "Kelly",
//     b: "Erin",
//     c: "Phyllis",
//     d: "Creed"
//   },
//   correctAnswer: "b"
//   },
//   {
//     question: "What is Creed Bratton's official job title?"
//     answers: {
//       a: "Salesman",
//       b: "Accountant",
//       c: "No one knows",
//       d: "Quality Assurance Director"
//     },
//     correctAnswer: "d"
//     },
//     {
//       question: "When did Jim buy Pam's engagement ring?"
//       answers: {
//         a: "While Pam was engaged to her first fiancé Roy",
//         b: "While Pam was away at Art School in New York City",
//         c: "The first week that Jim and Pam started dating",
//         d: "He never bought a ring"
//       },
//       correctAnswer: "c"
//       },
//       {
//         question: "In season 5, when Michael Scott leaves Dunder Miflin, what is the name of his new paper company?"
//         answers: {
//           a: "The Dundees Paper Company",
//           b: "Michael Scott Paper Company",
//           c: "The Paper Connection",
//           d: "PaperRUs"
//         },
//         correctAnswer: "b"
//         },
//         {
//           question: "In season 1, episode 2 'Diversity Day', Michael imitates which famous comedians stand up routine?"
//           answers: {
//             a: "Richard Pryor",
//             b: "Robin Williams",
//             c: "Chris Rock",
//             d: "George Carlin"
//           },
//           correctAnswer: "c"
//           },
// ]

// on the start button click
$("#startBtn").on("click", function() {
  $(".back-white").css("background", "white");
  $("#timeDiv").html("<h2>Time Remaining:<span id='timer'</span></h2>");
  $("#startBtn").hide();
})
