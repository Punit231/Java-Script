for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}
// console.log(element);


console.log("");
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
    console.log(i + ' X ' + j + ' = ' + i*j );
   }
   console.log("");
}


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// +++++++++++++++++++++++ Break & Continue ++++++++++++++++++++++++++


console.log("");
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
}


console.log("");
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue                         // here 5 is not print
    }
   console.log(`Value of i is ${index}`);
}