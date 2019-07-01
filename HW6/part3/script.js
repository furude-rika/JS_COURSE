var childs = document.body.querySelectorAll('*')
var cls = `.redBack { background-color: red!important; }`
var style = document.createElement('style')
document.head.appendChild(style)
style.appendChild(document.createTextNode(cls))

for (var item of childs) {
    item.localName == 'script' ? null : item.classList.add('redBack')
}
