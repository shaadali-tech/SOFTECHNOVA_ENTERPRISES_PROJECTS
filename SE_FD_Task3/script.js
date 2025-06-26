const questions = [
  {
    question: "What is the capital of India?",
    options: ["lucknow", "Agra", "Mumbai", "Delhi"],
    answer: "Delhi"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Python", "Java", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Who developed the theory of relativity?",
    options: ["Isaac Newton", "Albert Einstein", "Galileo", "Nikola Tesla"],
    answer: "Albert Einstein"
  }
];

let currentQuestion = 0;
let score = 0;

const quizBox = document.getElementById('quiz-box');
const resultBox = document.getElementById('result-box');
const scoreDisplay = document.getElementById('score');

function showQuestion() {
  const q = questions[currentQuestion];
  quizBox.innerHTML = `
    <h2>${q.question}</h2>
    <div>
      ${q.options.map(option => `
        <button onclick="selectAnswer(this, '${option}')">${option}</button>
      `).join('')}
    </div>
  `;
}

function selectAnswer(button, selected) {
  const correct = questions[currentQuestion].answer;
  const buttons = quizBox.querySelectorAll('button');

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correct) {
      btn.classList.add('correct');
    } else if (btn.innerText === selected) {
      btn.classList.add('incorrect');
    }
  });

  if (selected === correct) {
    score++;
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      quizBox.classList.add('hidden');
      resultBox.classList.remove('hidden');
      scoreDisplay.innerText = score + " / " + questions.length;
    }
  }, 1000);
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizBox.classList.remove('hidden');
  resultBox.classList.add('hidden');
  showQuestion();
}

showQuestion();
