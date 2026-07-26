/*==================================
        FUTURE PAGE
==================================*/

/*==========================
      FADE IN SECTIONS
==========================*/

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.2
});

sections.forEach(section=>{

observer.observe(section);

});

/*==========================
      FLOATING PARTICLES
==========================*/

const particles=document.querySelector(".particles");

for(let i=0;i<35;i++){

    const p=document.createElement("span");

    p.style.position="absolute";

    p.style.width=(3+Math.random()*5)+"px";

    p.style.height=p.style.width;

    p.style.borderRadius="50%";

    p.style.background="rgba(255,255,255,.55)";

    p.style.left=Math.random()*100+"%";

    p.style.top=Math.random()*100+"%";

    p.style.filter="blur(1px)";

    p.style.animation=`float ${12+Math.random()*15}s linear infinite`;

    p.style.animationDelay=Math.random()*10+"s";

    particles.appendChild(p);

}


/*==========================
      FLOAT KEYFRAMES
==========================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes float{

0%{

transform:translateY(20px);

opacity:0;

}

20%{

opacity:.6;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}

.show{

opacity:1 !important;

transform:translateY(0)!important;

transition:1s ease;

}

`;

document.head.appendChild(style);


/*==========================
        HERO EFFECT
==========================*/

const title=document.querySelector(".hero h1");

let scale=1;

setInterval(()=>{

    scale=scale===1?1.02:1;

    title.style.transform=`scale(${scale})`;

},1800);


/*==========================
      BUTTON RIPPLE
==========================*/

const btn=document.getElementById("futureBtn");

btn.addEventListener("click",(e)=>{

    const ripple=document.createElement("span");

    ripple.style.position="absolute";

    ripple.style.width="20px";

    ripple.style.height="20px";

    ripple.style.borderRadius="50%";

    ripple.style.background="rgba(255,255,255,.6)";

    ripple.style.left=(e.offsetX-10)+"px";

    ripple.style.top=(e.offsetY-10)+"px";

    ripple.style.transform="scale(0)";

    ripple.style.pointerEvents="none";

    ripple.style.transition=".8s";

    btn.appendChild(ripple);

    requestAnimationFrame(()=>{

        ripple.style.transform="scale(20)";
        ripple.style.opacity="0";

    });

    setTimeout(()=>{

        ripple.remove();

    },800);

});


/*==========================
       BUTTON MESSAGE
==========================*/

btn.addEventListener("click",()=>{

    btn.innerHTML="❤️ The Next Chapter Awaits ❤️";

});


/*==========================
      SUN PARALLAX
==========================*/

const sun=document.querySelector(".sunGlow");

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*25;

    const y=(e.clientY/window.innerHeight-.5)*25;

    sun.style.transform=

    `translate(calc(-50% + ${x}px),${y}px)`;

});