var loader = document.getElementById('preloader');
console.log("got loader");
window.addEventListener('load', function(){
    console.log("Loading");
    this.setTimeout(function(){
        FadeFunction();
    },500);
    
})
var opacity = 1;
function FadeFunction() {
    if (opacity>0) {
        opacity -= .005;
        setTimeout(function(){FadeFunction()},1);
    }
    else{
        loader.style.display = "none";
    }
    loader.style.opacity = opacity;
}
