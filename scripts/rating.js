let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");


let preset_ratings = [5, 4, 4, 4, 5];
let rating = 0;

function gfg(n) {
    remove();
    rating = 0;
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    preset_ratings.push(n);
    for(let x = 0;x<preset_ratings.length;x++){
        rating += preset_ratings[x];
        result = rating / preset_ratings.length;
    }
    console.log(rating);
    
    output.innerText = "Rating is: " + result + "/5";
}
 
function remove() {
    let i = 0;
    preset_ratings.splice(-1);
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}