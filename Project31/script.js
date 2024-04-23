const textEl = document.getElementById('text');
const speedEl = document.getElementById("speed");

const text = "Welcome to Our Website";

let idx = 1;
let speed = 100 / speedEl.value;

function writeText(){
    textEl.innerText = text.slice(0,idx);
    idx += 1;
    if(idx > text.length){
        idx = 1;
    }
    
    setTimeout(writeText, speed)
}
speedEl.addEventListener('input', (e)=> {
    if(e.target.value > e.target.max){
        e.target.value = e.target.max;
    }
    else if(e.target.value < e.target.min)
    {
        e.target.value = e.target.min; 
    }
    speed = 100 / e.target.value;
})


writeText()

