// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I live in ${this.city}.`);
//     }
// };

// // Output: Alice
// console.log(person.name);  
// console.log(person["age"]); // Output: 25

// // Calling a method
// person.greet();

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj4={5:"a", 26:"b"}

const obj3=Object.assign({},obj1,obj2,obj4)
console.log(obj3);

// or
// const obj3 ={...obj1, ...obj2, ...obj4}
// console.log(obj3); it also gives same output.
