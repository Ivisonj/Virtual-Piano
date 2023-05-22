//get all keys
const keys = document.querySelectorAll('[data-key]')

//play notes
function playNote(event) {

    let audioKeyCode = getKeyCode(event)
    console.log(audioKeyCode)

    //type or pressed key
    const key = document.querySelector(`[data-key="${audioKeyCode}"]`)

    //if key exists
    const cantFoundAnyKey = !key

    if(cantFoundAnyKey) {
        return
    }

    //play audio
    playAudio(audioKeyCode)    
}

function getKeyCode(event) {
    //key code
    let keyCode
    const isKeyboard = event.type === "keydown"
   
    if(isKeyboard) {
        keyCode = event.keyCode
    } else {
           keyCode = event.target.dataset.key
    }

    return keyCode
}

function playAudio (audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.ariaCurrent = 0
    audio.play()
}

//click with mouse
keys.forEach((key) => {
    key.addEventListener("click", playNote)
})

//keyboard type
window.addEventListener("keydown", playNote)