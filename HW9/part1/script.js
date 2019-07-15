function typeMessage ( message, velocity ) {
    var container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;
                       text-align: center;
                       font-size: 30px;
                       margin-top: 50px;`
    var words = message.split('')
    var test = ''
    words.forEach(
        (elem, index) => setTimeout(() => container.textContent = test += elem, 1000*index)
    )
}
typeMessage ( `Welcome to the hell`, 1 )
