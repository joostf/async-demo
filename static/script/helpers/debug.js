const delay = 1000

document.body.addEventListener('click', one)

function one () {
    setTimeout(two, delay)
}

function two () {
    setTimeout(three, delay)
}

function three () {
    setTimeout(four, delay)
}

function four () {
    console.log('done');
}

