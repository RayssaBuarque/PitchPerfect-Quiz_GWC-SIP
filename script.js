//SCORES
var bellaScore = 0;
var trebleScore = 0;
var questionScore = 0;

//HTML ID ASSIGNMENTS USING DOM 
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");

var restartBtn = document.getElementById("restart");
var res = document.getElementById("res");

//CLICK EVENTS
//element.addEvent"Listener"(HTML DOM event, function To Be Called);
q1a1.addEventListener("click", treblemaker);
q1a2.addEventListener("click", bella);

q2a1.addEventListener("click", bella);
q2a2.addEventListener("click", treblemaker);

q3a1.addEventListener("click", bella);
q3a2.addEventListener("click", treblemaker);

q4a1.addEventListener("click", treblemaker);
q4a2.addEventListener("click", bella);

q5a1.addEventListener("click", treblemaker);
q5a2.addEventListener("click", bella);

restartBtn.addEventListener("click", restart);

//POINT FUNCTIONS
function bella() {
  bellaScore += 1;
  questionScore += 1;
  this.style.backgroundColor = "#7dadc5";
  groupDecision();
}

function treblemaker() {
  trebleScore += 1;
  questionScore += 1;
  this.style.backgroundColor = "#7dadc5";
  groupDecision();
}

//OTHER FUNCTIONS
function updateRes(group){
  if(questionScore == 5){
    res.style.backgroundColor = "#182239";
    res.innerHTML = "Congratulations! You are a " + group;
  }
}

function groupDecision(){  
  if(bellaScore>trebleScore){
    updateRes("Bella!");
  }
  else if(trebleScore>bellaScore){
    updateRes("Treblemaker!");
  }
}

function restart(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;

  q1a1.style.backgroundColor = "#c2ebff";
  q1a2.style.backgroundColor = "#c2ebff";
  q2a1.style.backgroundColor = "#c2ebff";
  q2a2.style.backgroundColor = "#c2ebff";
  q3a1.style.backgroundColor = "#c2ebff";
  q3a2.style.backgroundColor = "#c2ebff";
  q4a1.style.backgroundColor = "#c2ebff";
  q4a2.style.backgroundColor = "#c2ebff";
  q5a1.style.backgroundColor = "#c2ebff";
  q5a2.style.backgroundColor = "#c2ebff";

  bellaScore = 0;
  trebleScore = 0;
  questionScore = 0;

  res.innerHTML = "??????????";
  res.style.backgroundColor = "#101728";
}

//DETAILS
q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);

function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
}