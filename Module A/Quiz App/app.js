var questions = [
  {
    question: "HTTP Stand for  _____________",
    option: [
      "hyper markup",
      "JS",
      "hyper text markup language",
      "cascading style sheet",
    ],
    correctAns: "hyper text markup language",
  },
  {
    question: "JS stands for _____________",
    option: ["java script", "hyper text markup language", "css", "html"],
    correctAns: "java script",
  },
  {
    question: "CSS stands for _____________",
    option: [
      "cascading style sheet",
      "hyper text markup language",
      "Java Script",
      "html",
    ],
    correctAns: "cascading style sheet",
  },

  {
    question: "RAM stands for _____________",
    option: [
      "random access memoery",
      "hyper text markup language",
      "html",
      "html",
    ],
    correctAns: "random access memoery",
  },
  {
    question: "ROM stands for _____________",
    option: ["read only memory", "hyper text markup language", "html", "html"],
    correctAns: "read only memory",
  },
];
var displayQuestion = document.getElementById("question");
var answerQuestion = document.getElementById("answers");
var currentquestion = document.getElementById("currentquestion");
var totalquestion = document.getElementById("totalquestion");
var indexVal = 0;
var marks = 0;
function render() {
  var obj = questions[indexVal];
  currentquestion.innerHTML = indexVal + 1;
  totalquestion.innerHTML = questions.length;
  displayQuestion.innerHTML = obj.question;
  answerQuestion.innerHTML = "";
  for (var i = 0; i < obj.option.length; i++) {
    answerQuestion.innerHTML += `
        <button onclick="correct('${obj.correctAns}','${obj.option[i]}')" class="btn-1">${obj.option[i]}</button>
    `;
  }
}
function next() {
  if (indexVal + 1 == questions.length) {
    alert("Your quiz have finished " + "And your marks are " + "5 / " + marks);
    indexVal = 0;
    marks = 0;
    render();
  } else {
    indexVal++;
    render();
  }
}
function correct(a, b) {
  if (a == b) {
    // alert("correct")
    marks = marks + 1;
  }

  next();
}
render();
