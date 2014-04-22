function Transition() {
}

Transition.prototype.changeRegion = function(id) {
    current = document.querySelector("[data-position='current']");
    nextRegion = document.getElementById(id);
    if (nextRegion.getAttribute("data-position") === "right") {
        current.classList.remove("current");
        current.classList.add("left");
        current.addEventListener("animationend", function() {
            current.setAttribute("data-position", "left");
            current.classList.remove("left");
        }, false);
        nextRegion.classList.remove("right");
        nextRegion.classList.add("current");
        nextRegion.addEventListener("animationend", function() {
            nextRegion.setAttribute("data-position", "current");
            nextRegion.classList.remove("current");
        }, false);
    } else if (nextRegion.getAttribute("data-position") === "left") {
        current.classList.add("right");
        current.addEventListener("animationend", function() {
            current.classList.remove("right");
            current.setAttribute("data-position", "right");
        }, false);
        nextRegion.classList.add("current");
        nextRegion.addEventListener("animationend", function() {
            nextRegion.classList.remove("current");
            nextRegion.setAttribute("data-position", "current");
        }, false);
    } else {
        console.log(nextRegion.getAttribute("data-position"));
    }
};
