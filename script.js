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

//Lesson 2 Quiz//

function TwoOneAns() {
    let twoone = document.getElementById('twoone');
    let tunan = twoone.answer.value;
    let ratones = 'ratones';
    let raton = 'raton';
    let ratons = 'ratons';
    let ratonsi = 'ratonsi';

    if (tunan === ratones) {
        document.getElementById('restone').innerText = "Amazing work!"
    } else if (tunan === raton) {
        document.getElementById('restone').innerText = "You're so close!"
    } else if (tunan === ratons) {
        document.getElementById('restone').innerText = "This answer has two mistakes. It has the tilde, and the wrong ending! 😁"
    } else if (tunan === ratonsi) {
        document.getElementById('restone').innerText = "You're very close! It just has the wrong ending!"
    } 
}

function TwoTwoAns() {
    let twotwo = document.getElementById('twotwo');
    let lo = twotwo.answer.value;
    let un = 'un';
    let el = 'el';
    let la = 'la';
    let los = 'los';

    if (lo === el) {
        document.getElementById('resttwo').innerText = "¡Perfecto!"
    } else if (lo === un) {
        document.getElementById('resttwo').innerText = "We're looking for a definite article, not indefinite. Don't give up!"
    } else if (lo === la) {
        document.getElementById('resttwo').innerText = "'La' is feminine, but you're so close!"
    } else if (lo === los) {
        document.getElementById('resttwo').innerText = "'Los' is plural! You're almost there!"
    }
}

function TwoThreeAns() {
    let twothree = document.getElementById('twothree');
    let abrir = twothree.answer.value;
    let abrimos = 'abrimos';
    let abren = 'abren';
    let abre = 'abre';
    let abrei = 'abrei';

    if (abrir === abren) {
        document.getElementById('restthree').innerText = "¡Super!"
    } else if (abrir === abrimos) {
        document.getElementById('restthree').innerText = "'Abrimos' is for 'Nosotros'. Try again!"
    } else if (abrir === abre) {
        document.getElementById('restthree').innerText = "'Abre' is singular. Try again!"
    } else if (abrir === abrei) {
        document.getElementById('restthree').innerText = "Uhhhhh"
    }
}