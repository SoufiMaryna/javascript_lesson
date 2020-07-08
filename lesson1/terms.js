'use strict';
let num = 50;
if(num < 49) {
    console.log("wrong");
} else if(num > 100) {
    console.log("too much");
} else {
    console.log("ok");
};
(num == 50) ? console.log("ok") : console.log("wrong");

switch(num) {
    case num < 49:
        console.log("wrong");
        break;
        case num > 100:
            console.log("too much");
            break;
        case num > 80:
            console.log("still too much");
            break;
        case 50:
            console.log("ok");
            break;
        default:
            console.log("Something went wrong");
            break;
            

        

};