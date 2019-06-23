function MyConstr() {}

MyConstr.prototype.addProperty = function(name, value) {
    this[name] = value
}

var constr = new MyConstr()
constr.addProperty('cat','Sally')
constr.addProperty('color','black')
constr.addProperty('age',15)
console.log(constr)