var collection = ['main', 'article', 'section', 'div', 'p']
var container = document.body
var testSize = 300;
for (var elem of collection) {
    container = container.appendChild(document.createElement(elem))
    container.style = `
                  margin: 0 auto;
                  display: flex;
                  align-items: center;
                  background-color: #ff00ff50;
                  border: dotted 1px yellow; 
                  vertical-align: middle;
                  width: ${testSize}px;
                  height: ${testSize}px 
                        `
    container.title = elem
    container.onmouseover = function over(event) {
        event.target.style.backgroundColor = '#ffff0050'
    }
    container.onmouseout = function out(event) {
        event.target.style.backgroundColor = '#ff00ff50'
    }
    container.onclick = function clickHandler(event) {
        if (!event.target.hasChildNodes()) {
            event.target.remove()
        } else {
            for (var child of event.target.childNodes) {
                event.target.parentElement.replaceChild(child, event.target)
            }
        }
    }
    testSize -= 50
}