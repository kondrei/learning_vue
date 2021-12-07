const Counter = {
  data() {
    return {
      counter: 0,
      message: "",
      seen: true,
      lista: ["ceva", "altceva", "si nimic"]
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
  }
};

const app = Vue.createApp(Counter);
const viewModel = app.mount("#counter");
viewModel.lista.push("ceva");
