const into = document.querySelector('.into')

function applyName() {
	// Получаем сохраненные стили из LocalStorage
	const naME = localStorage.getItem('name')

	into.textContent = naME

	// Применяем сохраненные стили к элементу, если они существуют
}


let leave = document.querySelector('.block-l')

let al

leave.addEventListener('click', () => {
	al = confirm('Вы точно хотите выйти из аккаунта?')
	yes()
})

function yes() {
	if (al == true) {
		window.location.href = 'index.html'
		removeStyles()
	}
}


function applyImg() {
	// Получаем сохраненные стили из LocalStorage
	const getImg = localStorage.getItem('img')

	setThisImg.src = getImg

	// Применяем сохраненные стили к элементу, если они существуют
}

applyImg()


applyName()


