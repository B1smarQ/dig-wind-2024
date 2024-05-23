let currentTheme = sessionStorage.getItem('theme');

currentTheme?currentTheme:'dark';
let swap_button = document.getElementById('theme_swap');
let preloader = document.getElementById('preloader');
swap_button?.addEventListener('click', ()=>{changeTheme(['styleLight.css', 'styles/mainLight.css'], ['style.css', 'styles/main.css'])})
function changeTheme(styleLight:Array<string>, styleDark:Array<string>){
    console.log('swapping');
    if(currentTheme == 'light'){
        currentTheme = 'dark';
    }
    else{
        currentTheme = 'light';
    }
    sessionStorage.setItem('theme',currentTheme);
    swapStyle(styleLight, styleDark)
}

function FadeIn(){
    let opacity = 0;
    console.log('fading in');
    preloader.style.display = 'block';
    if(opacity <1){
        
        opacity +=0.05;
        setTimeout(() =>{FadeIn()},1)
        
    }
    preloader?.style.opacity = String(opacity);
}
function FadeOut(){
    let opacity = 1;
    console.log('fading out');
    if(opacity >0){
       
        opacity -=0.05;
        setTimeout(()=>{FadeOut()},1)
        
    }
    else{
        preloader.style.display = 'none';
    }
    preloader?.style.opacity = String(opacity);
     
    
}
function swapStyle(styleLight:Array<string>, styleDark:Array<string> ){
    let cssLink = document.getElementById('style-link1');
    let cssLink2 = document.getElementById('style-link2');
    if(preloader.style.opacity <=0.05)
    FadeIn();
    
    if(currentTheme == 'light'){
        cssLink?.setAttribute('href',styleLight[0]);
        cssLink2?.setAttribute('href',styleLight[1]);
    }
    else{
        cssLink?.setAttribute('href',styleDark[0]);
        cssLink2?.setAttribute('href',styleDark[1]);
    }
    if(preloader.style.opacity<=0.95)
    FadeOut();
}