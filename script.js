const display = document.getElementById("display");

function appendToDisplay(input){
display.value += input;
}

function clearDisplay(){
display.value = "";
}
function calculate(){
  try{
    display.value = eval(display.value);
  }
  catch(error){
  display.value = "Error"
  }
}

const dotButton = document.getElementById(".");
let clicks = 0;

dotButton.onclick = function() {
  clicks++;

  appendToDisplay(".");

  if (clicks === 4) {
    window.location.href = "https://www.crazygames.com/";
  }
};

const minusButton = document.getElementById("-")
let minusclicks = 0;

minusButton.onclick = function() {
  minusclicks++;

  appendToDisplay("-")

  if (minusclicks === 5){
    window.location.href = "https://classroom.google.com/h/st"
  }
}

const timesButton = document.getElementById("*")
let timesclicks = 0;

timesButton.onclick = function(){
  timesclicks++;

  appendToDisplay("*")
  
  if (timesclicks === 3){
    window.location.href = "https://students.matteappen.se/exercises"
  }
}




//sets the start click amount to 0 and gives it a value

const driButton = document.getElementById("+");


let plusclicks = 0;
//counter on how many times you clicked in this case its how many times you clicked +

driButton.onclick = function() {
  plusclicks++;


//shows + on display
  appendToDisplay("+");


//takes you to rickroll video

  if (plusclicks === 4) {
    window.location.href = "https://youtu.be/oHg5SJYRHA0?si=8YuGzQJ5S_IxkL52";
  }
};