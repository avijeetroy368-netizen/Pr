/* ===========================
   NOVA MISSION
   SCRIPT.JS
=========================== */

const loader = document.getElementById("loader");
const bar = document.getElementById("bar");
const percent = document.getElementById("percent");

const terminal = document.getElementById("terminal");
const output = document.getElementById("output");

const profile = document.getElementById("profile");

const reveal = document.getElementById("reveal");

const message = document.getElementById("message");

let progress = 0;

/* ======================
LOADER
====================== */

const loading = setInterval(() => {

progress++;

bar.style.width = progress + "%";

percent.innerHTML = progress + "%";

if(progress >= 100){

clearInterval(loading);

setTimeout(() => {

loader.style.display = "none";

startTerminal();

},500);

}

},35);


/* ======================
TERMINAL LINES
====================== */

const lines = [

"> Booting Nova Security...",

"> Loading AI Engine...",

"> Connecting Satellite...",

"> Establishing Secure Tunnel...",

"> Connection Successful ✔",

"> Searching Nearby Humans...",

"> Analysing Smile Frequency...",

"> Checking Respect Level...",

"> Finding Someone Special...",

"> Target Locked ✔",

"> Decrypting Profile...",

"> Access Granted ✔"

];


/* ======================
TYPE EFFECT
====================== */

function typeLine(text){

return new Promise(resolve=>{

let p=document.createElement("p");

output.appendChild(p);

let i=0;

const typing=setInterval(()=>{

p.innerHTML+=text.charAt(i);

i++;

output.scrollTop=output.scrollHeight;

if(i>=text.length){

clearInterval(typing);

resolve();

}

},35);

});

}


/* ======================
START TERMINAL
====================== */

async function startTerminal(){

for(let line of lines){

await typeLine(line);

await wait(500);

}

await wait(800);

terminal.style.display="none";

profile.style.display="flex";

}


/* ======================
WAIT
====================== */

function wait(ms){

return new Promise(resolve=>{

setTimeout(resolve,ms);

});

}


/* ======================
UNLOCK
====================== */

reveal.onclick=function(){

profile.style.display="none";

message.style.display="flex";

heartRain();

};


/* ======================
HEART RAIN
====================== */

function heartRain(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.transition="5s linear";

heart.style.zIndex="9999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

heart.style.transform="rotate(720deg)";

heart.style.opacity="0";

},100);

setTimeout(()=>{

heart.remove();

},5500);

}

}


/* ======================
OPTIONAL CLICK SOUND
====================== */

document.addEventListener("click",()=>{

if(navigator.vibrate){

navigator.vibrate(20);

}

});


/* ======================
GLITCH TITLE
====================== */

setInterval(()=>{

document.title="MISSION";

setTimeout(()=>{

document.title="MISSION_";

},150);

},2000);