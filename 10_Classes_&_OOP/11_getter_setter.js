class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toLowerCase()
    }

    set email(value){
        this._email = value
    }
 
    get password(){
        return `${this._password}Punit`
    }

    set password(value){
        this._password = value
    }
}

const Punit = new User("punit@Punit.ai", "abc")
console.log(Punit.email);
console.log(Punit.password);