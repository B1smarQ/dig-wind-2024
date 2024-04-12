var stars = document.getElementById('stars');
var moon = document.getElementById('moon');
var mountains_front = document.getElementById('mountains_front');
var mountains_back = document.getElementById('mountains_behind');
var text = document.getElementById('text');
var max_parallax_length = window.screen.height - 300;
window.addEventListener('scroll', function () {
    var value = window.scrollY;
    if (value < max_parallax_length && stars && moon && mountains_back && text && mountains_front) {
        stars.style.left = value + 'px';
        moon.style.top = value * 0.625 + 'px';
        mountains_back.style.top = value * 0.5 + 'px';
        text.style.marginRight = value + 'px';
        mountains_front.style.top = value * 0.25 + 'px';
    }
}, passive = false);
