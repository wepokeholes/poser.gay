const fadeinKF = [
    { opacity: 0 },
    { opacity: 1 }
];

const KFoptions = {
    duration: 1000, 
    fill: "forwards"
};

const fadeoutKF = [
    { opacity: 1 },
    { opacity: 0 }
]

function fadein1() {
    arrow2.animate(fadeinKF, KFoptions);
}

function fadeout1() {
    arrow2.animate(fadeoutKF, KFoptions);
}

function fadein2() {
    arrow3.animate(fadeinKF, KFoptions);
}

function fadeout2() {
    arrow3.animate(fadeoutKF, KFoptions);
}

function fadein3() {
    arrow4.animate(fadeinKF, KFoptions);
}

function fadeout3() {
    arrow4.animate(fadeoutKF, KFoptions);
}