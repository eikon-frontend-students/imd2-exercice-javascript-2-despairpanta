const { Button } = require("bootstrap");

// change color

var changeColor = document.querySelector(".change-color");

function colorChange() {
  changeColor.classList.add("is-active");
}

changeColor.addEventListener("click", colorChange);

// toggle color

var toggleColor = document.querySelector(".toggle-color");

function colorToggle() {
  toggleColor.classList.toggle("is-active");
}

toggleColor.addEventListener("click", colorToggle);

// trigger and target

var trigger = document.querySelector(".trigger");
var target = document.querySelector(".target");

function triggerDisapear() {
  trigger.classList.add("is-active");
  target.classList.toggle("is-closed");
}

trigger.addEventListener("click", triggerDisapear);

// trigger all

var triggerAllGreen = document.querySelector(".trigger-all");
var triggerAllBlue = document.querySelector(".change-color");
var triggerAllRed = document.querySelector(".toggle-color");

function triggerAll() {
  triggerAllBlue.classList.add("is-active");
  triggerAllRed.classList.add("is-active");
}

triggerAllGreen.addEventListener("click", triggerAll);

// trigger all self

var triggerSelfGreen = document.querySelector(".trigger-all-self");
var triggerSelfBlue = document.querySelector(".change-color");
var triggerSelfRed = document.querySelector(".toggle-color");

function triggerSelf() {
  triggerSelfGreen.classList.add("is-active");
  triggerAllBlue.classList.add("is-active");
  triggerAllRed.classList.add("is-active");
}

triggerSelfGreen.addEventListener("click", triggerSelf);

// var boxes = document.querySelectorAll(".box");

// boxes.forEach(function (box) {
//   box.classList.add("test");
// });

// console.log("hello world");
// var price = 983;
// console.log(price * 3);
// var firstname = "bouib";
// console.log("bouibus " + firstname);

// function sayHello(firstname) {
//   console.log("hello " + firstname);
// }

// sayHello("bouib");
// sayHello("bouib");

// console.log(window.innerHeight);
