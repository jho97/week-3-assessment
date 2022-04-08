console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}

const picCompliment = document.getElementById('rubber-duck')

picCompliment.addEventListener('mouseover', () =>{
	alert('This rubber duck seems to really like you!')
})
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);