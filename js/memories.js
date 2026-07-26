const message =

`Every page you are about to see
holds a moment that once made me smile.

Some made me laugh.

Some made me cry.

But every single one
made me love you a more.`;

let i = 0;

const typing = document.getElementById("typing");

function type(){

if(i < message.length){

typing.innerHTML += message.charAt(i);

i++;

setTimeout(type,40);

}

}

type();

function startBook(){

window.location.href="chapter1.html";

}

const images=document.querySelectorAll(".memory-img");

const imgObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.3
});

images.forEach(img=>{

imgObserver.observe(img);

});


/*==========================
      PHOTO VIEWER
==========================*/

const gallery=document.querySelectorAll(".memory-img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

const caption=document.getElementById("lightboxCaption");

const close=document.getElementById("closeBtn");

gallery.forEach(photo=>{

photo.addEventListener("click",()=>{

lightbox.classList.add("show");

lightboxImg.src=photo.src;

caption.innerHTML=photo.dataset.caption;

document.body.style.overflow="hidden";

});

});

close.onclick=()=>{

lightbox.classList.remove("show");

document.body.style.overflow="auto";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

document.body.style.overflow="auto";

}

};

const restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", () => {

    window.location.href = "future.html";

});

const music = document.getElementById("bgMusic");

document.addEventListener("click", () => {

    console.log("Clicked");

    music.play()
        .then(() => console.log("Playing"))
        .catch(err => console.log(err));

}, { once: true });