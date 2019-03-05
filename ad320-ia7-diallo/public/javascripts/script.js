
var z = document.getElementById("container");

z.addEventListener("click", clickHandler);


function clickHandler() {
    if (z.style.backgroundColor == "red") {
        z.style.backgroundColor = "blue";
    } else {
        z.style.backgroundColor = "blue";
    }
    return true;
}