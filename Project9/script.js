const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('JokeBtn');
jokeBtn.addEventListener('click',generateJoke)
generateJoke()
async function generateJoke(){
    const config = {
        headers:
        {
        "accept" : "application/json"
        }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke

}
