'use strict';
let money;
let time;
function start() {
    money = +prompt("Your monthly budget ?", "");
    time = prompt("Enter date in format YYYY-MM-DD ?", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Your monthly budget ?", "")
    }
};
start();

let appData  = {
    budget: money,
    timeData: time,
    expenses:  {},
    optionalExpenses:  {} ,
    income :  [] ,
    savings: true
};
function chooseExpenses() {
    for(let i = 0; i < 2; i++){
        let a = prompt("Enter a required cost item this month ?", ""),
        b = prompt("How much will it cost?", "");
        if ((typeof (a)) === "string" && (typeof (a)) != null && (typeof (b)) != null && a != "" && b != "" && a.length < 50){
            console.log("done");
            appData.expenses[a] = b;
        }
    };
}
chooseExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

function detectDayBudget() {
    alert("Daily budget: " + appData.moneyPerDay);
};
function detectLevel() {
    
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
};



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is the amount of savings?", ""),
        percent = +prompt("What percentage?", "");
        appData.montnIncome = save/100/12*percent;
        alert("The income per month from your deposit is: " + appData.montnIncome);
    };
};
function chooseOptEpenses() {
    for(let i = 1; i <= 3; i++){
        let a = prompt("The item of optional expenses?", "");
        console.log("ök");
        appData.optionalExpenses[i] = a; 
        };
    
};
checkSavings();
detectDayBudget();
detectLevel();
chooseOptEpenses();