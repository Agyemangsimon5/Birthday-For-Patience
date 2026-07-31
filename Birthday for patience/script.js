// =============================
// Birthday Website Script
// For Miss Patience ❤️
// From Simon
// =============================

// Elements
const loader = document.getElementById("loader");
const startBtn = document.getElementById("startBtn");
const music = document.getElementById("music");

const welcome = document.getElementById("welcome");
const typingScreen = document.getElementById("typingScreen");
const birthdaySection = document.getElementById("birthdaySection");
const gallery = document.getElementById("gallery");
const letterSection = document.getElementById("letterSection");
const cakeSection = document.getElementById("cakeSection");
const finalScreen = document.getElementById("finalScreen");

const typing = document.getElementById("typing");

const slide = document.getElementById("slide");

const openLetter = document.getElementById("openLetter");
const letter = document.getElementById("letter");

const wishBtn = document.getElementById("wishBtn");

// Hide loader after 3 seconds
window.onload = function(){

    setTimeout(()=>{

        loader.style.display="none";

    },3000);

};

// Typing messages

const messages=[

"Hello Miss Patience ❤️",

"Today isn't just another day...",

"Today we celebrate someone truly amazing.",

"Someone kind...",

"Someone beautiful...",

"Someone whose smile brightens every room...",

"Happy Birthday! 🎂"

];

let messageIndex=0;
let charIndex=0;

function typeWriter(){

    if(messageIndex>=messages.length){

        setTimeout(showBirthday,1000);

        return;

    }

    let current=messages[messageIndex];

    if(charIndex<current.length){

        typing.innerHTML+=current.charAt(charIndex);

        charIndex++;

        setTimeout(typeWriter,60);

    }else{

        setTimeout(()=>{

            typing.innerHTML="";

            charIndex=0;
            messageIndex++;

            typeWriter();

        },1200);

    }

}

// Start Website

startBtn.onclick=function(){

    welcome.classList.add("hidden");

    typingScreen.classList.remove("hidden");

    typingScreen.classList.add("fadeIn");

    music.play().catch(()=>{});

    typeWriter();

};

// Birthday Screen

function showBirthday(){

    typingScreen.classList.add("hidden");

    birthdaySection.classList.remove("hidden");

    birthdaySection.classList.add("fadeIn");

    setTimeout(showGallery,5000);

}

// ======================
// Slideshow
// ======================

const photos=[

"images/photo1.jpg",

"images/photo2.jpg",

"images/photo3.jpg"

];

let currentPhoto=0;

function showGallery(){

    birthdaySection.classList.add("hidden");

    gallery.classList.remove("hidden");

    gallery.classList.add("fadeIn");

    slide.src=photos[0];

    slideShow();

}

function slideShow(){

    setInterval(()=>{

        currentPhoto++;

        if(currentPhoto>=photos.length){

            currentPhoto=0;

        }

        slide.style.opacity=0;

        setTimeout(()=>{

            slide.src=photos[currentPhoto];

            slide.style.opacity=1;

        },500);

    },3500);

    setTimeout(()=>{

        gallery.classList.add("hidden");

        letterSection.classList.remove("hidden");

        letterSection.classList.add("fadeIn");

    },12000);

}

// ======================
// Letter
// ======================

openLetter.onclick=function(){

    letter.classList.remove("hidden");

    letter.classList.add("fadeIn");

    setTimeout(()=>{

        letterSection.classList.add("hidden");

        cakeSection.classList.remove("hidden");

        cakeSection.classList.add("fadeIn");

    },12000);

};
// ======================================
// Birthday Cake
// ======================================

wishBtn.onclick = function () {

    wishBtn.innerHTML = "🎉 Happy Birthday! 🎉";

    startConfetti();

    startFireworks();

    setTimeout(() => {

        cakeSection.classList.add("hidden");

        finalScreen.classList.remove("hidden");

        finalScreen.classList.add("fadeIn");

    }, 5000);

};

// ======================================
// Confetti Animation
// ======================================

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function createConfetti() {

    for (let i = 0; i < 200; i++) {

        confetti.push({

            x: Math.random() * canvas.width,

            y: Math.random() * canvas.height - canvas.height,

            r: Math.random() * 8 + 3,

            d: Math.random() * 200,

            color: `hsl(${Math.random() * 360},100%,70%)`,

            tilt: Math.random() * 10 - 5

        });

    }

}

createConfetti();

function drawConfetti() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confetti.forEach(c => {

        ctx.beginPath();

        ctx.fillStyle = c.color;

        ctx.fillRect(c.x, c.y, c.r, c.r);

    });

}

function updateConfetti() {

    confetti.forEach(c => {

        c.y += 3;

        c.x += Math.sin(c.d);

        if (c.y > canvas.height) {

            c.y = -20;

        }

    });

}

function animateConfetti() {

    drawConfetti();

    updateConfetti();

    requestAnimationFrame(animateConfetti);

}

function startConfetti() {

    animateConfetti();

}

// ======================================
// Fireworks
// ======================================

function startFireworks() {

    for (let i = 0; i < 30; i++) {

        setTimeout(() => {

            createFirework();

        }, i * 300);

    }

}

function createFirework() {

    const firework = document.createElement("div");

    firework.innerHTML = "✨";

    firework.style.position = "fixed";

    firework.style.left = Math.random() * window.innerWidth + "px";

    firework.style.top = Math.random() * window.innerHeight + "px";

    firework.style.fontSize = (Math.random() * 40 + 20) + "px";

    firework.style.zIndex = "9999";

    firework.style.transition = "all 1s ease";

    document.body.appendChild(firework);

    setTimeout(() => {

        firework.style.transform = "scale(3)";

        firework.style.opacity = "0";

    }, 50);

    setTimeout(() => {

        firework.remove();

    }, 1000);

}

// ======================================
// Window Resize
// ======================================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

});

// ======================================
// Ending Message
// ======================================

setTimeout(() => {

    console.log("Happy Birthday Miss Patience ❤️");

    console.log("Made with ❤️ by Simon");

}, 1000);