function readCookie() {
    let cookie = document.cookie.split('; ')
    let obj = cookie.map(elem => Object.assign(
        {}, { [elem.split('=')[0]] : elem.split('=')[1] }
    ))
    let date = document.createElement('h1')
    let value = 'last_visit', time = new Date().toLocaleString()
    var delCookie = new Date(new Date().getTime() + 30*1000).toUTCString()
    obj.forEach(elem => {
       if (elem['last_visit']) {
            let elem = document.body.appendChild(date).innerHTML = `${value}: ${time}`
       }
       else document.cookie = `${value}=${time}; expires=${delCookie}`
    })
}

readCookie()