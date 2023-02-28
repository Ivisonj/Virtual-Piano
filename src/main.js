//get all keys
const keys = document.querySelectorAll('[data-key]')

// console.log('Se liga...', keys)
//play notes
function playNote(event) {

    let audioKeyCode = getKeyCode(event)
    console.log(audioKeyCode)

    //type or pressed key

    //if key exists

    //play audio
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

//click with mouse
keys.forEach((key) => {
    key.addEventListener("click", playNote)
})

//keyboard type
window.addEventListener("keydown", playNote)