var screen_width;
var mybutton;
var active_width;
/*
@param {string} id - id элемента который нужно активировать/отключить
*/
active_width = 600;
screen_width = window.screen.width;
function activate_menu(id) {
    var el = document.getElementById(id);
    if (screen_width > active_width && el) {
        el.style.visibility = "visible";
    }
}
function deactivate_menu(id) {
    var el = document.getElementById(id);
    if (screen_width > active_width && el) {
        el.style.visibility = "hidden";
    }
}
mybutton = document.getElementById("up_button");
if (mybutton) {
    window.onscroll = function () { scrollFunction(); };
}
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }
    else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setTimeout(function () {
        var shown_elements = document.querySelectorAll('.show');
        shown_elements.forEach(function (element) {
            element.classList.remove('show');
        });
    }, 500);
}
var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
var hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach(function (element) {
    observer.observe(element);
});
