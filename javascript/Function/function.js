function sum(a,b) {
    document.write(a+b +"<br>");
}
sum(30,40);
sum(2,3);
function naam(fname,lname) {
    document.write("My name is" +" "+fname +" "+lname +"<br>");
}
naam("Shashi","Kumar");
naam("Madhuri","Kumari");
// Function declaration
function sum(maths, phy, chem,eng,comp)
{
    var s=maths+phy+chem+eng+comp;
    return s;
}

// Function  expression -> annonymous function
const sum1 = function(maths, phy, chem,eng,comp){
    var s=maths+phy+chem+eng+comp;
    return s;
}

function percentage(tt)
{
    var per= (tt/500)*100;
document.write(per);
}
var total= sum1(45,78,56,58,62);
percentage(total);