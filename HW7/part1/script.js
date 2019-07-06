var paragraph = document.body.appendChild(document.createElement('p'))
var image = document.body.appendChild(document.createElement('img'))

paragraph.style = `text-align: center;
                   font-size: 25px;
                   margin-top: 50px`

image.style = `margin: 0 auto;`

paragraph.innerText = 'Click me now!'
paragraph.setAttribute('onclick', 'clickFunc()')
image.setAttribute('onmouseover', 'mouseOverFunc()')
image.setAttribute('onclick', 'clickImgFunc()')

function clickFunc(event) {
    image.style.width = '100px'
    image.src = 'images/cat1.jpg'
    image.style.display = 'block'
}

function mouseOverFunc(event) {
    image.style.width = '200px'
    image.style.transition = 'width 1.5s ease'
}

function clickImgFunc(event) {
    image.style.display = 'none'
}