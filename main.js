const whiteKey = document.querySelector('#naturais')
// whiteKey.style.backgroundColor = "red"
console.log('passei por aqui...')
whiteKey.onmousemove = e => {
    console.log('passei por aqui...')
    if(e.buttons) {
        console.log(e)
    }
}