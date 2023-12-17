function checkFontSize() {
  const num = document.getElementById("fontSize").value;
  const resultElement = document.getElementById("result");
  if (num < 5) {
    resultElement.textContent="tiny";
  } else if (num < 10) {
    resultElement.textContent = "small";
  } else if (num < 15) {
    resultElement.textContent = "medium";
  } else if (num < 20) {
    resultElement.innerText = "large";
  } else {
    alert("Font size should be less than 20");
  }
}
