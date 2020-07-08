'use strict';
let money = +prompt("Your monthly budget ?", "");
let time = prompt("Enter date in format YYYY-MM-DD ?", "");
let appData  = {
    budget: money,
    timeData: time,
    expenses:  {},
    optionalExpenses:  {} ,
    income :  [] ,
    savings: false
};


for(let i = 0; i < 2; i++){
    let a = prompt("Enter a required cost item this month ?", ""),
    b = prompt("How much will it cost?", "");
    if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50){
        console.log("done");
        appData.expenses[a] = b;
    }
};
appData.moneyPerDay = appData.budget / 30;

alert("Daily budget: " + appData.moneyPerDay);
if(appData.moneyPerDay < 100) {
    console.log("Minimum level of wealth");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Average income");
} else if (appData.moneyPerDay > 2000){
    console.log("High level of wealth");
} else {
    console.log("An error has occurred");
}
console.log(appData);