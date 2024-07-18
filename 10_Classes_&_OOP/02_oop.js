// +++++++++++++++++++++++++ Object Literal ++++++++++++++++++++++++++++

const user = {
    username: "Punit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);



// +++++++++++++++++++++++++ Constructor Function ++++++++++++++++++++++++++++

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("Punit", 12, true)
const userTwo = new User("#(231)...", 11, false)
console.log(userOne.constructor);
console.log(userTwo);