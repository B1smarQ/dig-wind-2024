const track = document.getElementById("img-container");
window.onmousedown = e =>{
    track.dataset.mouseDown = e.clientX;
}

window.onmousemove = e =>{
    if(track?.dataset.mouseDown === '0')return;
    const mouseDelta = parseFloat(track.dataset.mouseDown) - e.clientX,
        maxDelta = window.innerWidth/2;
    
    const percentage = (mouseDelta/maxDelta) * -100,
        nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage;

        
    track.dataset.percentage = nextPercentage; 
    track.animate({
        transform: track.style.transform = `translate(${nextPercentage}%,-50%)`
    }, {duration:1200,fill: "forwards"});
    for(const image of track.getElementsByClassName("image")){
        image.style.objectPosition = `${nextPercentage} 50%`;
    }
}
window.onmouseup = e =>{
    track.dataset.mouseDown = '0';
    track.dataset.prevPercentage = track?.dataset.percentage;
}