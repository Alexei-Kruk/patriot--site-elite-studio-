//Создание адаптивного меню налету
var topMenu = $('.top-menu').html(); //.top-menu - это класс html меню
topMenu = topMenu
	.replace(/class="[^"]*"/gi, '')
	.replace(/style="[^"]*"/gi, '')
	.replace(/id="[^"]*"/gi, ''); //Зачищаем всякую хрень

$('nav#menu').html('<ul>' + topMenu + '</ul>');
$('nav#menu').mmenu({
	extensions: ['effect-menu-slide', 'effect-listitems-slide'],
	navbars: [
		{
			height: 3,
			title: 'Меню',
			content: [''],
		},
		true,
	],
	counters: true,
	dividers: {
		fixed: true,
	},
});
