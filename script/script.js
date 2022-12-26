
var counter = 5;
let index = 0;
let timer = 5;
let interval = 0;



let guide = document.querySelector("#guide");
let exit = document.querySelector("#exit");
let start = document.querySelector("#start");

let quiz = document.querySelector("#quiz");
let time = document.querySelector("#time");

let question = document.querySelector("#question");
let questionText = document.querySelector("#questionText");



// document.getElementById("next").addEventListener("click",function(){
//     guide.style.display="bolck";
//     quiz.style.display="none";
//     secondsdisplay.style.display="none";
// });




// function timer
let countDown = ()=>{
  if(timer ===0){
      timer=5;
      clearInterval(timer);
      time.innerHTML="Time is up";
      getAnswer(document.querySelector("#wrong"));
    }
  else{
      timer--;
      time.innerHTML=timer;
      }
}
setInterval(countDown,1000);



// function contour
var x = setInterval(function() {
  counter--;
  document.getElementById("secondsdisplay").innerHTML = counter;
     
  if ( counter==0) {
    clearInterval(x);  }
}, 1000);



var correctAnswer;
// function displayData
displayData(index);
function displayData(index){
  document.querySelector("#question").innerHTML =
//  questions[0].question
`<div class="" data-choice="${index+1}"> 
${questions[index].question}
 </div>
 `;
 document.querySelector("#questionText").innerText = "";
for(let i = 0; i < 4; i++){
  document.querySelector("#questionText").innerHTML += 
  `<div class="form-check" data-choice="${i+1}" onclick="getAnswer(this)"> ${questions[index].answers[i]}
   </div>
   `;
}
document.querySelector("#questionText").innerHTML += `<input type="hidden" data-choice="6" id="wrong">`
// console.log(index);
  
}


var answer;
function getAnswer(choice){
  const options = document.querySelectorAll(".form-check");
  correctAnswer= questions[index].answer;
  console.log(correctAnswer);
  // console.log(choice.getAttribute("data-choice"));
  answer = choice.getAttribute("data-choice");
  console.log(answer);
  
  clearInterval(timer);

  if(answer == correctAnswer){
    console.log("correct");
    choice.classList.add('correct');
    console.log(choice.classList);
  }
  else{
    console.log("wrong");
    choice.classList.add('incorrect');
    options[correctAnswer-1].classList.add('correct');
    console.log(options[correctAnswer-1]);
  }
  setTimeout(function(){
    timer=5;
    index++;
    displayData(index)}, 5000);
}

console.log(answer);