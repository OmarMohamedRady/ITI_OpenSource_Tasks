
do{
    var age = Number(prompt("please enter your age"));
    while(age<=0)
        {
            age=Number(prompt("You entered invalid age \n please try again"));
        }
    if(age>=1 && age<=10)
        alert("Child is between 1-10");
    else if(age>=11 && age<=18)
        alert("Teenager is between 11-18");
    else if(age>=19 && age<=50)
        alert("Grown up is between 19-50");
    else 
        alert(" Old is greater than 50");

    var check = confirm("Do you want to enter a another age");
}
while(check);