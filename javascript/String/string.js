var str = "  Javascript is a great language.";
var stringLength = str.length;
document.write(stringLength);
//string length calculate the number of characters and space

var lowerCase = str.toLowerCase();
document.write("<br>" + lowerCase);
// string lower case

var upperCase = str.toUpperCase();
document.write("<br>" + upperCase);
//string upper case
var include = str.includes("is");
document.write("<br>" + include);
//string include tells required word is include or not.
var startWith = str.startsWith("gre");
document.write("<br>" + startWith);
//string  starts with character
var endsWith = str.endsWith("age");
document.write("<br>" + endsWith);
//string  ends with character
var search = str.search("is");
document.write("<br>" + search);
// string search function return index value  if word is not found then  it return -1
var match = str.match(/is/g);
document.write("<br>" + match);
//string match
var index = str.indexOf("is");
document.write("<br>" + index);
//string index value
var lastIndex = str.lastIndexOf("is");
document.write("<br>" + lastIndex);
//string lastIndexOf function tells  index value from the right side.
var replace = str.replace("is", "are");
document.write("<br>" + replace);
//string replace
var trim = str.trim(" a");
document.write("<br>" + trim);
//string trim will trim space area
// alert(str);
var characterAt = str.charAt(8);
document.write("<br>" + characterAt);
//string  charAt display character  value corresponding its index provided.
var characterCodeAt = str.charCodeAt(5);
document.write("<br>" + characterCodeAt);
//string charCodeAt function give output ASCII value of character bye providing index value of string.
// var fromCharacterCode = str.fromCharCode(90);
// document.write("<br>" + fromCharacterCode);
//string fromCharCode give character /symbol  corresponding its ASCII value provided.
var str2 = " hello";
var conCat = str.concat(str2);
document.write("<br>" + conCat);
//string concat join two strings
var split = str.split("r");
document.write("<br>" + split);
//string split function  divide the string content with comma
var repeat = str.repeat(4);
document.write("<br>" + " " + repeat);
//string repeat iterate as the number of times provided.
var slice = str.slice(3, 11);
document.write("<br>" + slice);
//string slice function cut the string using index value
var subStr = str.substr(3);
document.write("<br>" + subStr);
