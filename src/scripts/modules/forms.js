function forms() {
	const forms = document.querySelectorAll('form');

	const message = {
		loading: '/src/assets/img/spinner.svg',
		success: 'Спасибо! Скоро мы с вами свяжемся',
		failure: 'Что-то пошло не так...',
	};

	forms.forEach(item => {
		postData(item);
	});

	function postData(form) {
		form.addEventListener('submit', e => {
			e.preventDefault();

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.textContent = message.loading;
			form.append(statusMessage);

			const requests = new XMLHttpRequest();
			requests.open('POST', 'server.php');
			// requests.setRequestHeader('Content-type', 'multipart/form-data');

			const formData = new FormData(form);
			requests.send(formData);

			requests.addEventListener('load', () => {
				if (requests.status === 200) {
					console.log(requests.response);
					statusMessage.textContent = message.success;
					form.reset();
				} else {
					statusMessage.textContent = message.failure;
				}
			});


		});
	}
}

export default forms;