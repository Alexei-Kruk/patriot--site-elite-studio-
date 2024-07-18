const ERROR_MESSAGE = 'Произошла ошибка';
const SENDING_MESSAGE = 'Отправка...';
const SUCCESS_MESSAGE = 'Отправлено успешно';
let colorMessage;

const form = document.querySelector('form');
form.addEventListener('submit', formSend);

async function formSend(e) {
	e.preventDefault();

	if (!validateForm()) {
		return;
	}

	showTostMessage(
		SENDING_MESSAGE,
		'linear-gradient(to right, #ffcc00, #ffcc00)'
	);

	try {
		const text = await fetch('assets/php/.env.local').then(response =>
			response.text()
		);
		const envVariables = {};
		text.split('\n').forEach(line => {
			const [key, value] = line.split('=');
			envVariables[key.trim()] = value.trim();
		});

		const scriptURL = envVariables.SCRIPT_URL;

		const formData = new FormData(form);

		let response = await fetch('assets/php/emailSend.php', {
			method: 'POST',
			body: formData,
			mode: 'cors',
		});

		let responseSheet = await fetch(scriptURL, {
			method: 'POST',
			body: formData,
		});

		if (response.ok && responseSheet.ok) {
			colorMessage = 'linear-gradient(to right, #3E58E2, #2f45a1)';
			showTostMessage(SUCCESS_MESSAGE, colorMessage);
			form.reset();
		} else {
			colorMessage = 'linear-gradient(to right, #ff2929, #ff2929)';
			showTostMessage(ERROR_MESSAGE, colorMessage);
		}
	} catch (error) {
		console.error('Произошла ошибка:', error);
		showTostMessage(
			ERROR_MESSAGE,
			'linear-gradient(to right, #ff2929, #ff2929)'
		);
	}
}

function showTostMessage(message, colorMessage) {
	Toastify({
		text: message,
		duration: 2000,
		newWindow: true,
		className: 'toast-message',
		close: true,
		gravity: 'center',
		position: 'center',
		stopOnFocus: true,
		style: {
			background: colorMessage,
			borderRadius: '10px',
		},
	}).showToast();
}

function validateForm() {
	const name = form.querySelector('input[name="name"]').value.trim();
	const phone = form.querySelector('input[name="phone"]').value.trim();
	const checkbox = form.querySelector('input[name="checkbox"]').checked;

	const nameRegex = /^[A-Za-zА-Яа-яЁё]+$/;
	const phoneRegex = /^[0-9+\-()]+$/;

	if (!nameRegex.test(name)) {
		showTostMessage(
			'Имя должно содержать только буквы',
			'linear-gradient(to right, #ff2929, #ff2929)'
		);
		return false;
	}

	if (!phoneRegex.test(phone)) {
		showTostMessage(
			'Номер телефона должен содержать только цифры, +, - и ()',
			'linear-gradient(to right, #ff2929, #ff2929)'
		);
		return false;
	}

	if (!checkbox) {
		showTostMessage(
			'Вы должны согласиться с условиями',
			'linear-gradient(to right, #ff2929, #ff2929)'
		);
		return false;
	}

	return true;
}
