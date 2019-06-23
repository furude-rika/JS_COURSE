function myBag() {
    this.parfum =  true,
	this.lipstick = 'red',
    this.cash = 10
}

myBag.prototype.addItems = function(param,value) {
    this[param] = value
}

myBag.prototype.removeItems = function(param,value) {
    delete this[param]
}

var bag = new myBag()
bag.addItems('tissues',10)
bag.addItems('hairbrush',true)
bag.addItems('cat','small')
bag.addItems('cakes',10)
bag.removeItems('hairbrush',true)
bag.removeItems('cakes',10)
bag.removeItems('tissues',10)
console.log(bag)

var secondBag = new myBag()
secondBag.removeItems('parfum', true)
secondBag.addItems('cat', 'small')
console.log(secondBag)