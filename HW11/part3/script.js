var messages = ["backspace", "enter", "shift", "control", "delete", "space", "subtract"]

messages.getKey = () => new Date().toLocaleString().split(", ")[1]
var log = {}

var sendMessage = message => new Promise(
    resolve => setTimeout(() => resolve(message), Math.random() * 7000)
)

var sendAll = () => {
    var index = 0
    function recursive () {
       sendMessage(messages[index++])
            .then(item => log[messages.getKey()] = item)
            index < messages.length ? recursive() : null
        }
    recursive ()
}

sendAll()