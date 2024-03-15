let person = {
  fname: "Madhuri",
  lname: "Kumari",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};
const result = person.fullName();
console.log(result);
