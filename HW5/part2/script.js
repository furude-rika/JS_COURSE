function sampleFunc () {
    console.info (`Symbols in my code: ${arguments.callee + 0}`)
}

function modificator ( func ) {
    func.valueOf = function() {
        return this.toString().length
    }
}

modificator( sampleFunc )

sampleFunc()