//Selectors

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
let ansButton
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
    
    ansA=document.createElement("button");
    ansB=document.createElement("button");
    ansC=document.createElement("button");
    ansD=document.createElement("button");

    ansA.setAttribute("class","answerChoice");
    ansB.setAttribute("class","answerChoice");
    ansC.setAttribute("class","answerChoice");
    ansD.setAttribute("class","answerChoice");

    ansA.textContent=answers[questionNumber][0];
    ansB.textContent=answers[questionNumber][1];
    ansC.textContent=answers[questionNumber][2];
    ansD.textContent=answers[questionNumber][3];

    isSetCorrect(ansA);
    isSetCorrect(ansB);
    isSetCorrect(ansC);
    isSetCorrect(ansD);

}

function isSetCorrect(ans){
    let ansTxtStorage;

    if(ans.textContent.includes("(correct)")){
        ansTxtStorage = ans.textContent.split(' ');
        ans.textContent=ansTxtStorage[0];
       ans.setAttribute("correct","true");
    }

}
function displayQuestion(){
    //update questions and answers
    removeAllChildNodes(answersDiv);
    question.textContent=questions[questionNumber];
    createAnswerChoice()
    answersDiv.appendChild(ansA);
    answersDiv.appendChild(ansB);
    answersDiv.appendChild(ansC);
    answersDiv.appendChild(ansD);

    ansButton=document.querySelectorAll(".answerChoice");
    
    questionNumber++;

    for(let i=0; i<ansButton.length;i++)
    {
        ansButton[i].addEventListener("click",onChooseAnswer);
    }
    

    //eventlistener
    //check if answer is correct
    // timer
}
function correctOrIncorrect(event){
    let verdict=document.createElement("h2");
    verdict.setAttribute("id","verdict");
    if(event.currentTarget.getAttribute("correct")==="true"){
        verdict.textContent="CORRECT"
    }  
    else
        verdict.textContent="INCORRECT"

    answersDiv.appendChild(verdict);
    
    


}

function onChooseAnswer(event){
    if (questionNumber<questions.length){
        removeAllChildNodes(answersDiv);
        correctOrIncorrect(event);
        setTimeout(displayQuestion,1000);
        
    }
    else{
        removeAllChildNodes(answersDiv);
        correctOrIncorrect(event);
        questionPage.setAttribute("class","hide");
        endPage.setAttribute("class","onScreen");
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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