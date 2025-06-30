// 1. Quiz Logic
const questions = [
  {
    q: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Transfer Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    q: "Which language runs in a web browser?",
    options: ["Java", "C", "JavaScript"],
    answer: "JavaScript"
  },
  {
    q: "What is CSS used for?",
    options: ["Styling", "Calculations", "Database"],
    answer: "Styling"
  }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText = questions[current].q;
  let opts = document.querySelectorAll(".option");
  opts.forEach((btn, i) => {
    btn.innerText = questions[current].options[i];
    btn.onclick = () => {
      if (btn.innerText === questions[current].answer) {
        alert("✅ Correct!");
      } else {
        alert("❌ Wrong!");
      }
      current++;
      if (current < questions.length) loadQuestion();
      else document.getElementById("question").innerText = "🎉 Quiz Completed!";
    };
  });
}

loadQuestion();

// 2. Carousel Logic
const images = [
  "https://via.placeholder.com/300/ff7f7f",
  "https://via.placeholder.com/300/7fbfff",
  "https://via.placeholder.com/300/7fff7f"
];

let index = 0;

function next() {
  index = (index + 1) % images.length;
  document.getElementById("slide").src = images[index];
}

// 3. API Fetch Logic
function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke-text").innerText = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("joke-text").innerText = "Failed to load joke.";
      console.error(err);
    });
}
