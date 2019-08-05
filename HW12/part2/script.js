var arr = [{pageId: '#6', startTime: '15'}]

window.onhashchange = function() {
    var test = arr.some( elem => location.hash === elem.pageId)
       !test 
            ? arr.push({pageId: location.hash, startTime: new Date().getMilliseconds()})
                : null
                   
    localStorage.setItem('history', JSON.stringify(arr))
    document.getElementById('h2').innerText = `Welcome to page number ${location.hash.slice(1)}!`
}