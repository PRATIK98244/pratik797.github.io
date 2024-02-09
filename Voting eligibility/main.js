// find age for eligibility for voting
function ag()
{
var res=document.getElementById("age").value;
if(res>=18)
{
document.getElementById("result").innerHTML="You are Eligible for Voting";
window.location='https://www.eci.gov.in/';
return false;
}
else 
{
    document.getElementById("result").innerHTML="You are Not Eligible for Voting";
    window.location='D:\Projects\New folder\Voting eligibility\vote.html';
    return false;
}
}