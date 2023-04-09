let startButton=document.querySelector("#startButton");
let startPage=document.querySelector("#start");
let questionPage=document.querySelector("#question");
let endPage=document.querySelector("#endScreen");
let question=document.querySelector("#questionTitle");
let answersDiv=document.querySelector("#answers");

//Q's & A's

let questionNumber=0;
let questions =["test1?","test2?","test3?","test4?","test5?"];
let ansA;
let ansB;
let ansC;
let ansD;
let answers=[
["test (correct)","test","test","test"],
["test","test (correct)","test","test"],
["test","test","test (correct)","test"],
["test","test","test","test (correct)"],
["test (correct)","test","test","test"]];

function startQuiz(){
    startPage.setAttribute("class","hide");
    questionPage.setAttribute("class", "onScreen");
    displayQuestion();

}
function createAnswerChoice(){
    ansA=document.createElement("button")
    ansA.textContent()

}
function displayQuestion(){
    //update questions and answers
    question.textContent=questions[questionNumber];
    createAnswerChoice()
    answersDiv.appendChild(ansA);
    answersDiv.appendChild(ansB);
    answersDiv.appendChild(ansC);
    answersDiv.appendChild(ansD);
    


    

    //eventlistener
    //check if answer is correct
    // timer



    //check if last question
    //if so go to endPage
    // if not increment questionNumber and displayQuestion
}
//timer








//main section
startButton.addEventListener("click",startQuiz);





// GIVEN I am taking a code quiz
// WHEN I click the start button
// !THEN a timer starts and I am presented with a question
// WHEN I answer a question
// !THEN I am presented with another question
// WHEN I answer a question incorrectly
// !THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// !THEN the game is over
// WHEN the game is over
// !THEN I can save my initials and my score