let pad1 = document.getElementById("pad1");
let pad2 = document.getElementById("pad2");
let pad3 = document.getElementById("pad3");
let pad4 = document.getElementById("pad4");
let pad5 = document.getElementById("pad5");
let pad6 = document.getElementById("pad6");
let pad7 = document.getElementById("pad7");
let pad8 = document.getElementById("pad8");
let pad9 = document.getElementById("pad9");
let pad10 = document.getElementById("pad10");
let pad11 = document.getElementById("pad11");
let pad12 = document.getElementById("pad12");
let pad13 = document.getElementById("pad13");
let pad14 = document.getElementById("pad14");
let pad15 = document.getElementById("pad15");
let pad16 = document.getElementById("pad16");

let pad1audio = document.getElementById("pad1audio");
let pad2audio = document.getElementById("pad2audio");

document.addEventListener('keydown', (key) => {
    console.log(key.code)
    switch(key.code) {
        case "KeyQ":
           pad1audio.play();
        case "KeyW":
            pad2audio.play();
    } ;  
});

pad1.addEventListener("click", () => {
   pad1audio.play();
});
pad2.addEventListener("click", () => {
    pad2qwaudio.play();
 });