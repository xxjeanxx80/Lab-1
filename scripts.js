function toggleNav() {
    var nav = document.getElementById("mobile-nav");
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        nav.style.width = "0"; // Close the menu
    } else {
        nav.classList.add("open");
        nav.style.width = "80%"; // Open the menu
    }
}

