import render from './helpers/render.js'
import api from './helpers/api.js'

api.topic = 'fetch'

const target = document.querySelector('section#fetch')
const url =  `${api.endpoint}${api.topic}&api_key=${api.key}&limit=${api.limit}`

target.classList.remove('hidden')

export default fetch(url).then(response => response.json())
                    .then(data => render(data.data, target))
                    .catch(err => console.error(err))