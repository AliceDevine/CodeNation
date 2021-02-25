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
let pad3audio = document.getElementById("pad3audio");
let pad4audio = document.getElementById("pad4audio");
let pad5audio = document.getElementById("pad5audio");
let pad6audio = document.getElementById("pad6audio");
let pad7audio = document.getElementById("pad7audio");
let pad8audio = document.getElementById("pad8audio");
let pad9audio = document.getElementById("pad9audio");
let pad10audio = document.getElementById("pad10audio");
let pad11audio = document.getElementById("pad11audio");
let pad12audio = document.getElementById("pad12audio");
let pad13audio = document.getElementById("pad13audio");
let pad14audio = document.getElementById("pad14audio");
let pad15audio = document.getElementById("pad15audio");
let pad16audio = document.getElementById("pad16audio");

document.addEventListener('keydown', (key) => {
    console.log(key.code)
    switch (key.code) {
        case "KeyQ":
            pad1audio.play();
        case "KeyW":
            pad2audio.play();
        case "KeyE":
            pad3audio.play();
        case "KeyR":
            pad4audio.play();
        case "KeyA":
            pad5audio.play();
        case "KeyS":
            pad6audio.play();
        case "KeyD":
            pad7audio.play();
        case "KeyF":
            pad8audio.play();
        case "KeyU":
            pad9audio.play();
        case "KeyI":
            pad10audio.play();
        case "KeyO":
            pad11audio.play();
        case "KeyP":
            pad12audio.play();
        case "KeyJ":
            pad13audio.play();
        case "KeyK":
            pad14audio.play();
        case "KeyL":
            pad15audio.play();
        case "Semicolon":
            pad16audio.play();
    };
});

pad1.addEventListener("click", () => {
    pad1audio.play();
});
pad2.addEventListener("click", () => {
    pad2audio.play();
});
pad3.addEventListener("click", () => {
    pad3audio.play();
});
pad4.addEventListener("click", () => {
    pad4audio.play();
});
pad5.addEventListener("click", () => {
    pad5audio.play();
});
pad6.addEventListener("click", () => {
    pad6audio.play();
});
pad7.addEventListener("click", () => {
    pad7audio.play();
});
pad8.addEventListener("click", () => {
    pad8audio.play();
});
pad9.addEventListener("click", () => {
    pad9audio.play();
});
pad10.addEventListener("click", () => {
    pad10audio.play();
});
pad11.addEventListener("click", () => {
    pad11audio.play();
});
pad12.addEventListener("click", () => {
    pad12audio.play();
});
pad13.addEventListener("click", () => {
    pad13audio.play();
});
pad14.addEventListener("click", () => {
    pad14audio.play();
});
pad15.addEventListener("click", () => {
    pad15audio.play();
});
pad16.addEventListener("click", () => {
    pad16audio.play();
});