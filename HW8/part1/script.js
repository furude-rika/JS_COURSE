var paragraph = document.body.appendChild(document.createElement('p'))
paragraph.style = `text-align: center;
                   font-size: 30px;
                   margin-top: 50px;`
var counter = 0
setTimeout(function testTime() {  
  paragraph.textContent = `Current time: ${new Date().toLocaleTimeString()}`
  counter++ < 100 ? setTimeout(testTime, 1000) : null
}, 1000)