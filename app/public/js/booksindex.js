
const SomeApp = {
    data() {
      return {
        books: [],
        booksForm: {},
        selectedBooks: null
      }
    },
    computed: {},
    methods: {
        prettyDollar(n) {
            const d = new Intl.NumberFormat("en-US").format(n);
            return "$ " + d;
        },
        fetchBooksData() {
            fetch('/api/books/')
            .then( response => response.json() )
            .then( (responseJson) => {
                console.log(responseJson);
                this.books = responseJson;
            })
            .catch( (err) => {
                console.error(err);
            })
        },
        postBooks(evt) {
          if (this.selectedBooks === null) {
              this.postNewBooks(evt);
          } else {
              this.postEditBooks(evt);
          }
        },
        postNewBooks(evt) {     
            
            console.log("Posting!", this.booksForm);
    
            fetch('api/books/create.php', {
                method:'POST',
                body: JSON.stringify(this.booksForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                // reset the form
                this.booksForm = {};
              });
          },
          postEditBooks(evt) {
            this.booksForm.id = this.selectedBooks.id;       
            
            console.log("Updating!", this.booksForm);
    
            fetch('api/books/update.php', {
                method:'POST',
                body: JSON.stringify(this.booksForm),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetBooksForm();
              });
          },
          postDeleteBooks(b) {
            if (!confirm("Are you sure you want to delete the book from "+b.author+"?")) {
                return;
            }
            
            fetch('api/books/delete.php', {
                method:'POST',
                body: JSON.stringify(b),
                headers: {
                  "Content-Type": "application/json; charset=utf-8"
                }
              })
              .then( response => response.json() )
              .then( json => {
                console.log("Returned from post:", json);
                // TODO: test a result was returned!
                this.books = json;
                
                this.resetBooksForm();
              });
          },
          selectBooks(b) {
            this.selectedBooks = b;
            this.booksForm = Object.assign({}, this.selectedBooks);
          },

          resetBooksForm() {
            this.selectedBooks = null;
            this.booksForm = {};
          }
    },
    created() {
        this.fetchBooksData();
    }
  
  }
  
  Vue.createApp(SomeApp).mount('#booksApp');