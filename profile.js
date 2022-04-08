const myColor = document.querySelector(`#color`)
const myPlace = document.querySelector(`#place`)
const myRitual = document.querySelector(`#ritual`)

const favColor = (evt) => {
    alert(`My favorite color is black and orange`)
}

const favPlace = (evt) => {
    alert(`My favorite place is my home with my wife.`)
}

const favRitual = (evt) => {
    alert(`My favorite ritual is a Austin trip my family would always make.`)
}

myColor.addEventListener(`click`,favColor)
myPlace.addEventListener(`click`,favPlace)
myRitual.addEventListener(`click`,favRitual)
