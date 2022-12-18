import { catalogTitle, navigationList, navigationListItems } from './elements.js';

import { renderListProduct } from './renderListProduct.js';

export const navigationListController = () => {
	let activeBtn = navigationList.querySelector('.navigation__button');
	navigationList.addEventListener('click', e => {
		const categoryItem = e.target.closest('.navigation__button');

		if (!categoryItem) return;
		activeBtn.classList.remove('navigation__button_active');

		activeBtn = categoryItem;
		activeBtn.classList.add('navigation__button_active');
		catalogTitle.textContent = categoryItem.textContent;
		renderListProduct(categoryItem.dataset.category);

		// navigationListItems.forEach(item => {
		// 	if (item === categoryItem) {
		// 		item.classList.add('navigation__button_active');
		// 		catalogTitle.textContent = categoryItem.textContent;
		// 	} else {
		// 		item.classList.remove('navigation__button_active');
		// 	}
		// });
	});
};
