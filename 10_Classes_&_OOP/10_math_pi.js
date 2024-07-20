const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);


const iphone = {
    name: 'iphone15',
    price: 100000,
    isAvailable: true,

    orderiphone: function(){
        console.log("iphone nhi hain");
    }
}
console.log(Object.getOwnPropertyDescriptor(iphone, "name"));


Object.defineProperty(iphone, 'name', {
    writable: false,
    enumerable: true, 
})
console.log(Object.getOwnPropertyDescriptor(iphone, "name"));


for (let [key, value] of Object.entries(iphone)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}