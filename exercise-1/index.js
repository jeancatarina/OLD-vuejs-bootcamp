var app = new Vue({
	el: "#app",
	data: {
		name: "Jean Catarina",
		age: 24,
		link: "https://vuejs.org/images/logo.png"
	},
	methods: {
		multiplyNumberForThree: (num) => num * 3,
		getRandomFloat: () => Math.random()
	}
});

