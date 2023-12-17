var counter = 0;

//click event
function hello() {
  alert("hi everyone");
}

// button click event
const btnElement = document.getElementById("btn-id");
btnElement.innerText = "innerText";
btnElement.addEventListener("click", hello);
// mouse hover event
btnElement.addEventListener("mouseover", function () {
  alert("Mouse over button");
});

const btn1Element = document.getElementById("btn1-id");
// counter event
btn1Element.addEventListener("click", function () {
  counter = counter + 1;
  alert(counter);
});
btn1Element.addEventListener("click", function () {
  btn1Element.innerText = "innerText-Madhuri";
});

btn1Element.addEventListener("click", function () {
  for (var c = 1; c <= 10; c++) {
    alert(c);
  }
});
var headerElement = document.getElementById("headerText");
document.getElementById("btn1").addEventListener("click", fun1);
document.getElementById("btn2").addEventListener("click", fun2);
document.getElementById("btn3").addEventListener("click", fun3);
document.getElementById("btn4").addEventListener("mouseover", fun4);
document.getElementById("btn4").addEventListener("mouseout", fun5);
function fun1() {
  headerElement.innerText = "Hello World- Welcome to Event Handler";
}
function fun2() {
  headerElement.innerHTML = "";
}
function fun3() {
  headerElement.innerHTML = "Hello world";
}
function fun4() {
  document.getElementById("btn4").style.background = "red";
  document.getElementById("btn4").style.color = "white";
  // document.getElementById("btn4").style.fontSize = "20px";
}
function fun5() {
  document.getElementById("btn4").style.background = "#efefef";
  document.getElementById("btn4").style.color = "black";
  document.getElementById("btn4").style.borderRadius = "2px";
  document.getElementById("btn4").style.borderWidth = "1px";
  // document.getElementById("btn4").style.fontSize = "14px";
}
