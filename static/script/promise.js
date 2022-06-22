// 0. imports
import render from './helpers/render.js'
import load from './helpers/load.js'

// 1. bindings
const target = document.querySelector('section#promise')

// 2. logic
target.classList.remove('hidden')

load()
    .then(json => {
        render(json.data, target)

        return json.data
    })
    .catch(error => console.error(error))

// 3. functions    



// // Make a promise
// const loadData = new Promise((resolve, reject)=> {
//     const request = new XMLHttpRequest()
//     request.open('GET', url, true)

//     request.onload = () => {
//         if (request.status >= 200 && request.status < 400) {
//         // Success!
//             const data = JSON.parse(request.responseText);
//             resolve(data)
//         } else {
//         // We reached our target server, but it returned an error
//             reject('no connection')
//         }
//     }

//     request.onerror = () => {
//     // There was a connection error of some sort
//     }

//     request.send()
// })



export default promise