import forms from './scripts/modules/forms';
import hamburger from './scripts/modules/hamburger';

window.addEventListener('DOMContentLoaded', function () {
	forms('form');
	hamburger('.burger', '.menu', '.menu__hidden', '.menu__fade');
});
