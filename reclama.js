let recla = document.querySelector('.reclama')
let crossR = document.querySelector('.cross-r i')
const clickR = document.querySelector('.click-r')

clickR.addEventListener('click', function(params) {
	window.location.href = 'https://artyomgg.github.io/Maker-QR-CODE.com/'
})

crossR.addEventListener('click', function(params) {
	recla.style.display = 'none'
})

function reclama() {
	let recla = document.querySelector('.reclama')
	setTimeout("recla.style.display = 'block';", 6000)
}

reclama()
