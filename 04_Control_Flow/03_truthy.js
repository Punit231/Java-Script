// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


const userEmail = []
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


if (userEmail.length === 0) {
    console.log("Array is empty");
}


const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}


// Nullish Coalescing Operator (??): null undefined
// In that case first value will be asign accept null and undefined
let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 15
let val4 = null ?? 10 ?? 20
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);


// Terniary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")