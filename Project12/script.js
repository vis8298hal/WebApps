const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blur_val = (20 - length*2);
    console.log(blur_val);
    background.style.filter = `blur(${blur_val}px)`;
})