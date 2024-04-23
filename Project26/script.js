const nav = document.querySelector('.nav');
const btns = document.querySelectorAll('a');

window.addEventListener('scroll', fixNav)

btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        btns.forEach((btn2)=>{
           btn2.className = "";
        });
        btn.className = "current";
    })
})
function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }
}