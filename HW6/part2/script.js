var tags = [
        {
            tagName: 'main',
            className: 'main-content',
            styles: `.main-content { color: #DA70D6; font-size: 30px; font-family: Georgia; margin: 0 0 10px;}`,
            content: 'Grumpy The Cat'
        },
        {
            tagName: 'section',
            className: 'main-section',
            styles: `.main-section { color: #87CEEB; font-size: 25px; margin: 0 0 10px;}`,
            content: 'Story of her life'
        },
        {
            tagName: 'article',
            className: 'text-content',
            styles: `.text-content { color: #00FA9A; margin: 0 0 10px; font-size: 23px;}`,
            content: 'Cat memes'
        },
        {
            tagName: 'h2',
            className: 'main-h',
            styles: `.main-h { color: #FA8072; margin-block-start: 0; }`,
            //event: 'onmouseover',
            content: 'Two words about Grumpy Cat'
        },
        {
            tagName: 'img',
            className: 'images',
            styles: `.images { max-width: 400px;}`,
            event1: 'onmouseover',
            event2: 'onmouseout',
            src: 'true'
        }
]

var container = document.body
var style = document.createElement('style')
document.head.appendChild(style)

for (var item of tags) {
    var node = container.appendChild(document.createElement(item.tagName))
    node.className = item.className
    node.innerText = item.content
    style.appendChild(document.createTextNode(item.styles))
    item.event1 == 'onmouseover' ? 
        node.setAttribute('onmouseover', 'onMouseOver(this)') : null
    item.event2 == 'onmouseout' ? 
        node.setAttribute('onmouseout', 'onMouseOut(this)') : null
    item.src ? node.setAttribute('src', 'images/cat1.jpg') : null
}

function onMouseOver(event) {
    event.src = 'images/cat2.jpg'
}

function onMouseOut(event) {
    event.src = 'images/cat1.jpg'
}