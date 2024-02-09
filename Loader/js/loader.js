var load;
function mainFunction()
{

    load=setTimeout("display()",900);

}

function display()
{
    document.getElementById("main-content").style="display:block !important";
    document.getElementById("loader").style="display:none !important";
}