var sentence = prompt("Please Enter A String");
var count =0;
for(let i =0 ; i<sentence.length;i++)
{
    var ch=sentence.charAt(i);
    if(ch == 'a' || ch == 'o' || ch == 'e' || ch == 'u' || ch == 'i')
    {
        count++;
    } 

}
alert("number of vowles =  " + count);