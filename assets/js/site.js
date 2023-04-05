//------------------------- burger меню --------------------------\\
const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.nav-toggle')
const navLink = document.querySelectorAll('.nav__link')

navBtn.onclick = () => {
    navBtn.classList.toggle('active')
    if(navBtn.classList.contains('active') == true) {
        nav.style.display = "block"
    } else {
        nav.style.display = "none"
    }
}
//------------------------- ./burger меню --------------------------\\

//------------------------- Аккордион --------------------------\\
window.addEventListener('click', function (event) {
	if (event.target.hasAttribute('data-cart')) {
        const accodionClick = event.target.closest('.accodion__item');
        accodionClick.classList.toggle('active')
    }
})
//------------------------- ./Аккордион --------------------------\\


//------------------------- Шапка --------------------------\\
let list = document.querySelectorAll('.nav__link__navigation');
 
list.forEach(item =>{
        item.addEventListener('click', () =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
    })
})
//------------------------- ./Шапка --------------------------\\


//------------------------- Слайдер --------------------------\\

// Элементы на странице
const slider = document.querySelector('.reviews')
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');
const sliderItems = document.querySelectorAll('.reviews__item')


sliderItems.forEach(function (slide, index) {
	// Скрываем все слайды, кроме первого
	if (index !== 0) slide.classList.add('hidden');

	// Добавляем индексы
	slide.dataset.index = index;

	// Добавляем data атрибут active для первого / активного слайда
	sliderItems[0].setAttribute('data-active', '');

});

btnNext.onclick = function () {
	console.log('Next Slide');
	showNextSlide('next');
};

btnPrev.onclick = function () {
	console.log('Prev Slide');
	showNextSlide('prev');
};

function showNextSlide(direction) {
	// Скрываем текущий слайд
	const currentSlide = slider.querySelector('[data-active]');
	const currentSlideIndex = +currentSlide.dataset.index;
	currentSlide.classList.add('hidden');
	currentSlide.removeAttribute('data-active');

	// Рассчитываем след индекс в зависимости от направления движения
	let nextSlideIndex;
	if (direction === 'next') {
		nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
	} else if (direction === 'prev') {
		nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
	}

	// Показываем след слайд
	const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
	nextSlide.classList.remove('hidden');
	nextSlide.setAttribute('data-active', '');
}
//------------------------- ./Слайдер --------------------------\\
