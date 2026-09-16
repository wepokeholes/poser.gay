// code taken from w3schools with a few small tweaks

const resize = document.getElementById("resize");
const coll = document.getElementsByClassName("collapse");
const copy1 = document.getElementById("copy1");
const copy3 = document.getElementById("copy3");
var i;
const fade = [

    { opacity: 1 },
    { opacity: 0 }
];
const options = {
    duration: 1500, 
    fill: "forwards"
};

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
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
