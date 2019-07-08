var typeMessage = ( function ( velocity ) {
    let container = document.getElementById ( "demo" ) ?
        document.getElementById ( "demo" ) :
        document.body.appendChild (
            document.createElement ( "h3" )
        )
    container.style = `color: magenta;
                       text-align: center;
                       font-size: 30px;
                       margin-top: 50px;`
    var i = 0
    var test = ''
    return function ( message ) {       
        setTimeout(function tick() { 
                var len = message.length 
                container.textContent = test += message.slice(i++, velocity++)                                           
                test.length <= len ? setTimeout(tick, 1000) : null                
            },
            1000
        )
    }
})( 1 )

typeMessage ( `Welcome to the hell` )