const mouse1 = document.getElementById("mouse1")
const mouse2 = document.getElementById("mouse2")
let m1d = 0;
let m2d = 1;
let paused1 = 0;
let paused2 = 0;

const soundPool2 = [];
const poolSize2 = 5; // Max 5 simultaneous plays
const soundUrl2 = 'mouse.wav';


for (let i = 0; i < poolSize2; i++) {
  const audio2 = new Audio(soundUrl2);
  soundPool2.push(audio2);
}

function playSoundFromPool2() {
  // Find the first inactive (paused) audio instance
  const freeInstance2 = soundPool2.find(audio2 => audio2.paused);
 
  if (freeInstance2) {
    freeInstance2.currentTime = 0; // Reset to start (in case it finished playing)
    freeInstance2.play().catch(err => console.error('Play failed:', err));
  } else {
    // Optional: If all instances are busy, do nothing or log a warning
    console.warn('No free audio instances! Increase pool size.');
  }
}




const m1ra = mouse1
  .animate(
    [{ transform: "translateX(0)" }, { transform: "translateX(700%)" }],
    {
      fill: "forwards",
      duration: 2000,
    },
  );

m1ra.pause()

const m2ra = mouse2
  .animate(
    [{ transform: "translateX(0%)" }, { transform: "translateX(-800%)" }],
    {
      fill: "forwards",
      duration: 2000,
    },
  );

m2ra.pause()
/* m = mouse, number = mouse 1 or 2, L/R = left/right, p=play, c=click, d=direction, a=animate, t=turn */

function getRandomInt() {
  return (Math.floor(Math.random() * 4000));
}

loop12()
loop22()
/* md1 even = right, odd = left */

function loop12() {
  if (paused1 === 1)
    return;
  else
    m1d = m1d+1;
    m1ra.reverse();
    if (m1d % 2 === 1)
      mouse1.src="mouseR1.gif";
    else
      mouse1.src="mouseL1.gif";
    setTimeout(loop12, getRandomInt())
}

function loop22() {
  if (paused1 === 1)
    return;
  else
    m2d = m2d+1;
    m2ra.reverse();
    if (m2d % 2 === 1)
      mouse2.src="mouseR1.gif";
    else
      mouse2.src="mouseL1.gif";
    setTimeout(loop22, getRandomInt())
}


function m1p() {
    if (m1d % 2 === 1)
      mouse1.src = "mouseR1.gif";
    else 
      mouse1.src= "mouseL1.gif";
    paused1=0;
    loop12();
}

function m1c() {
    paused1=1;
    playSoundFromPool2();
    m1ra.pause();
    if (m1d % 2 === 1)
      mouse1.src = "mouseR2.png";
    else 
      mouse1.src= "mouseL2.png";
    setTimeout(m1p, 300);
}

function m2p() {
    if (m2d % 2 === 1)
      mouse2.src= "mouseR1.gif"; 
    else 
      mouse2.src= "mouseL1.gif";
    paused2=0;
    loop22();
}

function m2c() {
    paused2=1;
    playSoundFromPool2();
    m2ra.pause();
    if (m2d % 2 === 1)
      mouse2.src = "mouseR2.png";
    else 
      mouse2.src= "mouseL2.png";
    setTimeout(m2p, 300);
}
