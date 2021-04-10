var app = new Vue ({
  el: "#app",
  data: {
    titoloFilm: "futuro",
    listaFilms: [],
  },
  methods: {
    search: function () {
      axios.get('https://api.themoviedb.org/3/search/movie?', {
          params: {
              api_key: "b04973b27729a64bccaff42ef0c92870",
              query: this.titoloFilm,
              language: "it-IT",
          }
      })
      .then((response) => {
          // vado a prendere i dati generali che mi servono e li inserisco in un'oggetto
          this.listaFilms = response.data.results;
          // vado a prendere i dati generali che mi servono e li inserisco in un'oggetto
          console.log(this.listaFilms);
          // trasformo il voto da 1 a 10 ad 1 a 5
          this.listaFilms.forEach((item, i) => {
            this.listaFilms[i].vote_average = Math.ceil(item.vote_average / 2);
          });
          // /trasformo il voto da 1 a 10 ad 1 a 5

      });

      // porto il valore di ricerca a vuoto
      this.titoloFilm = "";
      // /porto il valore di ricerca a vuoto
      
    },



  }
})
