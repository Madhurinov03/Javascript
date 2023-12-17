// what is document ?
// Ans - The document object represents your web page.
document.write("External Javascript");
// implement html tag inside javascript
document.write(
  "<br><br><i><b>This is statement thats style is italic and in bold font</b></i><br>"
);
document.write(
  "<br>Variable -> It is storage area which contains variable name and their values such as number, string,etc.<br>"
);
var a = "JS"; //variable declaration
var a = "var variable<br>"; // we can overwrite the value of variable and declare variable again.
let b = "abc"; //let is a variable which a value like var
b = "let variable<br>"; //In this we can overwrite the value but cannot declare variable again.
document.write(a);
document.write(b);
const c = "const variable"; //const is another variable which value can't be changed once it assigned and also can't declare again.
document.write(c);
document.write("<br>Data type- it tells type of data of a variable");
document.write("<br>Types of datatype:<br>");
var a = "Alphabet";
document.write(a);
document.write(" - ");
document.write(typeof a);
document.write("<br>");
var a = 56;
document.write(a);
document.write(" - ");
document.write(typeof a);
document.write("<br>");
var a = true;
document.write(a);
document.write(" - ");
document.write(typeof a);
document.write("<br>");
var a = ["A", "R", "R", "A", "Y"];
document.write(a);
document.write(" - ");
var isArr = Array.isArray(a);
document.write(isArr);
document.write("<br>");
var bb;
document.write(bb);
document.write("<br>");
var a = { alpha: "abc", num: 34 };
document.write(a);
// document.write(JSON.stringify(a));
document.write(" - ");
document.write(typeof a);
