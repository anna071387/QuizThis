// creating declarations for buttons

const startButton = document.getElementById("start-btn2");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
// const scoreButton = document.getElementById('scores-btn3')

// Gets answers implemented into answers buttons
const questionElement = document.getElementById("question");
const answersButtonsElement = document.getElementById("answers-buttons");

var sec = 61;
var score = 0;
var form = document.getElementById("initials");

let shuffledQuestions, currentQuestionIndex;

// adds event listener to the buttons start and next
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

//  At the begining of the quiz when you clin on the start button it disapears
function startGame() {
  sec = 61;
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
  form.classList.add("hide");

  function startTimer() {
    var timer = setInterval(function () {
      sec--;
      document.getElementById("timerDisplay").innerHTML = "00:" + sec;
      if (sec < 0) {
        clearInterval(timer);
        alert("Time is up!");
        nextButton.classList.add("hide");
        form.classList.remove("hide");
        startButton.innerText = "Restart";
          startButton.classList.remove("hide");

      }
    }, 1000);
  }

  startTimer();
}

// Sets action for when next button clicked, the question switches randomly
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerText = answers.text;
    button.classList.add("btn");
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }

    button.addEventListener("click", selectAnswer);
    answersButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answersButtonsElement.firstChild) {
    answersButtonsElement.removeChild(answersButtonsElement.firstChild);
  }
}
// Function that allows to select an answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  //   Array.from(answersButtonsElement.children).forEach((button) => {
  //     setStatusClass(button, button.dataset.correct);
  //   });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
    form.classList.remove("hide");
  }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();
  var fname = document.getElementById("fname");
  localStorage.setItem(fname.value, score);
  
});

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    score += 1;
  } else {
    element.classList.add("wrong");
    sec -= 5;
    document.getElementById("timerDisplay").innerHTML = "00:" + sec;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//  upon the game ending reveal the form

// add the ability to get the initals of the user upin clicking the submit button
// get the score
// when click submit store initial and score to localStorage
// score button activated
// pull local storage of high scores to show the results

//
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<js>", correct: false },
      { text: "<script>", correct: true },
      { text: "<string>", correct: false },
      { text: "<javascript>", correct: false },
    ],
  },
  {
    question:
      'What is the correct JavaScript syntax to change the content of the HTML element <p id="demo">This is a demostration.</p>',
    answers: [
      {
        text: 'document.getElementById("demo").innerHTML = "Hello World!',
        correct: true,
      },
      {
        text: 'document.getElement("p").innerHTML = "Hello World!"',
        correct: false,
      },
      { text: '#demo.innerHTML = "Hello World!"', correct: false },
      {
        text: 'document.getElementByName("p").innerHTML = "Hello World!"',
        correct: false,
      },
    ],
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: [
      { text: "The <head> section", correct: false },
      { text: "The <body> section", correct: false },
      { text: "Both the <head> section and the <body> section", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function myFinction()", correct: true },
      { text: "function:myFunction()", correct: false },
      { text: "function = myFunction()", correct: false },
      { text: "function; myFunction()", correct: false },
    ],
  },
  {
    question: 'How do you call a function named "myFunction"?',
    answers: [
      { text: "hey Function()", correct: false },
      { text: "call myFunction()", correct: false },
      { text: "calling function myFunction()", correct: false },
      { text: "myFunction()", correct: true },
    ],
  },
];

var scores = [{ init: "Anna", score: 80 }];
localStorage.setItem("scores", JSON.stringify(scores));
JSON.stringify(scores);
console.log(JSON.stringify(scores));

// const or var scores = localStorage.getItem("scores");

// let sec

// const questions = [{
//     question1 =" Why?"
//     answers = ["because", "why not", "because why not"]
//     correct : "why not"
// }
// ]

// let currentQ =0
// function    showQuestion(index) {
//     const [] = questions[index]
//     const btnDiv = documnet.getElementById("btn-div")

//     for (let i=0; i >q.amswer.length; i++);
//     const button = document.creteElement("button");

//     button.textContent = q.answer[1]

//     btnDiv.append(button)
// }

//     showQuestion(currentQ)

//     window.addEventListener("click", (e) => {
//         if
//     })
