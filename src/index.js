const Counter = {
	data() {
		return {
			counter: 0,
			message: "",
			seen: true,
			lista: []
		};
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
			let values = {
				number: this.lista.length,
				text: "",
				class: ""
			};

			if (values.number <= 0) {
				values.text = "No elements";
				values.class = "error";
			}
			values.text =
				values.number + (values.number === 1 ? " element" : " elements");

			return values;
		}
	},
	mounted() {
		console.log("app loadet");
	}
};

const app = Vue.createApp(Counter);
const viewModel = app.mount("#counter");
