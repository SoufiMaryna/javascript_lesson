'use strict';
function showFirstMessage(text) {
    alert(text);
};
showFirstMessage("hello");
function calc(a, b) {
    return (a + b);
}
console.log(calc(1, 2));
console.log(calc(10, 21));

function returnvar() {
    let num = 50;
    return(num);
}
let anothernum = returnvar();
console.log(anothernum);
let calcl = (a,b)=>(a+b);
console.log(calcl(1, 2));
console.log(calcl(10, 21));
let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";
console.log(Math.round(twelve));

let addy = "12.2px";
console.log(parseInt(addy));
console.log(parseFloat(addy));