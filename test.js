<Script>

var start = prompt("Please enter Start", "0");
var num1 = parseInt(start);

if (start == null || start == "abcdefghijklmnopqrstuvwxyz") {
    txt = "Error: Invalid Number.";
} else {
    txt = "The number:" + start + "is the start";
}

alert("Start is: " + num1);

var step = prompt("Please enter Step", "0");
var num2 = parseInt(step);

if (step == null || step == "abcdefghijklmnopqrstuvwxyz") {
    txt = "Error: Invalid Number.";
} else {
    txt = "The number:" + step + "is the Step";
}

alert("Step is: " + num2);

var end = prompt("Please enter End", "0");
var num3 = parseInt(end);

if (end == null || end == "abcdefghijklmnopqrstuvwxyz") {
    txt = "Error: Invalid Number.";
} else {
    txt = "The number:" + end + "is the end";
}

alert("End is: " + num3);

array.from(num1,num2,num3);
console.log(Array.from([num1,num2,num3]));

</Script>