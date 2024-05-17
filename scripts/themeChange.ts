let currentTheme = sessionStorage.getItem('theme');

currentTheme?currentTheme:'dark';


function changeTheme(){
    if(currentTheme == 'light'){
        currentTheme = 'dark';
    }
    else{
        currentTheme = 'light';
    }
    sessionStorage.setItem('theme',currentTheme);
}

function swapStyle(styleLight:string, styleDark:string ){
    let cssLink = document.getElementById('css-link');
    if(currentTheme == 'light'){
        cssLink?.setAttribute('href',styleLight);
    }
    else{
        cssLink?.setAttribute('href',styleDark);
    }
}