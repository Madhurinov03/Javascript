function checkFontSize() {
  const num = document.getElementById("fontSize").value;
  const resultElement = document.getElementById("result");
  switch (true) {
    case num < 5:
      resultElement.textContent = "tiny";
      break;
    case num < 10:
      resultElement.textContent = "small";
      break;
    case num < 15:
      resultElement.textContent = "medium";
      break;
    case num < 20:
      resultElement.textContent = "large";
      break;
    default:
        alert("Font size should be less than 20");
  }
}
