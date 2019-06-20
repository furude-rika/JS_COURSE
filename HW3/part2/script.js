var user1 = {  
       name: `Vasya`,
	   registered: true,
	   data: new Date().toLocaleTimeString()
}

var user2 = {
	   name: `Kolya`,
	   registered: false,
	   data: new Date().toLocaleTimeString()
}

user1.getInfo = userInfo		
user2.getInfo = userInfo

function userInfo () {
        console.log((this.registered) ? 
            `Дата регистрации: ${this.data}` : 
                `Незарегистрированный пользователь: ${this.name}`)
    
}

user1.getInfo()
user2.getInfo()
