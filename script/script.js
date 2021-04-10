var app = new Vue ({
  el: "#app",
  data: {
    titoloFilm: "futuro",
    listaFilms: [],
    punteggio: [1,2,3,4,5],
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
          this.listaFilms = response.data.results;
          console.log(this.listaFilms);

          this.listaFilms.forEach((item, i) => {
            this.listaFilms[i].vote_average = Math.ceil(item.vote_average / 2);
          });

      })
      this.titoloFilm = "";
    },

    function () {
      console.log(titoloFilm.vote_average);
    }

  }
})
