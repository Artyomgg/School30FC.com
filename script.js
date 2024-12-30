function blockN() {
	let delay_popup = document.getElementById('overlay')
	delay_popup.style.display = 'none'
}

const admin = document.querySelector('.im')

function blockD() {
	let delay_popup = document.getElementById('overlay')
	delay_popup.style.display = 'block'

	admin.style.display = 'none'
}

let adminSTR = document.querySelector('.admin')

function hello() {
	let login = document.getElementById('Login').value
	let password = document.getElementById('password').value

	if (login == 'Admin' && password == '2012') {
		blockN()
		alert('Привет! Admin')
		const admin = document.querySelector('.im')
		admin.style.display = 'none'
		adminSTR.style.display = 'block'
		saveStyle()
	} else {
		blockD()
		alert('Incorrect login or password!!!!!')
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

// Функция для применения стиля из LocalStorage
function applyStyle() {
	// Получаем сохраненные стили из LocalStorage
	const displayCXX = localStorage.getItem('admin')

	const displayCXX2 = localStorage.getItem('adminDisplay')

	// Применяем сохраненные стили к элементу, если они существуют
	adminSTR.style.display = displayCXX
	admin.style.display = displayCXX2
}

// Вызов функций при загрузке страницы
window.onload = function () {
	applyStyle() // Применяем стиль
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
	function () {
		preloader.classList.add('hide')
		this.setTimeout(function () {
			preloader.remove()
		})
	},
	1000
)

function yes() {
	if (al == true) {
		window.location.href = 'index.html'
		adminSTR.style.display = 'none'
		admin.style.display = 'block'
		removeStyles()
	} else {
		window.location.href = 'admin.html'
	}
}

///Конец


function removeStyles() {
	localStorage.removeItem('admin')
	localStorage.removeItem('adminDisplay')
}

let leave = document.querySelector('.block-l')

let al

leave.addEventListener('click', () => {
	al = confirm('Вы точно хотите выйти из аккаунта?')
	setTimeout(yes(), 1000)
})
