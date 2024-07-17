document.addEventListener('DOMContentLoaded', () => {
	new Mmenu('#menu', {
		offCanvas: {
			position: 'top',
		},
		pageScroll: {
			"scroll": true,
			"update": true
    	},
		hooks: {
			onOpen: () => {
				document.querySelector('#menu').style.pointerEvents = 'auto';
			},
			onClose: () => {
				document.querySelector('#menu').style.pointerEvents = 'none';
			}
		}
	});
});

