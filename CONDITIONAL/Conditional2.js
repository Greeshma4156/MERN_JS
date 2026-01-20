function Checklogin(isLoggedIn,isProfileComplete)
{
    if (isLoggedIn===false)
    {
        msg="please login"
    }
    else if(isLoggedIn===true && isProfileComplete===false)
    {
        msg="complete the profile"
    }
    else 
    {
        msg="Welcome back"
    }
}
Checklogin(false,false)
console.log(msg)