const Counter = {
	data() {
		return {
			myBooks: [],
			counter: 0,
			message: "",
			seen: true
		};
	},
	methods: {
		addToList() {
			if (this.message === "") return;
			if (this.myBooks[this.myBooks.length - 1] !== this.message) {
				this.myBooks.push(this.message);
				console.log(viewModel.myBooks);
				this.message = "";
			}
		}
	},
	computed: {
		totalList() {
			let values = {
				number: this.myBooks.length,
				text: "",
				class: ""
			};

			if (values.number <= 0) {
				values.text = "No elements.";
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

app.component("books-list", {
	template: `
    <li>  
      {{books}}
      <button @click="$emit('remove')">Remove</button>
    </li>
  `,
	props: ["books"],
	emits: ["remove"]
});
