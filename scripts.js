let elements = document.querySelectorAll("a");

elements.forEach((ele) => {
    ele.addEventListener("click", function () {
        elements.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
