let track = document.getElementById("img-container");
let link = document.getElementById("css-link");
window.onmousedown = e =>{
    track.dataset.mouseDown = e.clientX;
    link?.setAttribute("href","style.css");
}
window.onmousemove = e =>{
    if(track?.dataset.mouseDown === '0')return;
    const mouseDelta = parseFloat(track.dataset.mouseDown) - e.clientX,
        maxDelta = window.innerWidth/2;
    
    const percentage = (mouseDelta/maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage;

    nextPercentage = Math.max(nextPercentage,-100);
    nextPercentage = Math.min(1,nextPercentage);
    track.dataset.percentage = nextPercentage; 
    track.animate({
        transform: track.style.transform = `translate(${nextPercentage}%,-50%)`
    }, {duration:1200,fill: "forwards"});
    for(let image of track.getElementsByClassName("image")){
        image.animate({
            objectPosition : 100+nextPercentage + "%" + " " +"50%"
        }, {duration:2000,fill: "forwards"});
        
    }
}
window.onmouseup = e =>{
    track.dataset.mouseDown = '0';
    track.dataset.prevPercentage = track?.dataset.percentage;
    link?.setAttribute("href","style2.css");
}