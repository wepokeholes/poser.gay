const clicky = document.getElementById("clicky");

const fade = [
    { opacity: 1 },
    { opacity: 0 }
];
const options = {
    duration: 1500, 
    fill: "forwards"
};

const options2 = {
    duration: 500, 
    fill: "forwards"
};

const options3 = {
    duration: 0, 
    fill: "forwards"
};
const fadein = [
    { opacity: 0 },
    { opacity: 1 }
];


function clicky() {
    clicky.style.display = "block";
    clicky.animate(fadein, options2)
}

function clickydie() {
    clicky.style.display = "none";
}

function clickyout() {
    clicky.animate(fade, options2)
    setTimeout(clickydie, 500);
}
