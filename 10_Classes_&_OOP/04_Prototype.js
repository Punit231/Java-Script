let myName = "Punit     "
let mychannel = "#(231)...     "
console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


Object.prototype.Punit = function(){
    console.log(`Punit is present in all objects`);
}

Array.prototype.heyPunit = function(){
    console.log(`Punit says hello`);
}

heroPower.Punit()
myHeros.Punit()
myHeros.heyPunit()
// heroPower.heyPunit()            // ERROR: 



// ++++++++++++++++++++++++++ Inheritance +++++++++++++++++++++++++++

const User = {
    name: "Punit",
    email: "punit@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "PunitParmar     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Punit".trueLength()
"iceTea".trueLength()