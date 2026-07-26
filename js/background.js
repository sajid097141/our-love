/*==================================
     BACKGROUND ENGINE V2
==================================*/

const canvas = document.getElementById("sky");
const ctx = canvas.getContext("2d");

const moon = document.querySelector(".moonGlow");

let stars = [];
let dust = [];
let shooting = [];

/*=====================
      RESIZE
======================*/

function resize() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    createStars();
    createDust();

}

window.addEventListener("resize", resize);

/*=====================
      STARS
======================*/

function createStars() {

    stars = [];

    for (let i = 0; i < 150; i++) {

        stars.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            r: Math.random() * 1.5 + .3,

            phase: Math.random() * Math.PI * 2,

            speed: .01 + Math.random() * .02

        });

    }

}

/*=====================
      DUST
======================*/

function createDust() {

    dust = [];

    for (let i = 0; i < 45; i++) {

        dust.push({

            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,

            r: Math.random() * 2 + 1,

            speed: .2 + Math.random() * .4,

            alpha: .08 + Math.random() * .18

        });

    }

}

/*=====================
   SHOOTING STAR
======================*/

function shoot() {

    shooting.push({

        x: Math.random() * canvas.width * .7,
        y: Math.random() * canvas.height * .3,

        vx: 12,
        vy: 6,

        life: 0

    });

}

setInterval(shoot, 18000);

shoot();

/*=====================
      ANIMATE
======================*/

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* Stars */

    stars.forEach(star => {

        star.phase += star.speed;

        const alpha = .4 + .4 * Math.sin(star.phase);

        ctx.beginPath();

        ctx.arc(

            star.x,
            star.y,
            star.r,
            0,
            Math.PI * 2

        );

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;

        ctx.fill();

    });

    /* Dust */

    dust.forEach(d => {

        ctx.beginPath();

        ctx.arc(

            d.x,
            d.y,
            d.r,
            0,
            Math.PI * 2

        );

        ctx.fillStyle = `rgba(255,220,180,${d.alpha})`;

        ctx.fill();

        d.y -= d.speed;

        if (d.y < -10) {

            d.y = canvas.height + 10;
            d.x = Math.random() * canvas.width;

        }

    });

    /* Shooting Stars */

    for (let i = shooting.length - 1; i >= 0; i--) {

        const s = shooting[i];

        ctx.beginPath();

        ctx.moveTo(s.x, s.y);

        ctx.lineTo(s.x - 120, s.y - 60);

        ctx.strokeStyle = "rgba(255,255,255,.9)";

        ctx.lineWidth = 2;

        ctx.stroke();

        s.x += s.vx;
        s.y += s.vy;

        s.life++;

        if (s.life > 40) {

            shooting.splice(i, 1);

        }

    }

    requestAnimationFrame(animate);

}

/*=====================
      FADE IN
======================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold: .2

});

document.querySelectorAll("section").forEach(section => {

    observer.observe(section);

});

/*=====================
    MOON PARALLAX
======================*/

document.addEventListener("mousemove", e => {

    const x = (e.clientX / window.innerWidth - .5) * 25;
    const y = (e.clientY / window.innerHeight - .5) * 25;

    moon.style.transform = `translate(${x}px,${y}px)`;

});

/*=====================
      START
======================*/

resize();

animate();