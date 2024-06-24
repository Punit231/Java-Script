const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

const newBalance1 = balance.toString();
console.log(newBalance1);

const newBalance2 = newBalance1.length;
console.log(newBalance2);

const newBalance3 = balance.toFixed(4);
console.log(newBalance3);

const newNumber1 = 123.8989;
console.log(newNumber1.toPrecision(4));

const newNumber2 = 1000000;
console.log(newNumber2.toLocaleString());
console.log(newNumber2.toLocaleString('en-IN'));

// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.abs(4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)