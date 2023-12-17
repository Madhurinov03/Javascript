function focusFunction(element) {
  element.style.background = "yellow";
}
function blurFunction(element) {
  element.style.background = "white";
}
function inputFunction(element) {
  var x = element.value;
  document.getElementById("xyz").innerHTML = x;
}
