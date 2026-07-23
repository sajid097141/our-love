const message =

`Every page you are about to see
holds a moment that once made me smile.

Some made me laugh.

Some made me cry.

But every single one
made me love you a little more.`;

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