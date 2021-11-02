// render data
export default function render(data, target) {
    data.forEach(item => { 
        const {title, id} = item
        const html = `<article class="entry">
                        <h3>${title}</h3>
                        <img src="https://media.giphy.com/media/${id}/giphy.gif" alt="{${title}">
                    </article>`
        target.insertAdjacentHTML('beforeend', html)
    });
}