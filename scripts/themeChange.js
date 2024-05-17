var currentTheme = sessionStorage.getItem('theme');
currentTheme ? currentTheme : 'dark';
function changeTheme() {
    if (currentTheme == 'light') {
        currentTheme = 'dark';
    }
    else {
        currentTheme = 'light';
    }
    sessionStorage.setItem('theme', currentTheme);
}
function swapStyle(styleLight, styleDark) {
    var cssLink = document.getElementById('css-link');
    if (currentTheme == 'light') {
        cssLink === null || cssLink === void 0 ? void 0 : cssLink.setAttribute('href', styleLight);
    }
    else {
        cssLink === null || cssLink === void 0 ? void 0 : cssLink.setAttribute('href', styleDark);
    }
}
