// function hamburger() {
	document.querySelector('.burger').addEventListener('click', function () {
		var menu = document.querySelector('.menu');
		this.classList.toggle('active');
	
		if (menu.classList.contains('menu__hidden')) {
			menu.classList.remove('menu__hidden');
			menu.classList.add('menu__fade');
			menu.style.display = 'block';
		} else {
			menu.classList.add('menu__hidden');
			menu.classList.remove('menu__fade');
		}
	});
	
	document.querySelector('.menu').addEventListener('animationend', e => {
		if (e.animationName === 'slideUp') {
			e.target.style.display = 'none';
		}
	});
// }

// export default hamburger;

