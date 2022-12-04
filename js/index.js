import { createCardProduct } from './createCardProduct.js';

import { openModal } from './openModal.js';

import { catalogList, modalProduct } from './elements.js';
import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationListController.js';

const burgerMax = {
	title: 'бургер макс',
	price: 10000,
	weight: 5000,
	calories: 15000,
	description: 'Огромный бургер, съешь сам или поделись с другими',
	image: 'img/megaburger.jpg',
	ingredients: [
		'Пшеничная булочка',
		'мега котлета из говядины',
		'много сыра',
		'листья салата',
		'соус',
	],
};

const closeModal = event => {
	if (event.key === 'Escape') {
		modalProduct.classList.remove('modal_open');
		document.removeEventListener('keydown', closeModal);
	}
};

catalogList.addEventListener('click', event => {
	const target = event.target;
	if (target.closest('.product__detail') || target.closest('.product__image')) {
		openModal(burgerMax);
		document.addEventListener('keydown', closeModal);
	}
});

modalProduct.addEventListener('click', event => {
	const target = event.target;
	if (target.closest('.modal__close') || target === modalProduct) {
		modalProduct.classList.remove('modal_open');
	}
});

const init = () => {
	renderListProduct();
	navigationListController();
};

init();
