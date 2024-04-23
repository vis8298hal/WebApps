const btn = document.getElementById('btn');
const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')


const days = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]




btn.addEventListener('click', (e)=>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        e.target.innerHTML = "Dark Mode"
        html.classList.remove('dark')
    }
    else{
        e.target.innerHTML = "Light Mode"
        html.classList.add('dark')
    }
});

const scale = (num, in_min, in_max, out_min, out_max)=>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function setTime(){
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const hoursForClock = hours % 12
    
    const ampm = hours >= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10? `0${minutes}` :minutes} ${ampm}`;

    dateEl.innerHTML = `${days[day]}, ${Months[month]}
    <span class="circle">${date}</span>`;
    console.log(seconds);
}

setInterval(setTime, 1000)