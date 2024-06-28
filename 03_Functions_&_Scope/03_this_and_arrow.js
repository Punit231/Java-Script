const user = {
    username: "Punit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "Harsh"
user.welcomeMessage()
console.log(this);


function chai1(){
    let username = "Punit"
    console.log(this.username);
    // console.log(this);
}
chai1()

const chai2 = function () {
    let username = "Punit"
    console.log(this.username);
    // console.log(this);
}
chai2()

const chai3 = () => {
    let username = "Punit"
    console.log(this.username);
    // console.log(this);
}
chai3()


const addOne = (num1, num2) => {
    return num1 + num2
}
console.log(addOne(3, 4))

// OR

const addTwo = (num1, num2) =>  num1 + num2
console.log(addTwo(3, 4))

// OR

const addThree = (num1, num2) => ( num1 + num2 )
console.log(addThree(3, 4))

// OR

const addFour = (num1, num2) => ({username: "Punit"})
console.log(addFour(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()