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


document.getElementById("startBtn").onclick = function () {

    document.getElementById('startBtn').style.display = "none";
    nextQuestion();
    timer();

}


function timer() {
    const intervalId = setInterval(

        function () {
            if (time > -1 && i < quizQuestions.length) {
                // it does not show -1, -2 ....
                document.getElementById('time').innerHTML = `${time--}`
            } else {
                endQuiz();
                clearInterval(intervalId);

            }
        },

        1000)
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

document.getElementById('questions').onclick = function (e) {
    if (e.target.innerText === quizQuestions[i].correct) {
        document.getElementById('answers').innerHTML = `<h4>Correct!</h4>`
    } else {
        document.getElementById('answers').innerHTML = `<h4>Wrong!</h4>`;
        time -= 10;
    };

    i++;

    setTimeout(function () {
        document.getElementById('answers').innerHTML = ``
        if (i < quizQuestions.length && time > -1) 
            {nextQuestion()}
        else {
            endQuiz();
        }

    }, 2000)

}


function endQuiz() {
    
    document.getElementById('questions').style.display = "none"
    //show this div
    document.getElementById('input').style.display = "block"
}




let highScores = JSON.parse(localStorage.getItem('highScores')) || [];


// save initials in local storage

document.getElementById('submitBtn').onclick = function () {
    let initials = document.getElementById('initials').value;
    console.log(initials);
    localStorage.setItem('initials', initials);
    let score = document.getElementById('time').innerText;
    console.log(score);
    localStorage.setItem('score', score);

    highScores.push({ initials: initials, score: score });
    localStorage.setItem('highScores', JSON.stringify(highScores));

    document.getElementById('input').style.display = "none";


    let initals1 = localStorage.getItem('initials');
    let score1 = localStorage.getItem('score');
    document.getElementById('score').style.display = "block"
    document.getElementById('yourScores').innerHTML = `
    <p>Your initials are ${initals1} and your score is ${score1}</p>`

}


document.getElementById('highScores').onclick = function () {
    document.getElementById('score').style.display = "none"
    document.getElementById('startBtn').style.display = "none"
    document.getElementById('time').innerHTML = ``
    document.getElementById('reloadBtn').style.display = "block"
    highScores = JSON.parse(localStorage.getItem('highScores'));

    let sortedHighScore = highScores.sort((a, b) => b.score - a.score);

    //console.log(sortedHighScore);

    sortedHighScore.forEach(element => {
        document.getElementById('showHighScore').innerHTML += `<p>${element.initials}: ${element.score}</p`
    });


}


document.getElementById('reloadBtn').onclick = function () {
    location.reload();
}