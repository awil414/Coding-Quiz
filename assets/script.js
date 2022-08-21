// Quiz Questions Variable String
let quizData= [
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Hyperloop Mechanics Language",
        d: "Hypertoddlers Making Language",
        correct: "a",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        a: "<a url='http://www.dubsfitness.com'>DubsFitness.com</a>",
        b: "<a href='http://www.dubsfitness.com'>DubsFitness.com</a>",
        c: "<a>http://www.dubsfitness.com<a>",
        d: "<a feeditsugar='http://www.dubsfitness.com'>DubsFitness.com</a>",
        correct: "b",
    },
    {
        question: "In HTML, how can you open a new tab/browser window?",
        a: "<a href='url' target='_blank'>",
        b: "<a src='url' target='_blank'>",
        c: "<a href='url' target='new'>",
        d: "<a liftup='url' target='_window'>",
        correct: "a",
    },
    {
        question: "In HTML, which of these elements are <table> elements?",
        a: "<table> <tr> <tt>",
        b: "<table> <tr> <td>",
        c: "<table> <top> <legs>",
        d: "<table> <body> <foot>",
        correct: "b",
    },
    {
        question: "(In order), what is the tag for a numbered list and a bulleted list?",
        a: "<a_lister>, <b_lister>",
        b: "<list>, <ul>",
        c: "<ol>, <ulist>",
        d: "<ol>, <ul>",
        correct: "d",
    },
    {
        question: "What is the correct HTML for a drop-down list?",
        a: "<list>",
        b: "<input type='drop_it_like_its_hot'>",
        c: "<select>",
        d: "<input type='list>",
        correct: "c",
    },
    {
        question: "What is the correct HTML for making a text area?",
        a: "<input type='textarea'>",
        b: "<textarea>",
        c: "<input type='letters_go_here'>",
        d: "<textbox>",
        correct: "b",
    },
    {
        question: "(In order),what are the correct HTML elements for playing video files and audio files?",
        a: "<media>, <audio>",
        b: "<iphone, <airpods>",
        c: "<video>, <audio>",
        d: "<media>, <mp3>",
        correct: "c",
    },
    {
        question: "In HTML, onblur and onfocus are:",
        a: "Style attributes",
        b: "Event attributes",
        c: "Vision attributes",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Which is the correct CSS syntax?",
        a: "body {color: blue;}",
        b: "body: color=blue;",
        c: "{body: color=blue;}",
        d: "body= {body by blue;}",
        correct: "a",
    },
    {
        question: "In CSS, how do you make a list that lists its items with squares?",
        a: "list: square;",
        b: "list-style-type: square;",
        c: "list-type: square;",
        d: "pair them up with boring elements",
        correct: "b",
    },
    {
        question: "In CSS, how do you make each word in a text start with a capital letter?",
        a: "shift + key",
        b: "transform:capitalize",
        c: "text-style:capitalize",
        d: "text-transform:capitalize",
        correct: "d",
    },
    {
        question: "How do you select all p elements inside a div element?",
        a: "div.p",
        b: "div=p",
        c: "div p",
        d: "div + catheter",
        correct: "c",
    },
    {
        question: "How does a WHILE loop start?",
        a: "while i = wait for 1 to circle",
        b: "while (i <= 10)",
        c: "while (i <= 10; i++)",
        d: "while i <= 10, (i++)",
        correct: "b",
    },
    {
        question: "How does a FOR loop start?",
        a: "for (i = 0: i <= 5; i++)",
        b: "for (i = 0: i <= 5)",
        c: "for i with my glasses on",
        d: "for i = 1++5",
        correct: "a",
    },
    {
        question: "How do you round the number 3.75, to the nearest interger?",
        a: "Math.ball(3.75)",
        b: "Math.rnd(3.75)",
        c: "round(3.75)",
        d: "Math.round(3.75)",
        correct: "d",
    },
    {
        question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
        a: "w2 = window.new('https:www.dubsfitness.com');",
        b: "w2 = window.next('https:www.dubsfitness.com');",
        c: "w2 = window.open('https:www.dubsfitness.com');",
        d: "w2 = window.liftup('https:www.dubsfitness.com');",
        correct: "c",
    },
    {
        question: "What will the following code return: Boolean(7>6)?",
        a: "true",
        b: "false",
        c: "ghost",
        d: "NaN",
        correct: "a",
    },

];

// Declare Variables for the Quiz Functions
let quiz= document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");

// Declare Variables for Timer
let timeEl = document.querySelector("header .timer");
let timeText = document.querySelector(".timer .timer_text");
let timeCount = document.querySelector(".timer .timer_sec");

// If Start Button Is Clicked
start_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); // hide info box
    quiz_container.classList.add("currentQuiz"); // show quiz box
    loadQuiz(); //calling loadQuiz function
    queCounter(1); // 
    startTimer(); // calling startTimer function
}

let timeValue = 300;
let que_count = 0;
let que_num = 1;
let userScore = 0;
let counter;
let tryAgain_btn = result_box.querySelector(".restart");
let quitQuiz_btn = result_box.querySelector(".quit");

// 

// Start Each Quiz with Cleared (if any prior) Questions and Scores
let currentQuiz = 0
let score = 0

// Function to Load Quiz

function loadQuiz() {

    deselectAnswers();

    let currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

loadQuiz();

/*function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
*/

/*
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
});

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
*/

/* Function for Submit Button, Adding to the Score for a Correct Answer, 
Loading New Question If All Have Not Been Answered, and 
Displaying Score if Test Is Over

submitBtn.addEventListener("click",() {
    let answer = getSelected();
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++;

       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
*/

function showResults()
