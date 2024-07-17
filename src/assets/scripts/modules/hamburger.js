document.querySelector('.burger').addEventListener('click', function () {
	const menu = document.querySelector('.menu');
	this.classList.toggle('active');

	if (menu.classList.contains('menu__hidden')) {
		menu.classList.remove('menu__hidden');
		menu.classList.add('menu__fade');
		menu.style.display = 'block';
	} else {
		menu.classList.add('menu__hidden');
		menu.classList.remove('menu__fade');
		document.querySelector('a#mm-0.mm-wrapper__blocker.mm-blocker.mm-slideout').style.display = 'none';
		document.body.style.overflow = 'auto'
	}
});

document.querySelector('.menu').addEventListener('animationend', e => {
	if (e.animationName === 'slideUp') {
		e.target.style.display = 'none';
	}
});

document.querySelectorAll('.menu__list a').forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.add('menu__hidden');
		menu.classList.remove('menu__fade');
		document.querySelector('a#mm-0.mm-wrapper__blocker.mm-blocker.mm-slideout').style.display = 'none';
		document.body.style.overflow = 'auto'

		document.querySelector('.burger').classList.remove('active');
	});
});