
window.addEventListener('DOMContentLoaded', () => {
    const cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart') /*работа по ID*/,
        goodsBtn = document.querySelectorAll('.goods__btn')/*работа со всеми элементами класса */,
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');

    function openCart() {
    	calcTotal();
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    }

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);

    goodsBtn.forEach(function(btn, i) { /*проходимся по всем */
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty = cartWrapper.querySelector('.empty');

            trigger.remove();

            showConfirm();
            

            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';
            item.appendChild(removeBtn);

            cartWrapper.appendChild(item);
            removeFromCart();
            calcGoods(0)

            if (empty) {
                empty.remove();
            }

             });
    });

    function sliceTitle(){
    	titles.forEach(function(item){
    		if (item.textContent.length < 70) {
    			return;
    		} else {
    			const str = item.textContent.slice(0, 71) + '...';
    			//const str = `${item.textContent.slice(0, 71)} ...`;
    			item.textContent = str;
    		}
    	});
    }

    sliceTitle();

    function showConfirm() {
    	confirm.style.display = 'block';
    	let counter = 100;
    	const id = setInterval(frame, 10);
    	function frame() {
    		if (counter == 10) {
    			clearInterval(id);
    			confirm.style.display = 'none';
    		} else {
			counter--;
    		confirm.style.transform = `translateY(-${counter}px)`;
    		confirm.style.opacity = '.' + counter;
    		}
    	}
	}

	function calcGoods(i) {
		const items = cartWrapper.querySelectorAll('.goods_item');
		badge.textContent = i + items.length;
	}

	function calcTotal() {
		const prices = document.querySelectorAll('.cart_wrapper > .goods_item > .goods_price > span');
		let total = 0;
		prices.forEach(function(item){
			total += +item.textContent;//сокращение (total = total + ...); сокращение метода parseInt(+...)
		});
		totalCost.textContent = total;
	}

	function removeFromCart() {
		const removeBtn = cartWrapper.querySelectorAll('.goods_item-remove');
		removeBtn.forEach(function(btn){
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				calcGoods(0);
				calcTotal();
			});
		});
	}
});

