import api from './api.js'
api.topic = 'puppy'

const url =  `${api.endpoint}${api.topic}&api_key=${api.key}&limit=${api.limit}`

function load(){
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        request.open('GET', url, true)
    
        request.onload = () => {
            if (request.status >= 200 && request.status < 400) {
            // Success!
                const data = JSON.parse(request.responseText);
                resolve(data)
            } else {
            // We reached our target server, but it returned an error
                reject('no connection')
            }
        }
    
        request.onerror = () => {
        // There was a connection error of some sort
        }
    
        request.send()
    })
}

export default load