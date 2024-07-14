document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault();

	const formData = new FormData(this);
	const data = {};
	formData.forEach((value, key) => (data[key] = value));

	fetch(this.action, {
		method: 'POST',
		body: JSON.stringify(data),
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
		},
	})
	.then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.text(); // Изменено с response.json() на response.text()
	})
	.then(text => {
		if (text) {
			return JSON.parse(text); // Парсинг текста в JSON
		} else {
			throw new Error('Empty response');
		}
	})
	.then(data => {
		if (data.result === 'success') {
			alert('Сообщение отправлено успешно!');
		} else {
			alert('Ошибка при отправке сообщения.');
		}
	})
	.catch(error => {
		console.error('Ошибка:', error);
		alert('Ошибка при отправке сообщения.');
	});
});
