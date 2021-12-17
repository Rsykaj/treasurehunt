"use strict";
class Treasure {
    constructor() {
        this.x = Math.ceil(Math.random() * window.innerWidth);
        this.y = Math.ceil(Math.random() * window.innerHeight);
    }
}
let treasure;
let oldDistance;
let tries = 0;
document.addEventListener("click", checkDistance);
let treasureImage = document.getElementById("treasure");
init();
function init() {
    treasure = new Treasure;
    treasureImage.style.display = "none";
    treasureImage.style.left = treasure.x.toString() + "px";
    treasureImage.style.top = treasure.y.toString() + "px";
    tries = 0;
}
function checkDistance(event) {
    tries += 1;
    let yDistance = Math.abs((treasure.y + (treasureImage.offsetHeight / 2)) - event.clientY);
    let xDistance = Math.abs((treasure.x + (treasureImage.offsetWidth / 2)) - event.clientX);
    let distance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    let resultBox = document.getElementById("result");
    if (distance < (treasureImage.offsetWidth)) {
        treasureImage.style.display = "inline";
        resultBox.innerHTML = `You found it, it took you ${tries} tries.`;
        setTimeout(init, 5000);
    }
    else if (distance < oldDistance) {
        resultBox.innerHTML = "Warmer";
    }
    else if (distance > oldDistance) {
        resultBox.innerHTML = "Colder";
    }
    oldDistance = distance;
}
//# sourceMappingURL=script.js.map