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