const copy1 = document.getElementById("copy1");
const copy3 = document.getElementById("copy3");
const general1 = document.getElementById("general1");
const music1 = document.getElementById("music1");
const contact1 = document.getElementById("contact1");
const money1 = document.getElementById("money1");

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

function general() {
    general1.style.display = "block";
    general1.animate(fadein, options2)
}

function money() {
    money1.style.display = "block";
    money1.animate(fadein, options2)
}

function music() {
    music1.style.display = "block";
    music1.animate(fadein, options2)
}

function contact() {
    contact1.style.display = "block";
    contact1.animate(fadein, options2)
}


function musicdie() {
    music1.style.display = "none";
}

function moneydie() {
    money1.style.display = "none";
}

function contactdie() {
    contact1.style.display = "none";
}

function generaldie() {
    general1.style.display = "none";
}

function generalout() {
    general1.animate(fade, options2)
    setTimeout(generaldie, 500);
}

function musicout() {
    music1.animate(fade, options2)
    setTimeout(musicdie, 500);
}

function moneyout() {
    money1.animate(fade, options2)
    setTimeout(moneydie, 500);
}

function contactout() {
    contact1.animate(fade, options2)
    setTimeout(contactdie, 500);
}

function copy() {
    navigator.clipboard.writeText("poserdom@riseup.net");
    copy1.animate(fade, options);
}

function copy2() {
  navigator.clipboard.writeText(`-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEanUIxhYJKwYBBAHaRw8BAQdA0nsqr9TD3u14QG/y9iBDGpWCP5jJ0fCyzzgn
R9qt2Be0HlBvc2VyZG9tIDxwb3NlcmRvbUByaXNldXAubmV0PohyBBMWCAAaBAsJ
CAcCFQgCFgECGQEFgmp1CMYCngECmwMACgkQ75SC0P/+sPyPpAD/bfOfNC1ij5SR
smMcMmLS59HveBecw1e6+uHZ0g8V50QBAL09p3DBxQ/Oh70uISMLgFxI/VaumVZK
4QhnZU+IZFoMuDgEanUIxhIKKwYBBAGXVQEFAQEHQDc2n8CfXDveiASZoQWkf+pA
jIaTEnopQsnIEsfGO1J7AwEIB4hhBBgWCAAJBYJqdQjGApsMAAoJEO+UgtD//rD8
WasA+wQ3fH7tRzuQYoDOGAp36GT08vMh9Eo+pWAoSVL9qAtDAP4sqAfgu4mRW3PV
khoUNp0BR0YTTyMJRyxffvLKifzHBw==
=vBVp
-----END PGP PUBLIC KEY BLOCK-----`);
  copy3.animate(fade,options);
}