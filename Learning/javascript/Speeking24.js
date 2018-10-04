setInterval(function ()
{
    sendRefresh(0);
    console.log("Refreshed.");
    return false;
}, 7000)



setInterval(function ()
{
    sendRefresh(0);
    console.log("Refreshed.");
    if ($($(".raport_data2", document)[0]).html().toLowerCase().indexOf("kristianshathiyah") >= 0)
        alert("Just comes Online!");
    else
        console.log("Offline");
    return false;
}, 7000)