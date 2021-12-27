const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'Brandon',
            age: 41,
            show: true,
            x: 0,
            y: 0,
            books: [
                { title: 'man in the castle', author: 'patrik', image: 'assets/1.jpg', isFav: true },
                { title: 'ord of the rings', author: 'tolkien', image: 'assets/2.jpg', isFav: false },
                { title: 'cel mai iubit dintre pamanteni', author: 'eliade', image: 'assets/3.jpg', isFav: true }
            ],
            url: 'http://google.com'
        }
    },
    methods: {
        markFav(fav) {
            this.books[fav].isFav = !this.books[fav].isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    }
})

app.mount('.app')