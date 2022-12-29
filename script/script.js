
var counter = 6;
let index = 0;
let timer = 30;
// let interval = 0;
let correctScore = 0;
let sizeData = questions.length;

let interval;







document.getElementById("play").addEventListener("click",function(){
    guide.style.display="none";
    quiz.style.display="none";
    contour();
    secondsdisplay.style.display="block";
});




// function timer
 countDown = ()=>{
  if(timer ===0){
      timer=30;
      clearInterval(interval);
      time.innerHTML="Time is up";
      getAnswer(document.querySelector("#wrong"));
      // if((index + 1) === sizeData){
      //   clearInterval(interval);
      //   result.style.display="block";
      //   quiz.style.display="none";
      //   guide.style.display="none";
      //   document.getElementById("resultText").innerHTML = "Your score is " + correctScore + "%";
      // }
    }
  else{
      timer--;
      time.innerHTML=timer;
      }
}



// function contour
function contour (){
  var x = setInterval(function() {
  counter--;
  document.getElementById("secondsdisplay").innerHTML = counter;
     
  if ( counter==0) {
    displayData(index);
    clearInterval(x);  
    guide.style.display="none";
    quiz.style.display="block";
    secondsdisplay.style.display="none";
  }
  }, 1000);  
  }



var correctAnswer;
// function displayData
//displayData(index);
function displayData(index){
  interval = setInterval(countDown,1000);
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
if(index === sizeData-1){
  clearInterval(interval);
  result.style.display="block";
  quiz.style.display="none";
  guide.style.display="none";
  document.getElementById("resultText").innerHTML = "Your score is " + correctScore + "%";
  if(correctScore >= 80){
    document.getElementById("ScoreImage").innerHTML ="<img id='imagescore' src='/image/5741045a1aa1e15c70ca1dce56cac1ab.png' alt='good'>"
    document.getElementById("resultText").innerHTML += "<br> You are a genius";
  }
  else if(correctScore >= 60){
    document.getElementById("ScoreImage").innerHTML ="<img id='imagescore' src='/image/3dc46683ec3f6b87da2bb4b78fde993b.png' alt='good'>"
    document.getElementById("resultText").innerHTML += "<br> You are a good";
  }
  else if(correctScore >= 40){
    document.getElementById("ScoreImage").innerHTML ="<img id='imagescore' src='/image/320c3a3f9874895654bf3a943cc2851f.png' alt='good'>"
    document.getElementById("resultText").innerHTML += "<br> You are a bad";
  }
  else{
    document.getElementById("ScoreImage").innerHTML ="<img id='imagescore' src='/image/e4723fb64b1ca543e5cde39d47ed933a.png ' alt='good'>"
    document.getElementById("resultText").innerHTML += "<br> You are a very bad";
  }
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
  
  timer=30;
  clearInterval(interval);
  if(answer == correctAnswer){
    console.log("correct");
     console.log(choice.classList);
     playAudioCorrect();
    correctScore += 100/sizeData; // ( 1/sizedata ) * 100
  }
  else{
    console.log("wrong");
    playAudioIncorrect();
    // alert("Wrong answer");
    choice.classList.add('incorrect');
    options[correctAnswer-1].classList.add('correct');
    console.log(options[correctAnswer-1]);
    // wrongScore++;
  }
  setTimeout(function(){
    index++;
    displayData(index)}, 6000);
}

// function song correct and wrong
function playAudioIncorrect(){
  var audio = new Audio('audio/Among Us Impostor Sound Effect.mp3');
  audio.play();
}
function playAudioCorrect(){
  var audio = new Audio('audio/Among Us Sound Effect.mp3');
  audio.play();
}