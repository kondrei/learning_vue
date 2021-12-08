const Counter = {
	data() {
		return {
			counter: 0,
			message: "",
			seen: true,
			lista: []
		};
	},
	mounted() {
		setInterval(() => {
			this.counter++;
		}, 1000);
	},
	created() {
		console.log(this.seen);
	},
	methods: {
		addToList() {
			if (this.message === "") return;
			if (this.lista[this.lista.length - 1] !== this.message) {
				this.lista.push(this.message);
				this.message = "";
			}
		}
	},
	computed: {
		totalList() {
			let total = this.lista.length;
			if (total <= 0) return "No elements";
			return total + (total === 1 ? " element" : " elements");
		}
	}
};

const app = Vue.createApp(Counter);
const viewModel = app.mount("#counter");
