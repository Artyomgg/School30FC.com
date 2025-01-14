function blockN() {
	let delay_popup = document.getElementById('overlay')
	delay_popup.style.display = 'none'
}

const passValue = '220007'

const admin = document.querySelector('.im')

function blockD() {
	let delay_popup = document.getElementById('overlay')
	delay_popup.style.display = 'block'
}

let adminSTR = document.querySelector('.admin')

let login = document.getElementById('Login')

function hello() {
	let password = document.getElementById('password')

	if (password.value == passValue) {
		blockN()
		alert('Привет! ' + login.value)
		const admin = document.querySelector('.im')
		admin.style.display = 'none'
		adminSTR.style.display = 'block'
		saveStyle()
		saveNick()
	} else {
		blockD()
		alert('Incorrect Password !!!!!')
	}
}

///Функция сохранения

function saveStyle() {
	// Получаем стиль элемента
	const style = window.getComputedStyle(adminSTR)

	const style2 = window.getComputedStyle(admin)

	// Сохраняем необходимые свойства стиля в LocalStorage
	localStorage.setItem('admin', style.display)
	localStorage.setItem('adminDisplay', style2.display)
}


///Конец

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

///Конец



function saveNick() {

	const nick_name = login.value


	localStorage.setItem('name', nick_name)
}


function applyStyle() {
	// Получаем сохраненные стили из LocalStorage
	const displayCXX = localStorage.getItem('admin')

	const displayCXX2 = localStorage.getItem('adminDisplay')

	// Применяем сохраненные стили к элементу, если они существуют
	adminSTR.style.display = displayCXX
	admin.style.display = displayCXX2
}	



	applyStyle()



function removeStyles() {
	localStorage.removeItem('admin')
	localStorage.removeItem('adminDisplay')
}
