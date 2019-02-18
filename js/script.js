const cartWrapper = document.querySelector('.cart_wrapper'),
	cart = document.querySelector('.cart'),
	close = document.querySelector('.cart_close'),
	open = document.querySelector('#cart'),
	goodsBtn = document.querySelectorAll('.goods_btn'),
	products = document.querySelectorAll('.goods_item'),
	confirm = document.querySelector('.confirm'),
	badge = document.querySelector('.nav_badge'),
	totalCost = document.querySelector('.cart_total > span'),
	titles = document.querySelectorAll('.goods_title');

function openCart() {
	cart.style.display = 'block';
	document.body.style.overflow = 'hidden';
}

function closeCart() {
	cart.style.display = 'none';
	document.body.style.overflow = '';
}

open.addEventListener('click', openCart);
close.addEventListener('click', closeCart);

goodsBtn.forEach(function(btn, i) {
	btn.addEventListener('click', () => {
		let item = products[i].cloneNode(true),
			trigger = item.querySelector('button'),
			removeBtn = document.createElement('div'),
			empty = cartWrapper.querySelector('.empty');

		trigger.remove();
		
		removeBtn.classList.add('goods_item-remove');
		removeBtn.innerHTML = '&times';
		item.appendChild(removeBtn);

		cartWrapper.appendChild(item);
		if (empty) {
			empty.remove();
		}	
	});
});