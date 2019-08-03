let promise = new Promise(
	(resolve, reject) => {
		let response = new XMLHttpRequest()
		response.open('GET', '')
		response.onload = function(event) {
			this.readyState === 4 && this.status === 200
				? resolve(response.responseText) 
					: reject(response.responseText)
		}
		responce.send()
	}
)
	.then(
		response => respData = JSON.parse(data.json),
		error => console.warn(error)
	)
 
for (var x of respData) {
	document.body.appendChild(document.createElement('img')).src = x.ref
	document.body.appendChild(document.createElement('h2')).innerHTML = x.title
	
}