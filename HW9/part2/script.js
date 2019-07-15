var users = (
    function ( list ) {
        var users = []
        for ( var user of list )
            users.push ({
                name: user,
                present: false
            })
        return {
            setUserPresent ( userName, present ) {
                users.filter(user => user.name !== userName ? null : present == '+' || 'true' || 'присутствовал' ?
                    user.present = true : null)
            },
            showPresent () {
                users.filter(user => user.present == true ? console.log(user.name) : null) 
            },
            showAbsent () {
                users.filter(user => user.present == false ? console.log(user.name) : null)
            }
        }
    }
)( [ "Иван", "Дмитрий", "Степан", "Михаил" ] )

console.log('Отсутсвующие:')
users.showAbsent()
console.log('Присутствующие:')
users.setUserPresent( "Иван", "+" )
users.setUserPresent( "Михаил", "присутствовал" )
users.setUserPresent( "Степан", true )
users.showPresent()