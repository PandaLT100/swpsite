// Dark Mode
if (!localStorage.getItem("theme")) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  localStorage.setItem("theme", prefersDark ? "dark" : "light");
}

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  const icon = document.getElementById("theme-icon");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) icon.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    if (icon) icon.textContent = "🌙";
  }
});

function darkMode() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  const isDark = body.classList.toggle("dark-mode");

  localStorage.setItem("theme", isDark ? "dark" : "light");
  if (icon) icon.textContent = isDark ? "☀️" : "🌙";
}



//Lesson 1 Quiz//

function checkAnswer() {
    let form = document.getElementById('qone');
    let userAnswer = form.answer.value;
    let correctAnswer = 'hola';

if (userAnswer === correctAnswer) {
    document.getElementById('resulta').innerText = "Correct!"
} else {
    document.getElementById('resulta').innerText = "Incorrect. Try again! :D"
}
}

function checkAn() {
    let formtwo = document.getElementById('qtwo');
    let usAnswer = formtwo.answer.value;
    let correctAn = 'yusted';

    if (usAnswer === correctAn) {
        document.getElementById('resultb').innerText = "Correct!"
    } else {
        document.getElementById('resultb').innerText = "Incorrect :(. Keep trying!"
    }
    }

function checkAns() {
    let formthree = document.getElementById('qthree');
    let unan = formthree.answer.value;
    let correct = 'estoybien';
    let soy = 'soybien';
    let mal = 'toymal';
    let chau = 'minombre';

    if (unan === correct) {
        document.getElementById('resultc').innerText = "Correcto!"
    } else if (unan === soy) {
        document.getElementById('resultc').innerText = "So close!"
    } else if (unan === mal) {
        document.getElementById('resultc').innerText = "You good?"
    } else if (unan === chau) {
        document.getElementById('resultc').innerText = ">:("
    }
}

