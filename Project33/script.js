const toggles = document.querySelectorAll('.toggle')
const reliability = document.querySelector("#reliability");
const speed = document.querySelector('#speed')
const cost = document.querySelector('#cost')

toggles.forEach((toggle)=>{
    toggle.addEventListener('change', (e)=>{
        implementChangeLogic(e.target)
    })
})



function implementChangeLogic(clickedButton){
    if(reliability.checked && speed.checked && cost.checked){
        if(reliability == clickedButton){
            speed.checked = false;
        }
        if(cost == clickedButton){
            reliability.checked = false;
        }
        if(speed == clickedButton){
            cost.checked = false;
        }
    }
}