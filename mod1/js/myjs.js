$("#messaging").click(
    function () {
        $("#newpop").css("display", "inline")
    }
);
$("#messagingafter").click(
    function () {
        $("#newpop").css("display", "none")
    }
);
var modal = document.getElementById("mypost");
var btn = document.getElementById("btnstartpos");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/////////////////////////////////////////////////////
$("#exampleFormControlTextarea1").click(function () {

    $("#btnpost").attr("disabled", false);
});



