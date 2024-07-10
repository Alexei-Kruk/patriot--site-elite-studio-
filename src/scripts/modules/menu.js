document.addEventListener('DOMContentLoaded', () => {
	new Mmenu('#menu', {
		offCanvas: {
			position: 'top',
			zposition: 'front',
			pageSelector: '.wrapper',
			pageNodetype: 'div',
		},
		navbars: [
			{
				position: 'top',
				content: ['prev'],
			},
		],
		backButton: true,
		theme: 'white',
		iconPanels: {
			add: true,
			visible: 1,
		},
		autoHeight: {
			height: true,
		},
		onClick: {
			close: true,
		},
	});

	// const burger = document.querySelector('mm-burger');
	// burger.state = 'cross';
});
