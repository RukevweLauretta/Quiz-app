
const quizQuestions =[
    {question: "What is the capital of France?",
     options: ["Berlin", "Madrid", "Paris"],
     answer: "Paris"
    },

    {question: "Which language is used for web development?",
        options: ["Python", "C++", "JavaScript"],
        answer: "JavaScript"
    },

    {question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupitar"],
        answer: "Mars"
    },

    {question: "What is the largest ocean on Earth?",
        options: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean"],
        answer: "Pacific Ocean"
    },

    {question: "What is the capital of Nigeria?",
        options: ["Abuja", "Lagos", "PH"],
        answer: "Abuja"
    }
]


const elementQuestions = document.getElementById('Elementquestion')
const elementOptions = document.getElementById('Elementoptions')
let taskCounter = 0;


function loadQuestions(){
    const quiz = quizQuestions[taskCounter];

    elementQuestions.innerHTML = quiz.question

    elementOptions.innerHTML = '';

    quiz.options.forEach(function(option, index){
    let listItems = document.createElement('li');

    let input= document.createElement('input')
    input.type = 'radio';
    input.id= `option${index}`; 
    input.name= 'two'
    input.value= option;

    let label = document.createElement('label');
    label.htmlFor = `option${index}`;
    label.innerText= option

    listItems.appendChild(input);
    listItems.appendChild(label);
    elementOptions.appendChild(listItems);
    })
}



function checkAnswer(){
    const selected = document.querySelector('input[name="two"]:checked');

    if(!selected) {
        alert ('Please select valid option')
        return
    }
    
    const quiz = quizQuestions[taskCounter];
    
    const elementAnswer = quiz.answer

    if (selected.value == elementAnswer){
        alert('CORRECT');}
    
    else {
        alert("Wrong!");
    }
    
  
if(taskCounter < quizQuestions.length) {
    taskCounter ++;
    loadQuestions();
} else{
    alert('completed');
}

}

window.onload= loadQuestions;