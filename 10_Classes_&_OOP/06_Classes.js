// ES6

class UserOne {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const Punit = new UserOne("Punit", "punit@gmail.com", "123")
console.log(Punit.encryptPassword());
console.log(Punit.changeUsername());


// Behind the Scene

function UserTwo(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

UserTwo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
UserTwo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Parmar = new UserTwo("Parmar", "parmar@gmail.com", "123")
console.log(Parmar.encryptPassword());
console.log(Parmar.changeUsername());