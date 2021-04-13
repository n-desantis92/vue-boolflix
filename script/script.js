var app = new Vue ({
  el: "#app",
  data: {
    url: "https://api.themoviedb.org/3/search/",
    key: "b04973b27729a64bccaff42ef0c92870",
    titoloFilm: "",
    listaFilms: [],
  },
  methods: {
    search() {
      let serchquery = this.titoloFilm;
      this.titoloFilm = "";

      axios.get(this.url + 'movie', {
          params: {
            api_key: this.key,
            query: serchquery,
            language: "it-IT",
          }
      })
      .then((response) => {

        this.listaFilms = response.data.results;

        axios.get(this.url + 'tv', {
          params: {
            api_key: this.key,
            query: serchquery,
            language: "it-IT",
          }
        })
        .then((response) => {
          this.listaFilms = [...this.listaFilms,...response.data.results];
          console.log(this.listaFilms);

          this.listaFilms.forEach((item, i) => {
            item.vote_average = Math.ceil(item.vote_average / 2).toFixed();
            console.log(item.vote_average);
          });

        });


      });


    },



  }
})
