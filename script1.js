function showQuiz() {
    $("#startQuiz").hide();
    $(".question-container").show();
    setQuestionAndAnswers();
}
function setQuestionAndAnswers() {
    $("#question").text(questions[currentQuestion].question);
    $("#answer1").text(questions[currentQuestion].answers[0]);
    $("#answer2").text(questions[currentQuestion].answers[1]);
    $("#answer3").text(questions[currentQuestion].answers[2]);
    $("#answer4").text(questions[currentQuestion].answers[3]);
    $("#answer5").text(questions[currentQuestion].answers[4]);
}
function checkSubmittedAnswer(answerChoice, correctAnswer) {
    if (answerChoice === correctAnswer) {
        return true;
    }
    return false;
}

var timer = 0;
var time = $("#time");
var secondsLeft = 60

$("#startTimer").click( function () {
var fiveMinutes = 60 * 5,
    display = $("#time");
    startTimer(fiveMinutes, display);
});

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

var currentQuestion = 0
$("#startQuiz").on("click", showQuiz);
var questions = [
    {
        "question": "Commonly used data types DO NOT include:", 
        "answers": [
            "strings", 
            "booleans", 
            "alerts", 
            "numbers"
        ],
        "correct":"alerts"
    }, 
    {
        "question": 
        "The condition of an if/else statement is enclosed within a __.", 
        "answers": [
            "quotes", 
            "curly brackets", 
            "parentheses", 
            "square brackets"
        ],
        "correct":"curly brackets"
    }, 
    {
        "question": 
        "Arrays in Javascript can be used to store __.", 
        "answers": [
            "numbers", 
            "other arrays", 
            "booleans", 
            "all of the above"
        ],
        "correct":"numbers"
    }, 
    {
        "question": 
        "String values must be enclosed within __ when being assigned to variables.", 
        "answers": [
            "commas", 
            "curly brackets", 
            "quotes", 
            "parentheses"
        ],
        "correct":"quotes"
    },
    {
        "question": 
        "A very useful tool used during development and debugging for printing content to the debugger is:",
        "answers":[
            "Javascript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        "correct":"console.log"
    }
]
    
$(".answer").click(function() {
    var answerThatWasClicked = $(this).text();
    var isCorrect = checkSubmittedAnswer(answerThatWasClicked, questions[currentQuestion].correct) 
    if (isCorrect) {
        $("#correct").text("Correct!");
    } else {
        $("#correct").text("Incorrect!");
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setQuestionAndAnswers();
    }
    else {
        //Quiz Over
    }

});