const open = document.getElementById("open");
const close= document.getElementById("close");
const container = document.querySelector('.container');
const nav = document.querySelector('nav');
nav.style = "display:none;";

open.addEventListener('click',()=>{
    container.classList.add('show-nav');
    nav.style = "display: block;";
});
close.addEventListener('click',()=>{
    container.classList.remove('show-nav');
    nav.style = "display: none;"
})