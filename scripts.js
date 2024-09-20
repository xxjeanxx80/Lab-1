function toggleNav() {
    var nav = document.getElementById("mobile-nav");
    if (nav.style.width === "250px") {
        nav.style.width = "0"; // Close the nav
    } else {
        nav.style.width = "250px"; // Open the nav
    }
}
