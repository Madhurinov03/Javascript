var a = {
  fname: "Madhuri",
  lname: "Kumari",
  age: 28,
  //  Array within object
  codeLearn: ["C", "C++", "Java", "JavaScript"],
  //   function within object
  fullName: function () {
    return this.fname + " " + this.lname;
  },
  idNumber: function () {
    return 23456;
  },
  //   object within object
  live: {
    city: "Bangalore",
    country: "India",
  },
  // here this indicates variable name 'a'.
};
// console.log(a);
// document.write(a.idNumber());
// document.write("<br>" + " " + a.codeLearn[3]);
// document.write("<br>" + a.fullName());
// document.write("<br>" + a.live.city);
// Array of object
var arr = [
  { name: "Rahul Kumar", age: 10 },
  { name: "Vinay Kumar", age: 13 },
  { name: "Rani Kumari", age: 17 },
];
console.log(arr);
for (var b = 0; b < arr.length; b++) {
  document.write("<br>" + arr[b].name);
}
//  Using for/in loop
for (var key in a) {
  document.write(key + ":" + a[key] + "<br>");
}
var arrKeys = Object.keys(a);
document.write("Print all keys/properties of an object" + " : ");
document.write(arrKeys + "<br>");

arrKeys.forEach(function(element){
  document.write(element + ":" + a[element] + "<br>");
});


var arrValues = Object.values(a);
document.write("Print all values of an object" + " : ");
document.write(arrValues + "<br>");

