//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}
console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Punit"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()


if (true) {
    const username = "Punit"
    if (username === "Punit") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++++


console.log(addone(5))
function addone(num){
    return num + 1
}

// OR                             // Function Declaration

addTwo(5)                         // cannot access before initialization
const addTwo = function(num){
    return num + 2
}