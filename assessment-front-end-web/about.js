console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!')
}
function noTouchy(){
	alert('You have touched the duck he is not happy, run while you still can!')
}

let form = document.querySelector('#contact');
let img = document.querySelector('img')
form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', noTouchy)