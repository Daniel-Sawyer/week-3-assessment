console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert(`form submited`)
	
	// console.log('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const imgAlert = evt => {
	alert(`I think she likes you.`)
}

let img = document.querySelector(`img`)

img.addEventListener(`mouseover`,imgAlert)
