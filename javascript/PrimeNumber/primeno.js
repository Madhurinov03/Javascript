var n = 100;
var i = 1;
// for (var i = 0; i < n; i++) {
//   for (var j = 2; j < i; j++) {
//     if (i % j == 0) {
//       break;
//     }
//   }
//   if (i == j) {
//     console.log(i + " is a prime");
//   }
// }
while (i < n) {
  var j = 2;
  while (j < i) {
    if(i % j == 0){
      break;
    }
    j++;
  }
  if(i==j){
    console.log(i + " is a prime");
  }
  i++;
}
