const colorBtn = document.getElementById('color')
const placeBtn = document.getElementById('place')
const ritualBtn = document.getElementById('ritual')

colorBtn.addEventListener('click', () => {
    alert('Pink')
})

placeBtn.addEventListener('click', () => {
    alert('Anywhere in the mountains')
})

ritualBtn.addEventListener('click', () => {
    alert('Making pour over coffee in the morning!')
})

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}
let form = document.querySelector('form#feedback');

form.addEventListener('submit', handleSubmit);
