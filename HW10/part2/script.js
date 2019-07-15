function User ( name ) {
    this.name = name
    var presence = false
    Object.defineProperty(this, 'presence', {
        get: () => presence ? `${name} is present` : `${name} is absent`,
        set: value => value === '+' ? presence = true : presence = false
    }) 
}

let user = new User ( "Ivan" )
console.info ( user.presence )