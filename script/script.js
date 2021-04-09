var app = new Vue ({
  el: "#app",
  data: {
    titoloFilm: "",
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
          console.log(response.data.results);
          this.listaFilms = response.data.results
      })
      this.titoloFilm = ""
    }
  }
})
