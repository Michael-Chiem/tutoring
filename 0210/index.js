const quizQuestions = [
    {
        question: "question1",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer1"
    },
    {
        question: "question2",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer2"
    },
    {
        question: "question3",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        correct: "answer3"
    },


]

let i = 0;
let time = 30


// will need a start button to start the quiz
// will have a click funtion
// link function to your button

// const startBtn = document.getElementById("startBtn");
// startBtn.addEventListener("click", startQuiz);
// function startQuiz() {}


// document.getElementById("startBtn").addEventListener("click", startQuiz);

document.getElementById("startBtn").onclick = function () {
    document.getElementById('startBtn').style.display = "none";
    setInterval(function () {
        if (time > -1 && i < quizQuestions.length) {

            document.getElementById('time').innerHTML = `<h3>${time--}</h3>`
        }
    }, 1000)


    nextQuestion();

}



document.getElementById('questions').onclick = function (e) {
    if (e.target.innerText === quizQuestions[0].correct) { 
        document.getElementById('answers').innerHTML = `<h4>Correct!</h4>` } else {
        document.getElementById('answers').innerHTML = `<h4>Wrong!</h4>`;
        time -= 10;
    };

    i++;
    if (i < quizQuestions.length)
        nextQuestion()
    else {
        document.getElementById('answers').innerHTML = ``
        document.getElementById('questions').innerHTML = ``
        document.getElementById('input').style.display = "block"

    }
}





function nextQuestion() {
    document.getElementById('questions').innerHTML =
        `<h3>${quizQuestions[i].question}</h3>
    <button>${quizQuestions[i].answers[0]}</button>
    <button>${quizQuestions[i].answers[1]}</button>
    <button>${quizQuestions[i].answers[2]}</button>
    <button>${quizQuestions[i].answers[3]}</button>
    `

}


// save initials in local storage

document.getElementById('submitBtn').onclick = function () {
    let initials = document.getElementById('initials').value;
    console.log(initials);
    localStorage.setItem('initials', initials);
    let score = document.getElementById('time').innerText;
    console.log(score);
    localStorage.setItem('score', score);

    document.getElementById('input').style.display = "none";


    let initals1 = localStorage.getItem('initials');
    let score1 = localStorage.getItem('score');
    document.getElementById('score').style.display = "block"
    document.getElementById('highscores').innerHTML = `
<p>Your initials are ${initals1} and your score is ${score1}</p>`

}