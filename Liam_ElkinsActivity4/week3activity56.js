//example 1
let btn1 = document.querySelector('.button1');
//calling an evvent handler using an anonymous function
/*
btn1.onclcick = function(){
  alert('You just clicked!');
}
*/
// calling an event handler using a named function
function named(){
  alert('You just clicked!');
}
btn1.onclick =named;
//

let btn2 = document.querySelector('.button2');

/*
btn2.addEventListener('click',clickAgain,false);
function clickAgain(){
  alert('click using addEventListener!');
}
*/
// use anonymous function
btn2.addEventListener('click', function(){
  alert('Click using addEventListener, anonymous function!');
});

// EXAMPLE 3
let btn3 = document.querySelector('.button3');
btn3.addEventListener('click', function(){
  alert('1st click! 1st window');
});
btn3.addEventListener('click', function(){
  alert('1st click! 2nd window');
});

//EXAMPLE 4
let btn4 = document.querySelector('.button4');
let displayMsg = document.querySelector('.display1');

btn4.addEventListener('click', function(){
  alert('Button clicked!');
});
btn4.addEventListener('mouseover', function(){
  displayMsg.innerHTML += '<br>Mouse over';
});

//ACTIVITY 5
let btn5 = document.querySelector('.button5');
let displayMsg2 = document.querySelector('.display2');

let count = 0;

btn5.addEventListener('mouseover', function(){
  count += 1
  displayMsg2.innerHTML += `<br>Moused over ${count} times`;
});
btn5.addEventListener('click', function(){
  alert(`The button was moused over ${count} times`);
  count = 0
  displayMsg2.innerHTML = 'The mouseover counter has been reset';
});
// Example 6
let btn6 = document.querySelector('.button6');
btn6.addEventListener('click', function(event){
  event.target.style.backgroundColor = 'purple';
  alert('Button was clicked');
});
//Example 7
let linkQCC = document.querySelector('.qccLink');
linkQCC.addEventListener('click', function(e){
  e.preventDefault();
  alert('QCC website is OFF!');
});
//Example 8
let myForm = document.querySelector('.form1');
let pDisplay = document.querySelector('.display3');

myForm.addEventListener('submit', function(e){
  e.preventDefault();
  let name = document.querySelector('.inputName').value;
  pDisplay.innerHTML = `Welcome to the program ${name}`;
});
//Activity 6
let myForm2 = document.querySelector('.form2');
let pDisplay2 = document.querySelector('.display4');

myForm2.addEventListener('submit', function(e){
  e.preventDefault();
  let name2 = document.querySelector('.inputName2').value;
  if (isNaN(name2) == true && name2 != ""){
  pDisplay2.innerHTML = `Welcome to the program ${name2}`;
  }
  else if( isNaN(name2) == false && name2 != ""){
  alert(`${name2} is not a name. Please enter a name again`);
  }
  else{
  alert(`You didn't enter a name. Please enter a name again`);
  }
});
//example 9
let pageTop;
window.addEventListener('scroll', function(){
  pageTop = window.pageYOffset;

  console.log(`The window is scrolled ${pageTop} px from top`);
});
// example 10
let topIcon = document.querySelector('.toTop');
let pageTopLoc;
window.addEventListener('scroll', function(){
  //document.body.scrollTop
  pageTopLoc = window.pageYOffset;
  if(pageTopLoc>300){
  topIcon.style.display = "block";
  }
  else{
  topIcon.style.display = "none";
  }
});
