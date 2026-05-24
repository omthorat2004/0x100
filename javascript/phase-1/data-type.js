var name = "om" // can change, decide later sometimes after long time after the any even, can be reassigned, can be redeclare hoisted but give undefined
const surname = "thorat" //  this get at the startung we never change , cannit be reassigned, cannot be redeclare hoisted but give TDZ
let roll_no = "3174" // this change time to time , can be reassigned cannot be redeclare. hoisted but give TDZ
let height;
// let height = 100; // will generate an error


// usage of var should be avoided most of the time


// function scopped (var) and block scopped (let,const)

// function scopped (var) and block scopped (let,const)


for(var i = 0;i<10;i++){
    console.log(i)
}
console.log(i) // accessible becuase they all are in same global function



for(let j = 0;j<10;j++){
    console.log(j)
}
// console.log(j) // generate an error becuase let and const is block scopped it works accessihble inside the {} 

// function hello(){
//     var x = 10;
//     console.log(x)
// }

// console.log(x) generate an error



// Data types in javascript

// string,number, boolean,bigint, null, undefined, symbol 
// remember theres id diff between undefined and null they are not the same
// Above one are all primitive types
console.log(null == undefined) // true 

console.log(null===undefined)//false due to type coercion in === there types are different
// most of the people dont know symbol

let id = Symbol("id") // its used to create a unique identifier

const obj = {
    name:'om',
    [id]:1
}

console.log(obj)
console.log(obj.id) // undefined

const privateData = Symbol("secret")

class User {
    constructor(name){
        this.name = name
        this[privateData] = "secret"
    }
}

user = new User("Om")
console.log(Object.keys(user)) // [ 'name' ]
// forget about this we can use private variable instead of this which are not accessible outside the class

// Non Primitive Types

// Object, Array, Function


// falsy values in javascript 
// false 0 "" (empty string) null undefined NaN 

// type coercion and type checking

// type coercion converts one data type into another 
// it can be implicit or explicity i mean in explicit we manually change the type where as in the implicit javascript does that

// type checking is just checking type of varible