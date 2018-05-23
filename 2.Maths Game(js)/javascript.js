var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
//if  click on start/reset button
 document.getElementById("startreset").onclick = function(){ //if we are playing
    if(playing == true){
        location.reload(); //reload page
        }
     
     else{//if we are not playing
         playing=true;//change game to palying
         score= 0;
         document.getElementById("scorevalue").innerHTML = score;//set score to 0
         
         show("timeremaining");
         timeremaining = 60;
         document.getElementById("timereaminingvalue").innerHTML = timeremaining;
         
         //hide game over box
         hide("gameover");
         
         document.getElementById("startreset").innerHTML = "Reset Game"
         startCountdown();
         
         
     }
 }
 
 
 //functions
    //1)reduce the time by 1sec/sec in loops
 function startCountdown(){
     action = setInterval(function(){
         timeremaining -= 1;
         document.getElementById("timereaminingvalue").innerHTML = timeremaining;
         if(timeremaining==0){//game over
             stopCountdown();// stop count down
             show("gameover");
             document.getElementById("gameover").innerHTML ="GAME OVER <br /><br /> your score is " + score;
             hide("timeremaining");
             hide("correct");
             hide("wrong");
             playing=false;
             document.getElementById("startreset").innerHTML = "Start Game";
             
         }
     }, 1000);     
 }

//2)function to stop counter
function stopCountdown(){
    clearInterval(action);
}
//3) function to hide element
function hide(Id){
    document.getElementById(Id).style.display = "none";
}

//4)function to show element
function show(Id){
    document.getElementById(Id).style.display = "block";
}

//5)generate question and asnwer

function generateQA(){
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("questionbox").innerHTML = x + "x" +y ;
var correctPosition = 1 + Math.round(3*Math.random());
document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
        } 

//if time left?
            //yes-continue
            //no-game over
//change button to reset

//generate new question and multiple answers

//if we click on a ans box
    //if we are palying
        //if yes and correct
            //increse score by 1
            // corect bix for 1sec
            //generate new question
//if ans is wrong
        //show try agin box for 1sec

