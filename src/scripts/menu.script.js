document.addEventListener('DOMContentLoaded', function () {
	new Mmenu('#menu', {
		extensions: ['pagedim-black'], // Добавляем расширение для затемнения фона при открытом меню
		navbar: {
			title: 'Меню', // Заголовок меню
		},
	});
});
