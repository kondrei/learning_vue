const Counter = {
  data() {
    return {
      counter: 0,
      message: "",
      seen: true,
      lista: ["ceva", "altceva", "si nimic"],
      url: window.location.href
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
    },
    question() {
      let s = "";
      let a = "11120315841";
      for (let i = 1; i < a.length(a); i++) {
        if (a[i] % 2 === a[i - 1] % 2) s += Math.max(a[i], a[i - 1]);
      }
      console.log("www.multisoft.se/" + s);
    }
  }
};

const app = Vue.createApp(Counter);
const viewModel = app.mount("#counter");
viewModel.lista.push("ceva");
