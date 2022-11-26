'use strict';

const screen = document.querySelector('.screen');
const panel = document.querySelector('.panel');

let number = '';
let finalScore = '';
let countOperator = 0;
let storedValue = 0;

//Starts
screen.textContent = '0';

panel.addEventListener('click', function (e) {
  //number
  if (e.target.classList.contains('numb')) {
    number += e.target.textContent;
    screen.textContent = number;
    countOperator = 0;
  }
  if (e.target.classList.contains('operator')) {
    if (countOperator === 0) {
      number += e.target.textContent;
      screen.textContent = number;
      countOperator = 1;
    }
  }
  if (e.target.classList.contains('equal')) {
    // CONVERTER;
    number = number
      .split('')
      .map((x) => (x === '÷' ? (x = '/') : x === '×' ? (x = '*') : x))
      .join('');
    number = eval(number);
    screen.textContent = number;
    storedValue = number;
  }
  if (e.target.classList.contains('MC')) {
    countOperator = 1;
    number = '';
    finalScore = '';
    screen.textContent = 0;
  }
  if (e.target.classList.contains('mPLUS')) {
    //Store value in the memory
    if (countOperator === 1) {
      number += storedValue;
      screen.textContent = number;
      countOperator = 0;
    }
  }
});
