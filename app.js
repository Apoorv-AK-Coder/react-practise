/*import {apiKey} from "./util.js";

import api from "./util.js";

console.log(apiKey);

console.log(api);

function greet(username, message="how are you") {
    // console.log(username);
    // console.log(message);
    return "hi " + username + "hello " + message;
}

const great1 = greet("ak ");
console.log(great1);
console.log(greet("hello ", "how are you "));

function combine(a,b,c) {
    return a*b/c;
}

const combine1 = combine(10, 5, 5);
console.log(combine1);


export default (usserName, Message) => {
    // console.log("Apoorv");
    // return usserName + Message;
}

let userName="apoorv";

console.log(userName);*/

function transformToObjects(numberArray){
const Object = numberArray.map((item) => ({val:item}));
console.log(Object);
}
transformToObjects([1, 2])
console.log();

// function transformToObjects(numberArray) {
//     const obj = numberArray.map((item) => ({ val : item }));
//  }
//  console.log([1,2]);