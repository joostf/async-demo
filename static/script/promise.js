import render from './helpers/render.js'
import api from './helpers/api.js'
api.topic = 'promise'

const target = document.querySelector('section#promise')
const url =  `${api.endpoint}${api.topic}&api_key=${api.key}&limit=${api.limit}`

target.classList.remove('hidden')

// Make a promise
const loadData = new Promise((resolve, reject)=> {
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

loadData
    .then(data => render(data.data, target))
    .catch(error => console.error(error))

export default loadData