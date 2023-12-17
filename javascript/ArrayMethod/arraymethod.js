var city = ["ranchi", "mumbai", "bangalore", "pune", "hydrabad"];

city.shift();
document.write("<br><br> Array shift - " + city);
city.unshift("Goa"); // important
document.write("<br><br>Array Unshift - " + city);

city.push("UP"); // important
document.write("<br><br>Array PUSH - " + city);
city.pop(); // important
document.write("<br><br> Array POP - " + city);

document.write("<br><br>Array length - " + city.length);
city[3] = "nagpur";
document.write("<br><br> Array modify - " + city);
city[1] = "chennai";
document.write("<br><br> Array modify - " + city);

city.sort();
document.write("<br><br> Array sort - " + city);
city.reverse();
document.write("<br><br> Array reverse - " + city);

var country = ["India", "USA"];
var newArea = country.concat(city);
document.write("<br><br> Array concat - " + newArea);
var arrJoin = city.join(", "); // important
document.write("<br><br> Array Join - " + arrJoin);

var area = city.slice(1, 4);
document.write("<br><br> Array slice - " + area);

city.splice(1, 1, "hazaribagh");
document.write("<br><br> Add new element using Array splice - " + city);

city.splice(1, 1); //important
document.write("<br><br> Delete an element using Array splice - " + city);

var arrCheck = Array.isArray(city);
document.write("<br><br> Array check - " + arrCheck);

var arrIndex = city.indexOf("Goa"); //important
document.write("<br><br> Array search fram starting Index - " + arrIndex);

city.unshift("chennai");
document.write("<br><br> Array  - " + city);

var arrIndex = city.indexOf("chennai", 1);
document.write("<br><br> Array search from first Index - " + arrIndex);

var arrIndex = city.lastIndexOf("chennai");
document.write("<br><br> Array search from Last Index - " + arrIndex);

const searchCity = city.includes("Goa"); //important
document.write("<br><br> Array includes - " + searchCity);

const place = city.some(checkCity);
document.write("<br><br> Array Some method - " + place);
function checkCity(ar) {
  return ar == "Goa";
}

const checkEverycity = city.every(checkCity);
document.write("<br><br> Array Every method- " + checkEverycity);
function checkCity(ar) {
  return ar == "Goa";
}

const findCity = city.find(checkCity);
document.write(
  "<br><br> Array Find method(return the value of the first element that pass a test)- " +
    findCity
);
function checkCity(ar) {
  return ar == "Goa";
}

const findIndexCity = city.findIndex(checkCity);
document.write(
  "<br><br> Array Find Index method(return the index of the first element that pass a test)- " +
    findIndexCity
);
function checkCity(ar) {
  return ar == "Goa";
}

const filterCity = city.filter(checkCity);
document.write(
  "<br><br> Array filter method(return the new array that pass a test)- " +
    filterCity
);
function checkCity(ar) {
  return ar == "Goa";
}

city.toString();
document.write(
  "<br><br> Array tostring method convert array into string - " + city
);

// city.fill("Ranchi");
// document.write("<br><br> Array fill method fill all the elements in an array with static value - " + city);

city.forEach(function (value, index) {
  document.write("<br><br>" + index + " : " + value + "<br>");
});
// Most important- map method in an array
document.write(
  "<br>Map Method- it modify the array elements and returns new array.<br>"
);
var array = [16, 4, 23, 7];
var newArray = array.map(test);
document.write(newArray);
function test(x) {
  return x + 10;
}
