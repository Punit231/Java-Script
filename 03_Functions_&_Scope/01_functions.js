function sayMyName(){
    console.log("P");
    console.log("U");
    console.log("N");
    console.log("I");
    console.log("T");
}
sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result         // OR       // return number1 + number2
    console.log("Punit");             // cannot execute after return statement
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginUserMessage(username){     
// function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Punit"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "Punit",
    id: 123
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Id is ${anyobject.id}`);
}
handleObject(user)
// OR 
// handleObject({
//     username: "Harsh",
//     price: 399
// })


const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 500, 1000]));