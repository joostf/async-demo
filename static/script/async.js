import render from './helpers/render.js'
import api from './helpers/api.js'

api.topic = 'cow'

const target = document.querySelector('section#async')
const url =  `${api.endpoint}${api.topic}&api_key=${api.key}&limit=${api.limit}`

target.classList.remove('hidden')

const request = async () => {
    const response = await fetch(url)
    const data = await response.json()

    render(data.data, target)
}
  
export default request()