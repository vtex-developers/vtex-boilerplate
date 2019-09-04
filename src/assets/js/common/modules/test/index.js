import Selector from './selector';

const { cards } = Selector;

const Methods = {
	init() {
		Methods.test();
	},
	test(){
		[...cards].map((el) => {
			el.addEventListener('click' ,({currentTarget}) => {
				alert(`Card${currentTarget.textContent}`);
			});
		});
	}
};

export default {
	init: Methods.init
};