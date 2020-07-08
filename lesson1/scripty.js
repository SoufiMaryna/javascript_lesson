'use strict';
var LeftBorderWidth = 1;
let second = 2;
const p = 3.14;
console.log(LeftBorderWidth);

let persone  = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(persone.name);
console.log(persone["name"]);
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);
alert("Hello!");
let answer = confirm("Are you here?");
console.log(answer);

let answery = prompt("Are you 18?", "Yes");
console.log(answery);
console.log(typeof(answery));
console.log(typeof(arr));
console.log("arr" + " - object");

let incr = 10,
    decr = 10;
incr++;
decr--;    
console.log(incr);
console.log(decr);
console.log(5%2);
console.log("2" == 2);
console.log("2" === 2);

let isCheked = true,
    isClose = true;

console.log(isCheked && isClose);   
console.log(isCheked || isClose); 

