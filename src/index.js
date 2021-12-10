const Counter = {
  data() {
    return {
      myBooks: ["roata timpului", "dune"],
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
        console.log(this.message);
        this.message = "";
      }
    },
    write(message, event) {
      console.log(message);

      if (event) {
        event.preventDefault();
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
    console.log("app loadet at " + new Date().toLocaleTimeString());
  }
};

const app = Vue.createApp(Counter);

app.component("books-list", {
  template: `
    <li>  
      {{ books }}
      <button v-on:click="$emit('remove')">Remove</button>
    </li>
  `,
  props: ["books"],
  emits: ["remove"]
});

const viewModel = app.mount("#counter");
