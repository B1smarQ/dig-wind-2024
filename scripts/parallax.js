let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_front = document.getElementById('mountains_front');
let mountains_back = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let max_parallax_length = window.screen.height-300;
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    if(value<max_parallax_length){
        stars.style.left = value  + 'px';
        moon.style.top = value*1.05 + 'px';
        mountains_back.style.top = value*0.5 + 'px';
        text.style.marginRight = value*0.5 + 'px';
        mountains_front.style.top = value*0.25 + 'px';
    }
},
passive = false
)