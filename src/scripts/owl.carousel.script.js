$(document).ready(function () {
	$('.rates__owl-carousel').owlCarousel({
		loop: true,
		margin: 30,
		nav: false,
		dots: true,
		dotsEach: 3,
		responsive: {
			0: {
				items: 1,
			},
			420: {
				items: 2,
			},
			992: {
				items: 3,
				dots: false,
			},
			1200: {
				items: 4,
				dots: false,
			},
			1441: {
				items: 3,
				margin: 60,
				dots: false,
			},
			1700: {
				items: 4,
				margin: 28,
				dots: false,
			},
		},
	});

	$('.arrows__prev-rate').on('click', function () {
		$('.rates__owl-carousel').trigger('prev.owl.carousel');
	});

	$('.arrows__next-rate').on('click', function () {
		$('.rates__owl-carousel').trigger('next.owl.carousel');
	});

	
	$('.banner__owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		dotsEach: 1,
		items: 1,
		responsive: {
			0: {
				items: 1,
			},
			992: {
				items: 1,
				dots: false,
			},
		},
	});

	$('.arrows__prev-banner').on('click', function () {
		$('.banner__owl-carousel').trigger('prev.owl.carousel');
	});

	$('.arrows__next-banner').on('click', function () {
		$('.banner__owl-carousel').trigger('next.owl.carousel');
	});
});
