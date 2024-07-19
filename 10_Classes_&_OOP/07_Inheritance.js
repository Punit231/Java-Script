class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Punit = new Teacher("Punit", "punit@google.com", "123")
Punit.logMe()
Punit.addCourse()

const newPunit = new User("Parmar")
newPunit.logMe()
// newPunit.addCourse()      // ERROR: User class can't access addCourse method of Teacher class

console.log(Punit === User);                 // false
console.log(Punit === Teacher);              // false
console.log(Punit instanceof Teacher);       // true
console.log(Punit instanceof User);          // true
console.log(newPunit instanceof User);       // true
console.log(newPunit instanceof Teacher);    // false