function Transition(beginRegionId) {
    region = document.querySelectorAll("section[role='region']");
    for (i = 0; i < region.length; i++) {
        if (typeof (beginRegionId) == "undefined" && i == 0) {
            attribute = "current";
        } else if (region[i].getAttribute("id") == beginRegionId) {
            attribute = "current";
        } else {
            attribute = "right";
        }
        region[i].setAttribute("data-position", attribute);
        region[i].addEventListener("animationend", function(event) {
            if (event.target.classList.contains("left") || event.target.classList.contains("right") || event.target.classList.contains("current")) {
                classRegion = Transition.getClassPosition(event.target);
                event.target.setAttribute("data-position", classRegion);
                event.target.classList.remove(classRegion);
            } else {

            }
        }, false);
    }
    this.stackRegion = new Array(document.querySelector("section[role='region']").getAttribute("id"));
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
    indexExistsStackRegion = this.stackRegion.lastIndexOf(id);
    if (indexExistsStackRegion > -1) {
        this.stackRegion.pop();
        for (i = this.stackRegion.length - 1; i > indexExistsStackRegion; i--) {
            changePreviousRegions = document.getElementById(this.stackRegion.pop());
            if (nextRegion.getAttribute("data-position") === "right") {
                changePreviousRegions.setAttribute("data-position", "left");
            } else if (nextRegion.getAttribute("data-position") === "left") {
                changePreviousRegions.setAttribute("data-position", "right");
            }
        }
    } else {
        this.stackRegion.push(id);
    }
    if (nextRegion.getAttribute("data-position") === "right") {
        current.classList.add("left");
        nextRegion.classList.add("current");
    } else if (nextRegion.getAttribute("data-position") === "left") {
        current.classList.add("right");
        nextRegion.classList.add("current");
    } else {

    }
};