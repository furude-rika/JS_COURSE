var tags = ['main', 'section', 'article', 'h2', 'img']
var classes = ['main-content', 'main-section', 'text-content', 'main-h', 'images']
var container = document.body
var style = document.createElement('style')
document.head.appendChild(style)
style.innerText = 
`
    .main-content { color: red };
    .images { width: 100% };
    .text-content { font-size: 1.5em }; 
    .main-content { color: #000 };
    .main-h { font-family: Arial };
 `
var i = 0
for (var tag of tags) {
    var node = container.appendChild(document.createElement(tag))   
    node.className = classes[i++]
}