let setImg = document.querySelector('.block-set-img i')
let pop_avatar = document.querySelector('.block-pop-avatar')
let up = document.querySelector('.pop-avatar i')

setImg.addEventListener('click', () => {
	pop_avatar.style.display = 'block'
	setTimeout("pop_avatar.style.opacity = '1'", 600)
	setTimeout("pop_avatar.style.transform = 'scale(1)'", 800)
})


up.addEventListener("click", () =>{
	pop_avatar.style.opacity = '0'
	setTimeout("pop_avatar.style.transform = 'scale(0)'", 300)
	setTimeout("pop_avatar.style.display = 'none'", 800)			
})	



let setThisImg = document.querySelector('.block-set-img img')

let set1 = document.querySelector('.imgsrc1')
let set2 = document.querySelector('.imgsrc2')
let set3 = document.querySelector('.imgsrc3')
let set4 = document.querySelector('.imgsrc4')

set1.addEventListener('click', () => {
	localStorage.removeItem('img')
	setThisImg.src = 'img/profile/18b26db5ae0e03533722d54a0b37733e.jpg'
	let src = 'img/profile/18b26db5ae0e03533722d54a0b37733e.jpg'
	setTimeout(localStorage.setItem('img', src), 200)
})
set2.addEventListener('click', () => {
	localStorage.removeItem('img')
	setThisImg.src = 'img/profile/i.webp'
	let src = 'img/profile/i.webp'
	setTimeout(localStorage.setItem('img', src), 200)
})
set3.addEventListener('click', () => {
	localStorage.removeItem('img')
	setThisImg.src =
		'img/profile/img3.akspic.ru-uzor_kvadrat-uzor-korichnevyj_cvet-post_eto_k_svedeniyu-pryamougolnik-2732x2732.jpg'
	let src =
		'img/profile/img3.akspic.ru-uzor_kvadrat-uzor-korichnevyj_cvet-post_eto_k_svedeniyu-pryamougolnik-2732x2732.jpg'
	setTimeout(localStorage.setItem('img', src), 200)
})
set4.addEventListener('click', () => {
	localStorage.removeItem('img')
	setThisImg.src =
		'img/profile/1614442388_preview_color-squares-1556645350C4D.jpg'

	let src = 'img/profile/1614442388_preview_color-squares-1556645350C4D.jpg'
	setTimeout(localStorage.setItem('img', src), 200)
})

function applyImg() {
	// Получаем сохраненные стили из LocalStorage
	const getImg = localStorage.getItem('img')

	setThisImg.src = getImg

	// Применяем сохраненные стили к элементу, если они существуют
}

applyImg()
