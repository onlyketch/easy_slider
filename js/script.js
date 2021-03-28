window.addEventListener('DOMContentLoaded', function() {

	let slideIndex = 1,
		slides = document.querySelectorAll('.slider__item'),
		dots = document.querySelectorAll('.slider__dot'),
		prev = document.querySelector('.slider__prev'),
		next = document.querySelector('.slider__next');
	
	showSlide(slideIndex);	

	function showSlide(n) {

		if (n > slides.length) {
			slideIndex = 1;
		}

		if (n < 1) {
			slideIndex = slides.length;
		}

		slides.forEach((elem) => elem.style.display = 'none'); //скрываем все слайды
		slides[slideIndex - 1].style.display = 'block'; //показываем нужный
	}
	
	function plusSlide(n) {
		showSlide(slideIndex += n);
		dots.forEach(function(elem) {
			elem.classList.remove('dot-active');
		});
		dots[slideIndex - 1].classList.add('dot-active');
	}

	function currentSlide(n) {
		showSlide(slideIndex = n);
	}

	prev.addEventListener('click', function() {
		plusSlide(-1);
	});

	next.addEventListener('click', function() {
		plusSlide(1);
	});

	dots.forEach((elem) => 
		elem.addEventListener('click', function(event) {
			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
				if (event.target == dots[i]) {
					currentSlide(i + 1);
				}
			}
			elem.classList.add('dot-active');
		}));




});