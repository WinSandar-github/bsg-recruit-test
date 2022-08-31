if (typeof (localStorage) != "undefined")
{
    if (localStorage.getItem("auth") == null) {
        location.href = "login.html";
    }
}
else {
    location.href = "login.html";
}
