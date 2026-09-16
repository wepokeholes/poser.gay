function fanfunc() {
    if (fancheck === 0 && x === 1)
        fanon()
    else
        fanoff()
}

function tvfunc() {
    if (tvcheck === 0 && x === 1)
        tvon()
    else
        tvoff()
}

function fanon() {
    fan.src="fan.gif";
    fansound.play();
    fancheck = 1;
}

function fanoff() {
    fan.src="fan.png";
    fansound.pause();
    fancheck = 0;
}

function tvon() {
    tv.src="tvon.gif";
    tvsound.play();
    tvcheck = 1;
}

function tvoff() {
    tv.src="tvoff.png";
    tvsound.pause();
    tvcheck=0;
}