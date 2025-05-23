document
.getElementById("mobileNavButton")
.addEventListener("click", function () {
    const mobileNav = document.getElementById("mobileNav");
    const buttonIcon = document.querySelectorAll("#bars");
    
    mobileNav.classList.toggle("visible");
    
    buttonIcon.forEach(bar => {
        if (mobileNav && mobileNav.classList.contains("visible")) {
            bar.classList.add("active");
        } else {
            bar.classList.remove("active");
        }
    })
});