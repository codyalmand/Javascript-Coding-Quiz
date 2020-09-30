function showQuiz() {
    $("#startQuiz").hide();
    $(".question-container").show();
    setQuestionAndAnswers();
    startTimer();

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

function startTimer() {

    intervalId = setInterval(function(){  
        timer--;
        if (timer >= 0) { 
            $("#time").text(timer);
        }
    }, 1000);
}    
var intervalId;
var display = $("#time");
var timer = 60;

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
        "question": "The condition of an if/else statement is enclosed within a __.", 
        "answers": [
            "quotes", 
            "curly brackets", 
            "parentheses", 
            "square brackets"
        ],
        "correct":"curly brackets"
    }, 
    {
        "question": "Arrays in Javascript can be used to store __.", 
        "answers": [
            "numbers", 
            "other arrays", 
            "booleans", 
            "all of the above"
        ],
        "correct":"numbers"
    }, 
    {
        "question": "String values must be enclosed within __ when being assigned to variables.", 
        "answers": [
            "commas", 
            "curly brackets", 
            "quotes", 
            "parentheses"
        ],
        "correct":"quotes"
    },
    {
        "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
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
    var isCorrect = checkSubmittedAnswer(answerThatWasClicked, questions[currentQuestion].correct);
    if (isCorrect) {
        $("#correct").text("Correct!");
    } else {
        $("#correct").text("Incorrect!");
        timer = timer - 10;
        $("#time").text(timer);
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        setQuestionAndAnswers();
    }
    else {
        $("#container").hide();
        clearInterval(intervalId);
    }
});
