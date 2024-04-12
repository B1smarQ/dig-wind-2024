let screen_width;
let mybutton;
/*
@param {string} id - id элемента который нужно активировать/отключить
*/
screen_width = window.screen.width;
function activate_menu(id) {
    let el = document.getElementById(id);
    if (screen_width > 600 && el) {
        el.style.visibility = "visible";
    }
}
function deactivate_menu(id) {
    let el = document.getElementById(id);
    if (screen_width > 600 && el) {
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
        const shown_elements = document.querySelectorAll('.show');
        shown_elements.forEach(element => {
            element.classList.remove('show');
        });
    }, 500);
}
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hidden_elements = document.querySelectorAll('.hidden');
hidden_elements.forEach(element => {
    observer.observe(element);
});
