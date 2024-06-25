// const tinderUser = new Object()         // singleton objects
// OR
const tinderUser = {}                   // non singleton objects
tinderUser.id = "123abc"
tinderUser.name = "Punit"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "punit@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Punit",
            lastname: "Parmar"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = { obj1, obj2 }
console.log(obj3);
// const obj4 = Object.assign({}, obj1, obj2)
// OR
const obj4 = {...obj1, ...obj2}
console.log(obj4);


const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "punit@gmail.com"
    },
    {
        id: 3,
        email: "parmar@gmail.com"
    },
]
console.log(users);
console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Java Script",
    price: "999",
    courseInstructor: "Punit"
}

// course.courseInstructor
// OR
const {courseInstructor} = course
console.log(courseInstructor);
// OR
const {courseInstructor: instructor} = course
console.log(instructor);

// {
//     "name": "Punit",
//     "coursename": "Java Script",              // JSON, not objects     // API
//     "price": "free"
// }

// [
//     {},
//     {},                                      // JSON     // Array Format API
//     {}
// ]