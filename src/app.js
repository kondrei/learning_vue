const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'Brandon',
            age: 41,
            show: true
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show
        }
    }
})

app.mount('.app')