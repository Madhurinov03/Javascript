// Length- It returns length of a string.
var str = " Javascript is a great langauage";
var a = str.length;
console.log(a);

//Extracting string Character-
// chatAt()- It returns character at specified index of a string.
let text1 = " Hello World";
let charAt = text1.charAt(3);
console.log(charAt);

//charCodeAt()- It return Uni-code / ASCII code of a string.
let text2 = "Javasrcipt";
let charCodeAt = text2.charCodeAt(2);
console.log(charCodeAt);

//at()- It is same as charAt() but only the difference is it allows the use of negative indexes.
// Property Access []
let text3 = "hello";
let char = text3[1];
console.log(char);

//Extracting String Part-
//slice(start,end)-It returns extracted part in a new string.
let text4 = "Apple, Banana,Kiwi";
let part = text4.slice(7, 13);
console.log(part);

let part2 = text4.slice(7); //start from 7.
console.log(part2);

let part3 = text4.slice(-7); //if parameter is negative then extracted part of a string counting from end.
console.log(part3);

//substring()- It is similar to slice() but only the difference is that negative value is treated  as invalid(0).
let substring = text4.substring(-3, 6);
console.log(substring);

//substr()- It is also similar to slice()but only difference is 2nd parameter tells the length of extracted part.
let substr = text4.substr(14, 4);
console.log(substr);

//Converting to Upper and Lower case.
//toUpperCase()- string is converted to upper case.
let text5 = "Pioneer Sun Bloosom";
let toUpperCase = text5.toUpperCase();
console.log(toUpperCase);

//toLowerCase()- string is converted to lower case.
let toLowerCase = text5.toLowerCase();
console.log(toLowerCase);

//concat()- It joins two or more strings.
let txt1 = "Beauti";
let txt2 = "ful";
let word = txt1.concat(txt2);
console.log(word);

//trim()- It removes whitespace from both (start & end) sides of a string.
let text6 = "  ..   hello  ..  ";
let trim = text6.trim();
console.log(trim);
 
//trimStart()- remove whitespace  only from start .
let trimStart = text6.trimStart();
console.log(trimStart);

//trimEnd()- remove whitespace  only from end .
let trimEnd = text6.trimEnd();
console.log(trimEnd);



