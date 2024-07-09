document.addEventListener('DOMContentLoaded', function () {
	var menu = new Mmenu('#menu', {
		// extensions: ['pagedim-black'], // Добавляем расширение для затемнения фона при открытом меню
	});

	document.getElementById('#open-menu').addEventListener('click', function () {
		var api = menu.API;
		api.open();
	});
});
