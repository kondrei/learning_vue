const Counter = {
  data() {
    return {
      myBooks: [{ id: 1, title: "Roata timpului" }],
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
