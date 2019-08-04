let response = new XMLHttpRequest()
response.open('GET','data.json')
response.onreadystatechange = function(event) {
   if (this.readyState === 4 && this.status === 200) {
       let resp = JSON.parse(this.responseText)
        resp.forEach(elem => {
	            document.body.appendChild(document.createElement('img')).src = elem.ref
	            document.body.appendChild(document.createElement('h2')).innerHTML = elem.title
    	}
    }
}

response.send()