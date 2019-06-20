function getSelf () {
	console.log(arguments)
	console.log(arguments.callee)
}
getSelf(10, false, "google")