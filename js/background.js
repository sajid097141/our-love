/*==============================
      CINEMATIC BACKGROUND
==============================*/

const background = document.getElementById("background");

/* -----------------------------
        STARS
------------------------------*/

const stars = document.querySelector(".stars");

for(let i=0;i<250;i++){

    const star=document.createElement("span");

    const size=Math.random()*3+1;

    star.className="star";

    star.style.width=size+"px";

    star.style.height=size+"px";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.opacity=Math.random();

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    stars.appendChild(star);

}

/* -----------------------------
        PARTICLES
------------------------------*/

const particles=document.querySelector(".particles");

for(let i=0;i<80;i++){

    const p=document.createElement("span");

    p.className="particle";

    p.style.left=Math.random()*100+"%";

    p.style.bottom=(-Math.random()*100)+"px";

    p.style.animationDelay=Math.random()*15+"s";

    p.style.animationDuration=(8+Math.random()*12)+"s";

    p.style.opacity=.2+Math.random()*.8;

    particles.appendChild(p);

}

/* -----------------------------
      SHOOTING STAR
------------------------------*/

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*40+"%";

    star.style.left=(-10)+"%";

    background.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(()=>{

    shootingStar();

},12000+Math.random()*8000);

/* -----------------------------
      MOUSE PARALLAX
------------------------------*/

const moon=document.querySelector(".moonGlow");

const clouds=document.querySelector(".clouds");

const fog=document.querySelector(".fog");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5);

    const y=(e.clientY/window.innerHeight-.5);

    moon.style.transform=`translate(${x*40}px,${y*40}px)`;

    clouds.style.transform=`translate(${x*20}px,${y*20}px)`;

    fog.style.transform=`translate(${x*10}px,${y*10}px)`;

});

/* -----------------------------
      SCROLL PARALLAX
------------------------------*/

window.addEventListener("scroll",()=>{

    const scroll=window.scrollY;

    moon.style.top=(-120+scroll*.05)+"px";

    clouds.style.transform=`translateY(${scroll*.02}px)`;

    fog.style.transform=`translateY(${scroll*.04}px)`;

});

/* -----------------------------
      FADE-IN SECTIONS
------------------------------*/

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:.2
});

sections.forEach(section=>{

    observer.observe(section);

});

/* -----------------------------
      CURSOR GLOW
------------------------------*/

const glow=document.createElement("div");

glow.id="cursorGlow";

background.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

});