const body = document.body;
const slides = document.querySelectorAll('.slide');
const left_btn = document.getElementById('left');
const right_btn = document.getElementById('right');

let activeSlide = 0;
setBgBody()


left_btn.addEventListener('click', ()=>{
    activeSlide--;
    if(activeSlide < 0){
        activeSlide = slides.length-1
    }
    setBgBody()
    setActiveSlide()
})
right_btn.addEventListener('click',() => {
    activeSlide++;
    if(activeSlide > slides.length-1){
        activeSlide = 0;
    }
    setBgBody()
    setActiveSlide()
})

function setBgBody(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    });

    slides[activeSlide].classList.add('active');
}

