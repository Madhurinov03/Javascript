document.write("Javascript Target/Access/Get any DOM  element. <br>");
document.write(
  "<br> 1. Get element by  using ID - document.getElementById('id_name')<br>"
);
var elementById = document.getElementById("header"); // return single element
elementById.innerText = "Document object model";
console.log(elementById);

document.write(
  "<br> 2. Get element by  class name - document.getElementByClassName('id_name')<br>"
);
var elementByClass = document.getElementsByClassName("para"); // return Array of one or more than one element
elementByClass[0].textContent =
  "DOM:It is a root element of HTML document. The document is stored in browser in an object form which is document object form.";
console.log(elementByClass);

document.write(
  "<br> 3. Get element by  tag name - document.getElementByTagName('id_name')<br>"
);
var elementByTagName = document.getElementsByTagName("h2"); // return Array of one or more than one element
elementByTagName[0].innerHTML = "DOCUMENT OBJECT MODEL";
console.log(elementByTagName);

var elementId = document.getElementById("name");
elementId.innerText;
document.write("<br>");
document.write(elementId.innerText); //return all element value inside that div

document.write(
  "<br><br>Attribute Method: It return the value of the attribute."
);
var element = document.getElementById("name");
var elementByAttr = element.getAttribute("id");
console.log(elementByAttr);

document.write(
  "<br><br>AttributeNode Methods: It returns complete attribute(means both attribute name and value."
);
var ele = document.getElementById("name");
var elementByAttrNode = ele.getAttributeNode("id");
console.log(elementByAttrNode);

document.write(
  "<br><br>Attributes Methods:It returns all the attributes of an element."
);
var elem = document.getElementById("name");
var elementByAttributes = elem.attributes;
console.log(elementByAttributes);

document.write(
  '<br><br> Set Element  in  DOM :<br> 1.through innerText <br> 2.through innerHTML <br> 3.through setattribut-element.setAttribute("attribute name","attribute value")'
);
var elemen = document.getElementById("name");
var elementSetAttribute = elemen.setAttribute("class", "xyz"); // here we use setAttributeto add attribute and its value.
console.log(elementSetAttribute);

document.write(
  "<br><br>Query Selector:It is used to access any element from DOM in JS."
);
var elementQuerySelector = document.querySelector("#name");
console.log(elementQuerySelector);

document.write(
  "<br><br>Query Selector All:It is used to access all element from DOM in JS."
);
var elementQuerySelectorAll = document.querySelectorAll(".para");
console.log(elementQuerySelectorAll);

document.write(
  "<br><br>DOM CSS Style Method - Update DOM element CSS by three methods <br> 1.Style (Inline CSS)<br> 2.Class Name(External CSS)  <br> 3.Class List(External CSS"
);
// Style through inline css
document.write("<br><br>Style -- elementStyle.style.color = 'blue'");
var elementStyle = document.querySelector(".main");
elementStyle.style.color = "blue";

//class name
document.write('<br><br>Class Name -elementClassName.className = "para abc"');
var elementClassName = document.querySelector(".para");
elementClassName.className = "para abc";

//class list
document.write("<br><br>Class List -elementClassList.classList");
var elementClassList = document.querySelector(".para");
var classList = elementClassList.classList;
document.write("<br>elementClassList.classList - " + classList);

//remove class
document.write(
  "<br><br>Class Remove -elementClassList.classList.remove('abe')"
);
var classRemove = elementClassList.classList.remove("abc");
document.write("<br>elementClassList.remove- " + elementClassList.classList);
