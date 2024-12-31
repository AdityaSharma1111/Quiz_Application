// Quiz configuration starts here
let topic = 'Programming';
let num = 5;
const quizTimeLimit = 10;
let currTime = quizTimeLimit;
const quizArea = document.getElementById('quizArea');
const resultArea = document.getElementById('resultArea');
const configArea = document.getElementById('configArea');

selectElement('#topic', 'topic1');
selectElement('#numOfQuestions', 'n1');

document.getElementById('topic').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        topic = e.target.innerHTML; // Update topic
        selectElement('#topic', e.target.id); // Call combined function
    }
});

document.getElementById('numOfQuestions').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        num = parseInt(e.target.innerHTML); // Update num
        selectElement('#numOfQuestions', e.target.id); // Call combined function
    }
});

function selectElement(containerId, buttonId) {
    // Reset styles for all buttons in the specified container
    document.querySelectorAll(`${containerId} button`).forEach((btn) => {
        btn.style.backgroundColor = ''; // Reset background color
        btn.style.color = ''; // Reset text color
        btn.style.border = ''; // Reset border
    });

    // Apply styles to the selected button
    let selected = document.getElementById(buttonId);
    if (selected) {
        selected.style.backgroundColor = "#6495ED"; // Blue background
        selected.style.color = "white"; // White text
        selected.style.border = "2px solid #6495ED"; // Blue border
    }
}
// Quiz configuration ends here

let score = 0;
const questionsIndexHistory = [];

// Quiz application starts here
const getRandomQuestion = () => {
    const categoryQuestions = questions.find((q) => q.category.toLowerCase() === topic.toLowerCase()).questions || [];
    if(questionsIndexHistory.length === Math.min(num, categoryQuestions.length)) {
        clearInterval(myInt);
        return showResult();
    }
    const availableQuestions = categoryQuestions.filter((q, index) => !questionsIndexHistory.includes(index));

    const randomQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    questionsIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
    return randomQuestion;
}

let currQuestion = {};
let myInt;
const renderQuestion = () => {
    document.querySelectorAll('#options button').forEach(option => {
        option.style.backgroundColor = ''; 
        option.style.color = ''; 
        option.style.border = ''; 
        option.style.pointerEvents = '';
    });

    currQuestion = getRandomQuestion();
    if (!currQuestion) {
        return;
    }
    document.querySelector('#qStatus').innerHTML = `<h3>Question <strong>${questionsIndexHistory.length}</strong> of <strong>${num}</strong></h3>`;
    document.querySelector('#currQuestion').textContent = currQuestion.question;
    document.querySelector('#opt1').textContent = currQuestion.options[0];
    document.querySelector('#opt2').textContent = currQuestion.options[1];
    document.querySelector('#opt3').textContent = currQuestion.options[2];
    document.querySelector('#opt4').textContent = currQuestion.options[3];
    currTime = quizTimeLimit;

    clearInterval(myInt);

    myInt = setInterval(() => {
        document.querySelector('#timer').innerHTML = currTime;
        currTime--;
        if(currTime < 0) {
            showCorrect('opt' + (currQuestion.correctAnswer + 1));
            document.querySelectorAll('#options button').forEach((option) => {option.style.pointerEvents = 'none';});
            clearInterval(myInt);
        }
    }, 1000);

    // Add new event listener for the current question
}
document.querySelector('#options').addEventListener('click', function (e) { 
    handleOptionClick(e);
    clearInterval(myInt);
});

const handleOptionClick = (e) => {
    if (e.target.tagName === 'BUTTON') {
        if (e.target.innerHTML === currQuestion.options[currQuestion.correctAnswer]) {
            score++;
            showCorrect(e.target.id);
        } else {
            showWrong(e.target.id);
            showCorrect('opt' + (currQuestion.correctAnswer + 1));
        }
        document.querySelectorAll('#options button').forEach((option) => {option.style.pointerEvents = 'none';});
    }
};

renderQuestion();

document.getElementById('nextBtn').addEventListener('click', function () {
    renderQuestion();
});

showCorrect = (id) => {
    let element = document.getElementById(id);
    element.style.backgroundColor = '#D4EDDA';
    element.style.color = '#155724';
    element.style.border = '2px solid #B7E1C1';
}

showWrong = (id) => {
    let element = document.getElementById(id);
    element.style.backgroundColor = '#F8D7DA';
    element.style.color = '#721C24';
    element.style.border = '2px solid #F4BEC3';
}

const showResult = () => {
    quizArea.style.display = 'none';
    resultArea.style.display = 'block';
    document.querySelector('#result').innerHTML = `You answered <strong>${score}</strong> out of <strong>${num}</strong> questions correctly.`;
}

document.getElementById('tryAgain').addEventListener('click', resetQuiz);

function resetQuiz() {
    score = 0;
    questionsIndexHistory.length = 0;
    configArea.style.display = 'block';
    resultArea.style.display = 'none';
}

document.getElementById('startBtn').addEventListener('click', startQuiz);

function startQuiz() {
    quizArea.style.display = 'block';
    configArea.style.display = 'none';
    renderQuestion();
}