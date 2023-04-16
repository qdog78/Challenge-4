
function startGame(){
console.log ("play")
playButton.classlist.add('hide')
questionsEl.classlist.remove ('hide')

}
var playButton= document.getElementById("play");
playButton.innerHTML="play"
playButton.addEventListener("click", function (event){
    event.preventDefault
console.log(event)
//function startGame = const
})

document.getElementById("questions").innerHTML = "What is the point of JS";
document.getElementById("question").innerHTML = "Where is KU";
document.getElementById("question").style.visibility="hidden";
document.getElementById("answer-one").innerHTML = "To interact";
document.getElementById("answer-two").innerHTML = "for color";
document.getElementById("answer-three").innerHTML = "To style";
document.getElementById("answer-four").innerHTML = "to create response";

var answerFour = document.getElementById("answer-four");
answerFour.innerHTML = "to create response"
answerFour.addEventListener("click", function (event){
event.preventDefault ()
console.log (event) 
document.getElementById("answers").style.visibility="hidden";
})

var answerOne = document.getElementsByClassName("btn");
answerFour.innerHTML = "to create response"
answerFour.addEventListener("click", function (event){
event.preventDefault ()
console.log (event) 
document.getElementById("answers").style.visibility="hidden";
document.getElementById("question").style.visibility="visible";
document.getElementById("questions").style.visibility="hidden";
document.getElementsByClassName ("btn1").style.visibility= "visible"
})

document.getElementById("answer-five").innerHTML = "Chicago";
document.getElementById("answer-six").innerHTML = "Arizona";
document.getElementById("answer-seven").innerHTML = "Kansas";
document.getElementById("answer-eight").innerHTML = "Missouri";





// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function(){

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);

 
//function question







/** 
 * Criteria 
 */

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
