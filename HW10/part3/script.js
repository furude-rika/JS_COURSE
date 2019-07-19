function User (userName='Ivan', userMail='ivan25@ukr.net', photo = User.getAvatar()) {
    this.name = userName
    this.email = userMail
    this.photoURL = photo
}

User.avatars = [
     "https://findicons.com/files/icons/2172/lin/128/12.png",
     "https://findicons.com/files/icons/178/popo_emotions/128/matrix.png",
     "https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-31-512.png",
     "http://icons.iconarchive.com/icons/hopstarter/face-avatars/256/Male-Face-L3-icon.png",
     "https://findicons.com/files/icons/1072/face_avatars/300/i05.png",
     "http://www.iconarchive.com/download/i51043/hopstarter/halloween-avatars/Gomez.ico",
     "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/256/Zombie-2-icon.png",
     "https://vignette.wikia.nocookie.net/yogscast/images/8/8a/Avatar_Turps_2015.jpg"
]

User.admin = {
    photoURL: "https://i.pinimg.com/originals/3d/47/4f/3d474f82ff71595e8081f9a120892ae8.gif",
    name: "admin"
}
User.getAvatar = function() {
    return this.avatars.shift()
} 

User.prototype.messageBox = (function() {
    var container = document.body.appendChild(document.createElement('div'))
    container.style = `width: 300px; 
                       height: 300px; 
                       border: 1px solid #000;
                       margin: 0 auto;
                       display: flex;
                       flex-wrap: wrap;
                       justify-content: space-around;
                       background-color: #000;
                       padding-top: 10px;
                       margin-top: 50px;`
    container.image = container.appendChild(document.createElement('img'))
    container.image.style = `width: 100px; 
                             height: 100px;`
    container.name = container.appendChild(document.createElement('p'))
    container.name.style = `font-size: 30px; 
                            align-self: center;
                            color: #fff;`    
    container.area = container.appendChild(document.createElement('textarea'))
    container.area.style = `resize: none; 
                            width: 220px; 
                            height: 170px;`
    container.area.oninput = function(event)   {
            event.target.parentNode.querySelector('img').src = User.admin.photoURL
            event.target.parentNode.querySelector('p').innerText = User.admin.name
    }
    return container
})()

User.prototype.write = function(message) {
    this.messageBox.area.value = message
    this.messageBox.image.src = this.photoURL
    this.messageBox.name.innerText = this.name

}

User.prototype.read = function() {
    console.log(`${this.name} read '${this.messageBox.area.value}'`)
}

var users = [
    new User ( "Иван" ),
    new User ( 'Alex', "alex@gmail.com" ),
    new User ( 'Bob', "bob777@gmail.com" ),
    new User ( 'Dima', "dima888@gmail.com" ),
    new User ( 'Fima', "fima999@gmail.com" )
]

var k = 1
users.forEach (
    function ( user ) {
        setTimeout (
            function () {
                user.write( `Hello, I'm ${user.name}` )
            }, 3000 * k++
        )
    }
)

users[0].write('blabla')