let messages = ["backspace", "enter", "shift", "control", "delete", "space", "subtract"]
var log = {}

var sendMessage = (message,callback) => setTimeout(() => callback(message), Math.random() * 7000)

getKey = () => {
    var key = new Date().toLocaleString().split(", ")[1]
    return log[key] ? key + "[2]" : key
}

var handler = message => {
    Object.keys(log).forEach(item => item = getKey())
        log[getKey()] = message
}

messages.forEach(message => sendMessage(message, handler))