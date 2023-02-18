alert("It Is the first release of a calculator ");
var num1 = Number(prompt("Enter The First Number"));
var num2 = Number(prompt("Enter The Second Number"));
while(isNaN(num1) || isNaN(num2))
{
 var num1 = Number(prompt(" this is not a numbner please enter a number"));
 var num2 = Number(prompt("this is not a numbner please enter a number"));
}
alert(num1 + " + " + num2  + " = " + (num1+num2) );