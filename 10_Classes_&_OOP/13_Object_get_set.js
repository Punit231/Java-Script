const User = {
    _email: 'p@punit.com',
    _password: "abc",


    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
}

const Punit = Object.create(User)
console.log(Punit.email);