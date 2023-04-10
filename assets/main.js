//Selectors

let startButton=document.querySelector("#startButton");
let startPage=document.querySelector("#start");
let questionPage=document.querySelector("#question");
let endPage=document.querySelector("#endScreen");
let question=document.querySelector("#questionTitle");
let answersDiv=document.querySelector("#answers");
let timer=document.querySelector("#time");
let finalScore=document.querySelector("#finalScore");
let userName=document.querySelector("#initials");
let submitScore=document.querySelector("#submit");
let secondsLeft=60;
let timerInterval;
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
    setTime();

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
    else{
        verdict.textContent="INCORRECT"
        secondsLeft-=15;
    }
        

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
        setTimeout(gameOver,1000);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function gameOver(){
    clearInterval(timerInterval);
    questionPage.setAttribute("class","hide");
    endPage.setAttribute("class","onScreen");
    finalScore.textContent=secondsLeft;
    submitScore.addEventListener("click",function(){
        localStorage.setItem(userName.value,secondsLeft);
        window.location.href="./highScores.html";
    })
    
}
function setTime(){
    timerInterval=setInterval(function(){
        secondsLeft--;
        timer.textContent=secondsLeft;
        if(secondsLeft<=0){
            clearInterval(timerInterval);
            runOutOfTime();
        }

    },1000);
}
function runOutOfTime(){
    let timesUp=document.createElement("h2");
    timesUp.setAttribute("id","timesUp");
    timesUp.textContent="Times Up";
    removeAllChildNodes(answersDiv);
    answersDiv.appendChild(timesUp);
    setTimeout(gameOver,1500);
}
//timer








//main section
startButton.addEventListener("click",startQuiz);





// GIVEN I am taking a code quiz
// WHEN the game is over
// !THEN I can save my initials and my score