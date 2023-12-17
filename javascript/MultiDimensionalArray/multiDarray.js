const { blue } = require("color-name");

var arr = [
  ["mohan", "23", "cse", "78.5%", "ranchi"],
  ["abhi", "11", "ece", "81.3%", "bokaro"],
  ["ram", "28", "me", "79.5%", "bangalore"],
  ["sammi", "30", "civil", "80.1%", "electronic city"],
  ["vinus", "36", "ee", "74.1%", "belandur"],
];
document.write(arr.length);
document.write("<table border= 1px cellspacing='0' cellpadding='5'");
for (var a = 0; a < arr.length; a++) {
  document.write("<tr>");
  for (var b = 0; b < arr[a].length; b++) {
    document.write("<td>" + arr[a][b] + "  " + "</td>");
  }
  document.write("<br>");
  document.write("</tr>");
}

document.write("</table>");
