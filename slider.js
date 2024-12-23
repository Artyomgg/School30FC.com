const slider = document.querySelector('.slider')
const sliderImages = document.querySelectorAll('.slider__img')
const sliderLine = document.querySelector('.slider__line')

let sliderCount = 0
let sliderWidth = slider.offsetWidth

// Функции
function nextSlide() {
	sliderCount++

	if (sliderCount >= sliderImages.length) {
		sliderCount = 0
	}
	rollSlider()
}

function prevSlide() {
	sliderCount--

	if (sliderCount < 0) {
		sliderCount = sliderImages.length - 1
	}
	rollSlider()
}

function rollSlider() {
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
}

setInterval(() => {
	nextSlide()
}, 3000)
