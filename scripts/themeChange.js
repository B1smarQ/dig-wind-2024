let currentTheme = sessionStorage.getItem('theme');

currentTheme?currentTheme:'dark';
let swap_button = document.getElementById('theme_swap');
let preloader = document.getElementById('preloader');
const timer = ms => new Promise(res => setTimeout(res, ms))

if(currentTheme == 'light'){
    let cssLink = document.getElementById('style-link1');
    let cssLink2 = document.getElementById('style-link2');
    cssLink?.setAttribute('href','styleLight.css');
    cssLink2?.setAttribute('href','styles/mainLight.css');
}
swap_button?.addEventListener('click', ()=>{changeTheme(['styleLight.css', 'styles/mainLight.css'], ['style.css', 'styles/main.css'])})
function changeTheme(styleLight, styleDark){
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

async function FadeIn(){
    let opacity = 0;

    preloader.style.display = 'block';
    while(opacity <1){
        
        opacity +=0.005;
        
        preloader.style.opacity = String(opacity);
        await timer(1);
    }
    
}
async function FadeOut(){
    let opacity1 = 1;

    while(opacity1 >0){
       
        opacity1 -=0.005;
        
            preloader.style.opacity = String(opacity1);

            await timer(1);
        
        
        
    }
    preloader.style.display = 'none';
   
     
    
}
function swapStyle(styleLight, styleDark ){
    let cssLink = document.getElementById('style-link1');
    let cssLink2 = document.getElementById('style-link2');
    if(preloader.style.opacity <=0.05)
    FadeIn();
    setTimeout(()=>{
        if(currentTheme == 'light'){
            cssLink?.setAttribute('href',styleLight[0]);
            cssLink2?.setAttribute('href',styleLight[1]);
        }
        else{
            cssLink?.setAttribute('href',styleDark[0]);
            cssLink2?.setAttribute('href',styleDark[1]);
        }
        FadeOut();
    },1000)
    
}