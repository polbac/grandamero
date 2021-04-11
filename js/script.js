const el = document.querySelector("main")
const images = []
let x, y

function canvasSize() {
    return {
        width: window.innerWidth,
        height: window.innerHeight,
    }
}

function init() {
    const {width, height} = canvasSize()
    x = width / 2
    y = height / 2

    for (let i=0; i < 4; i++) {
        const image = document.createElement('img')
        image.width = width / 2
        image.height = height / 2
        image.src = 'damero.jpeg'
        el.appendChild(image)
        images.push(image)
    }
    
}

function render({ screenX, screenY }) {
    const { width, height } = canvasSize()
    // top - left
    images[0].width = screenX
    images[0].height = screenY

    // top - right
    images[1].width = width - screenX
    images[1].height = screenY

    // bottom - left
    images[2].width = screenX
    images[2].height = height - screenY

    // bottom - right
    images[3].width = width - screenX
    images[3].height = height - screenY


}

document.addEventListener("mousemove", render)

init()