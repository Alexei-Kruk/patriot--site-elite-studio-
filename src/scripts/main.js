import forms from './modules/forms';
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
	modal('[data-modal]', '.modal', modalTimerId);
	forms('form', modalTimerId);
});
