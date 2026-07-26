/* ---------- Stars ---------- */

const stars=document.getElementById("stars");

for(let i=0;i<180;i++){

const s=document.createElement("div");

s.className="star";

s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";

s.style.animationDelay=Math.random()*5+"s";

stars.appendChild(s);

}

/* ---------- Typing ---------- */

const text=`Some memories...

were never meant

to disappear.`;

const typing=document.getElementById("typing");

let i=0;

function type(){

if(i<text.length){

if(text[i]=="\n"){

typing.innerHTML+="<br>";

}

else{

typing.innerHTML+=text[i];

}

i++;

setTimeout(type,45);

}

else{

document

.getElementById("loginBox")

.classList.add("show");

}

}

type();

/* ---------- Password ---------- */

const PASSWORD="munu";

function checkPassword(){

const input=document.getElementById("password");

const msg=document.getElementById("message");

const login=document.getElementById("loginBox");

if(input.value===PASSWORD){

msg.style.color="#90ffb2";

msg.innerHTML="Welcome back...";

document.body.classList.add("fade");

setTimeout(()=>{

window.location.href="memories.html";

},1700);

}

else{

msg.innerHTML="The key doesn't fit.";

login.classList.add("shake");

setTimeout(()=>{

login.classList.remove("shake");

},500);

}

}

document

.getElementById("password")

.addEventListener("keypress",e=>{

if(e.key==="Enter"){

checkPassword();

}

});