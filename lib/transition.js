function Transition() {
    region = document.querySelectorAll("section[role='region']");
    for (i = 0; i < region.length; i++) {
        region[i].addEventListener("animationend", function(event) {
            if (event.target.classList.contains("left") || event.target.classList.contains("right") || event.target.classList.contains("current")) {
                classRegion = Transition.getClassPosition(event.target);
                event.target.setAttribute("data-position", classRegion);
                event.target.classList.remove(classRegion);
            }
        }, false);
    }

}

Transition.getClassPosition = function(element) {
    classRegion = Array("left", "current", "right");
    for (i = 0; i < classRegion.length; i++) {
        if (element.classList.contains(classRegion[i])) {
            return classRegion[i];
        }
    }
}

Transition.prototype.changeRegion = function(id) {
    current = document.querySelector("[data-position='current']");
    nextRegion = document.getElementById(id);
    if (nextRegion.getAttribute("data-position") === "right") {
        current.classList.add("left");        
        nextRegion.classList.add("current");
    } else if (nextRegion.getAttribute("data-position") === "left") {
        current.classList.add("right");
        nextRegion.classList.add("current");
    } else {
        console.log(nextRegion.getAttribute("data-position"));
    }
};
