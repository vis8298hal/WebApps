const likeMe = document.querySelector('.likeMe');
const times = document.querySelector('#times');
let clickTime = 0

likeMe.addEventListener('click', (e) => {
    if(clickTime === 0){
        clickTime = new Date().getTime()
    }
    else{
        if((new Date().getTime() - clickTime) < 800)
        {
            createHeart(e)
            clickTime = 0
        }
        else{
            clickTime = new Date().getTime()
        }
    }
    times.innerText = parseInt(times.innerText)+1;
});


const createHeart = (e) => {
    const thumb = document.createElement('i');
    thumb.classList.add('fa-solid');
    thumb.classList.add('fa-thumbs-up');
    const x = e.clientX;
    const y = e.clientY;
    const leftX = e.target.offsetLeft;
    const topY = e.target.offsetTop;

    const xInside = x - leftX;
    const yInside = y - topY;


    thumb.style.top = `${yInside}px`;
    thumb.style.left = `${xInside}px`;

    likeMe.appendChild(thumb);
    times.innerHTML = timesClicked/2;
    
    setTimeout(()=>{thumb.remove()}, 1000)
}