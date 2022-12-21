
var counter = 5;

var x = setInterval(function() {

  counter--;
  document.getElementById("secondsdisplay").innerHTML = counter;
     
  if ( counter==0) {
    clearInterval(x);  }
}, 1000);