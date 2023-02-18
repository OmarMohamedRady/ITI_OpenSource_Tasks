
function clockConvert (clk)
{
    if(clk==0)
      alert( "12 AM");
    else if(clk==12)
      alert("12 PM")
    else if(clk>=1 && clk<=11)
      alert( clk + " AM")
    else if(clk>=13 && clk<=23)
      alert((clk-12)+ " PM");
    else
      alert("You Must enter number between 0 to 23 ");
}

var clkConv = prompt("Enter number  to  convert the 24 hour clock to 12");
if(clkConv==null || isNaN(clkConv)) 
  {
    alert("You entered Invalid Number");
  } 
else
  {
    clkConv=Number(clkConv);
    clockConvert(clkConv);
  }