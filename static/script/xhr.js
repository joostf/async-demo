import render from './helpers/render.js'
import api from './helpers/api.js'

api.topic = 'chicken'

const target = document.querySelector('section#xhr')
const url =  `${api.endpoint}${api.topic}&api_key=${api.key}&limit=${api.limit}`
const request = new XMLHttpRequest()

target.classList.remove('hidden')

request.open('GET', url, true)
request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        const data = JSON.parse(request.responseText)
        render(data.data, target)
    } else {
        // We reached our target server, but it returned an error
    }
}

request.send()

export default request
