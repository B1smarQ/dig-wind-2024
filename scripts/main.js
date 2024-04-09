
let screen_width = window.screen.width;
function activate_menu(id){
  if(screen_width > 600){
    el = document.getElementById(id);
    el.style.visibility = "visible";
  }
}

function deactivate_menu(id){
  if(screen_width > 600){
    el = document.getElementById(id);
    el.style.visibility = "hidden";
  }
    
}
let mybutton = document.getElementById("up_button");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
  setTimeout(function(){
    const shown_elements = document.querySelectorAll('.show');
  shown_elements.forEach(element =>{
    element.classList.remove('show');
  });
  },500);
  
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting ) {
      entry.target.classList.add('show');
    }
  });
});

const hidden_elements = document.querySelectorAll('.hidden');

hidden_elements.forEach(element => {
  observer.observe(element);
});