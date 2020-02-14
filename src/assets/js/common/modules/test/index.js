const Methods = {
	init() {
		Methods.test();
	},
	test(){
		alert('Test');
	}
};

export default {
	init: Methods.init
};