/*==== Toggle Style Switcher ====*/
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
if (styleSwitcherToggler) {
    styleSwitcherToggler.addEventListener("click", () => {
        document.querySelector(".style-switcher").classList.toggle("open");
    });
}

// Hide style-switcher on scroll
window.addEventListener("scroll", () => {
    const styleSwitcher = document.querySelector(".style-switcher");
    if (styleSwitcher && styleSwitcher.classList.contains("open")) {
        styleSwitcher.classList.remove("open");
    }
});

/*==== Theme Colors ====*/
const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}

/*==== Theme Light & Dark ====*/
const dayNight = document.querySelector(".day-night");
if (dayNight) {
    dayNight.addEventListener("click", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-sun");
            icon.classList.toggle("fa-moon");
        }
        document.body.classList.toggle("dark");
    });

    window.addEventListener("load", () => {
        const icon = dayNight.querySelector("i");
        if (icon) {
            if (document.body.classList.contains("dark")) {
                icon.classList.add("fa-sun");
            } else {
                icon.classList.add("fa-moon");
            }
        }
    });
}