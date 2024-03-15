var x = document.getElementById("button");
var y = document.getElementById("select");
x.addEventListener("click", func1);
x.addEventListener("mouseover", func2);
x.addEventListener("mouseout", func3);
y.addEventListener("change", func4);
window.addEventListener("resize", func5);

function func1() {
  document.getElementById("demo").innerHTML += "clicked<br>";
}

function func2() {
  document.getElementById("demo").innerHTML += "mouse hover<br>";
}

function func3() {
  document.getElementById("demo").innerHTML += "mouse out<br>";
}

function func4() {
  const state = document.getElementById("select").value;
  document.getElementById("demo1").innerHTML = "You Select:" + state;
}
function func5() {
  let w = window.outerWidth;
  let h = window.outerHeight;
  let area = "Window Size : Width:" + w + ", Height:" + h;
  document.getElementById("demo").innerHTML = area;
}

const inputTextChnageHandler = () => {
  console.log(this.event.target.value);
};

const dropdownChangeHandler = () => {
  console.log(this.event.target.value);
};

const buttonClickHandler = () => {
  console.log(this.event);
};
