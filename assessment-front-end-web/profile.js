function favColor() {
	alert('Orange!... or maybe blue.')
}
function favPlace() {
	alert('Wilmington, North Carolina!')
}function favRitual() {
	alert('I love playing basketball 2-3 times a week, especially with my dad.')
}
let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')
color.addEventListener('click', favColor)
place.addEventListener('click', favPlace)
ritual.addEventListener('click', favRitual)