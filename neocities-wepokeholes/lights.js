const switchimg = document.getElementById("switch")
const mask1 = document.getElementById("followimg")
const fan = document.getElementById("fan")
const lamp = document.getElementById("lamp")
const tv = document.getElementById("tv")
const arrow2 = document.getElementById("arrow2")
const arrow3 = document.getElementById("arrow3")
const arrow4 = document.getElementById("arrow4")
let x = 1;
let fancheck = 1;
let tvcheck = 1;

const fansound = document.getElementById("fansound")
const tvsound = document.getElementById("tvsound")
const soundPool = [];
const poolSize = 5; // Max 5 simultaneous plays
const soundUrl = 'switch.wav';

tvsound.volume = 0.1;
tvsound.autoplay = true;
tvsound.loop = true;
fansound.autoplay = true;
fansound.loop = true;

// Preload the pool
for (let i = 0; i < poolSize; i++) {
  const audio = new Audio(soundUrl);
  soundPool.push(audio);
}

function playSoundFromPool() {
  // Find the first inactive (paused) audio instance
  const freeInstance = soundPool.find(audio => audio.paused);
 
  if (freeInstance) {
    freeInstance.currentTime = 0; // Reset to start (in case it finished playing)
    freeInstance.play().catch(err => console.error('Play failed:', err));
  } else {
    // Optional: If all instances are busy, do nothing or log a warning
    console.warn('No free audio instances! Increase pool size.');
  }
}


function lightswitchoff() {
    switchimg.src = "switchoff.png";
    mask1.src = "mask.png";
    fan.src = "fan.png";
    lamp.src="lampoff.gif";
    tv.src="tvoff.png";
    x = 0;
    fancheck = 0;
    tvcheck = 0;
    fansound.pause();
    tvsound.pause();
}

function lightswitchon() {
    switchimg.src = "switchon.png";
    mask1.src = "";
    fan.src = "fan.gif";
    lamp.src="lampon.gif";
    tv.src="tvon.gif";
    x = 1;
    fancheck = 1;
    tvcheck = 1;
    fansound.play();
    tvsound.play();
}

function lightswitch() {
    playSoundFromPool();
    if (x === 1)
        lightswitchoff();
    else
        lightswitchon();

}