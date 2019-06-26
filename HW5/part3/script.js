function testArguments () {
    function generateError ( numArgs ) {
        var err = new Error ( "Invalid arguments" )
        err.name = 'Application'
        err.stack = 'Function needs 3 arguments, but only 1 present'
        throw err       
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    } 
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}

testArguments ( "Google" )