function User ( name ) {
    this.name = name
    this.id = this.counter()
}

User.prototype.counter = (function() {
    var counter = 0
    return function() {
        return typeof this.id == 'number' ? this.id : ++counter
    }
})()

var users = [
    new User("Семен"), 
    new User("Антон"), 
    new User("Демьян"), 
    new User("Василий"),
    new User("Anna")
]

console.log(users[0].counter())