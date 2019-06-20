var letters = []
var str = `Backend As A Service`
var splitStr = str.split(` `)
for (var i = 0; i < splitStr.length; i++)
	letters.push(splitStr[i][0])
console.log(letters)
console.log(letters.join(``))