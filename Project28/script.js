const button = document.getElementById("button");
const container = document.getElementById('toasts');

const messages = ["Notification 1",
                   "Notification 2",
                   "Notification 3",
                   "Notification 4",
                   "Notification 5",
                   "Notification 6", ];

button.addEventListener('click', () => showNotifications());

function showNotifications(){
    const notif = document.createElement('div');
    notif.classList.add('toast');
    notif.innerText = getRandomMessage();
    container.appendChild(notif);
    setTimeout(()=>{
        notif.remove();
    }, 15000);
}
function getRandomMessage(){
    const messageInd = Math.floor(Math.random()*messages.length)
    return messages[messageInd];
}