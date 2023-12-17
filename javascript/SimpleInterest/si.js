function si(p, r, t) {
  let interest = (p * r * t) / 100;
  return interest;
}
let res = si(200, 10, 2);
console.log("Simple interest=" + res);
