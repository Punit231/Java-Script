const name = "Punit"        
// OR
const gameName = new String('Punit-hc-com')
const repoCount = 50

// console.log(name + repoCount + " Value");          
// OR
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// console.log(gameName.split('-'));
const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Punit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Punit.com/Punit%20Parmar"
console.log(url);
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))