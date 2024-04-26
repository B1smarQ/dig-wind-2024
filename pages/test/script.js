var track = document.getElementById("img-container");
var link = document.getElementById("css-link");
window.onmousedown = function (e) {
    track.dataset.mouseDown = e.clientX;
    link === null || link === void 0 ? void 0 : link.setAttribute("href", "style.css");
};
window.onmousemove = function (e) {
    if ((track === null || track === void 0 ? void 0 : track.dataset.mouseDown) === '0')
        return;
    var mouseDelta = parseFloat(track.dataset.mouseDown) - e.clientX, maxDelta = window.innerWidth / 2;
    var percentage = (mouseDelta / maxDelta) * -100, nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage;
    nextPercentage = Math.max(nextPercentage, -100);
    nextPercentage = Math.min(1, nextPercentage);
    track.dataset.percentage = nextPercentage;
    track.animate({
        transform: track.style.transform = "translate(".concat(nextPercentage, "%,-50%)")
    }, { duration: 1200, fill: "forwards" });
    for (var _i = 0, _a = track.getElementsByClassName("image"); _i < _a.length; _i++) {
        var image = _a[_i];
        image.animate({
            objectPosition: 100 + nextPercentage + "%" + " " + "50%"
        }, { duration: 2000, fill: "forwards" });
    }
};
window.onmouseup = function (e) {
    track.dataset.mouseDown = '0';
    track.dataset.prevPercentage = track === null || track === void 0 ? void 0 : track.dataset.percentage;
    link === null || link === void 0 ? void 0 : link.setAttribute("href", "style2.css");
};
