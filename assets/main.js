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
    //let ansTxtStorage;
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

    ansButton=document.querySelectorAll(".answerChoice");
    
    // if(answers[questionNumber][0].includes("(correct)")){
    //     ansTxtStorage = answers[questionNumber][0].split(' ');
    //     ansA.textContent=ansTxtStorage[0];
    //     ansA.setAttribute("correct","true");
    // }
    // else{
    //     ansA.textContent=answers[questionNumber][0];
    // }


}
function displayQuestion(){
    //update questions and answers
    question.textContent=questions[questionNumber];
    createAnswerChoice()
    answersDiv.appendChild(ansA);
    answersDiv.appendChild(ansB);
    answersDiv.appendChild(ansC);
    answersDiv.appendChild(ansD);
    
    questionNumber++;

    console.log(ansButton);

    // ansButton.addEventListener("click",onChooseAnswer);
    

    

    //eventlistener
    //check if answer is correct
    // timer



    //check if last question
    //if so go to endPage
    // if not increment questionNumber and displayQuestion
}
function onChooseAnswer(){
    console.log("test");
    if (questionNumber<questions.length){
        displayQuestion();
    }
    else{
        questionPage.setAttribute("class","hide");
        endPage.setAttribute("class","onScreen");
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