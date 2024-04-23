const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory']
const buttons = document.getElementById('buttons')

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () =>{
        stopAllSounds()
        document.getElementById(sound).play()
    })
    buttons.appendChild(btn)
})

function stopAllSounds(){
    sounds.forEach(sound =>{
        var song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}

