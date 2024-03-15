// 1. 'this' in global space is Global object.
// console.log(this);

// 2. 'this' inside a function -return window /Global object in "non-Strick mode & rturn Undefined in "strict" mode..
//(It depends upon "Strict" or "non-Strict" mode.- this substitution)
// "use strict";
// function x() {
//   console.log(this);
// }
// let res = x();
// console.log(res);

// 3. 'this' inside a object method will return object {a:10, x:[function:x]}
// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   },
// };
// let res = obj.x();
// console.log(res);

// 4. 'this' inside arrow function  is lexically enclose (only access its parent's variable)
// var name = 'xyz';
// const obj = {
//     name: 'mdh',
//     getName: () => {
//         console.log(this.name);
//     }
// }

// const obj1 = {
//     name: 'mdh',
//     getName: function() {
//         console.log(this);
//         console.log(this.name);
//     }
// }
// obj.getName();
// obj1.getName();

// 5. 'this' inside DOM Elements- refers to  HTML Element

// 6. 'this inside call, apply and bind.

// Call Method- It is used to invoke a function by passing reference which is point to 'this' variable inside method
//let name1 = {
//   fname: "Jiya",
//   lname: "Kumari",
//   printFullname: function () {
//     console.log(this.fname + " " + this.lname);
//   },
// };
// let name2 = {
//   fname: "Aarav",
//   lname: "Kumar",
// };
// let res = name1.printFullname.call(name2);
// console.log(res);

// let name1 = {
//   fname: "Jiya",
//   lname: "Kumari",
//   printFullname: function (hometown, state) {
//     console.log(
//       this.fname + " " + this.lname + " from " + hometown + "," + state
//     );
//   },
// };
// name1.printFullname("ranchi", "Jharkhand");
// let name2 = {
//   fname: "Aarav",
//   lname: "Kumar",
// };
// // function borrowing
// name1.printFullname.call(name2, "Patna", "Bihar");

//Apply Method- It is exactly like call method but the difference is it takes second argument as array list.
// let name1 = {
//   fname: "Jiya",
//   lname: "Kumari",
//   printFullname: function (hometown, state) {
//     console.log(
//       this.fname + " " + this.lname + " from " + hometown + "," + state
//     );
//   },
// };
// name1.printFullname("ranchi", "Jharkhand");

// let name2 = {
//   fname: "Aarav",
//   lname: "Kumar",
// };
// // function borrowing
// name1.printFullname.apply(name2, ["Patna", "Bihar"]);

//Bind Method- It is used to bind and keep a copy of the method and can be invoked/used later.
//It does not directly call the function or method like call & apply method.
let name1 = {
  fname: "Jiya",
  lname: "Kumari",
  printFullname: function (hometown, state) {
    console.log(
      this.fname + " " + this.lname + " from " + hometown + "," + state
    );
  },
};
name1.printFullname("ranchi", "Jharkhand");

let name2 = {
  fname: "Aarav",
  lname: "Kumar",
};
let printName = name1.printFullname.bind(name2, "Giridih", "jharkhand");
printName();
