$(document).ready(function () {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		dots: true,
		dotsEach: true,
		// stagePadding:100,
		// center:true,
		// navText: [
		// 	'<img src="img/arrow-left.svg" alt="arrow-left">',
		// 	' <img src="img/arrow-right.svg" alt="arrow-right">',
		// ],
		responsive: {
			0: {
				items: 1,
				navText: [],
			},
			768: {
				items: 2,
				dots: true,
				navText: [],
			},
			1000: {
				items: 4,
			},
		},
	});

	// Обработчик события для кнопки "Назад"
	$('.arrows__prev').on('click', function () {
		$('.owl-carousel').trigger('prev.owl.carousel');
	});

	// Обработчик события для кнопки "Вперед"
	$('.arrows__next').on('click', function () {
		$('.owl-carousel').trigger('next.owl.carousel');
	});
});
