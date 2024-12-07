function blockN() {
	let delay_popup = document.getElementById('overlay')
	delay_popup.style.display = 'none'
}

function blockD() {
	let delay_popup = document.getElementById('overlay')
	delay_popup.style.display = 'block'
}

function hello() {
	let login = document.getElementById('Login').value
	let password = document.getElementById('password').value

	if (login == 'Admin' && password == '2012') {
		blockN()
		alert('Привет! ')
	} else {
		blockD()
		alert('Incorrect login or pasword!!!!!')
	}
}

let pop = document.getElementById('overlayB')

let popTwo = document.getElementById('overlayBS')

let popThree = document.getElementById('overlayBSS')

function str() {
	pop.style.display = 'block'
}

function cl() {
	pop.style.display = 'none'
}

function str1() {
	popTwo.style.display = 'block'
}

function cl1() {
	popTwo.style.display = 'none'
}

function str2() {
	popThree.style.display = 'block'
}

function cl2() {
	popThree.style.display = 'none'
}

let preloader = document.querySelector('.preloader')

window.addEventListener(
	'load',
	function() {
		preloader.classList.add('hide')
		this.setTimeout(function() {
			preloader.remove()
		})
	},
	1000
)
