class Movies {


  constructor(data) {
    this.movies_data = data
    this.features = ["budget", "company", "country", "director", "genre", "gross", "name", "rating", "released", "runtime", "score", "star", "votes", "writer", "year"]

    this.genres = this.movies_data.map((d) => { return d.genre })
    this.genres = this.genres.filter(unique)

    this.ratings = this.movies_data.map((d) => { return d.rating })
    this.ratings = this.ratings.filter(unique)


    this.countries = this.movies_data.map((d) => { return d.country })
    this.countries = this.countries.filter(unique)

    this.selected_genres = []
    this.selected_ratings = []
    this.selected_years = [1986, 2016]


    this.minYear = d3.min(this.movies_data.map((d) => { return d.year }))
    this.maxYear = d3.max(this.movies_data.map((d) => { return d.year }))

    this.focus_on_movies = []
    this.selected_movies = []

  }

  //----------------------------------------------------------------------------
  //---------------------- Getters and Setters ---------------------------------
  //----------------------------------------------------------------------------

  get movies_data() {
    return this._movies_data
  }
  set movies_data(movies_data) {
    this._movies_data = movies_data
  }
  //----------------------------------------------------------------------------

  get genres() {
    return this._genres;
  }
  set genres(genres) {
    this._genres = genres
  }
  //----------------------------------------------------------------------------

  get ratings() {
    return this._ratings;
  }
  set ratings(ratings) {
    this._ratings = ratings
  }
  //----------------------------------------------------------------------------

  get countries() {
    return this._countries;
  }
  set countries(countries) {
    this._countries = countries
  }
  //----------------------------------------------------------------------------

  get minYear() {
    return this._minYear
  }

  get maxYear() {
    return this._maxYear
  }

  set minYear(year) {
    this._minYear = year
  }

  set maxYear(year) {
    this._maxYear = year
  }


  //----------------------------------------------------------------------------

  get selected_genres() {
    return this._selected_genres;
  }
  set selected_genres(genres) {
    this._selected_genres = genres
  }

  addSelectedGenre(genre) {
    if (!this._selected_genres.includes(genre)) {
      this._selected_genres.push(genre)
    }
  }

  removeSelectedGenre(genre) {
    this._selected_genres = this._selected_genres.filter(function(d) { return d != genre })
  }

  //----------------------------------------------------------------------------

  get selected_ratings() {
    return this._selected_ratings;
  }
  set selected_ratings(ratings) {
    this._selected_ratings = ratings
  }

  addSelectedRating(rating) {
    if (!this._selected_ratings.includes(rating)) {
      this._selected_ratings.push(rating)
    }
  }

  removeSelectedRating(rating) {
    this._selected_ratings = this._selected_ratings.filter(function(d) { return d != rating })
  }

  //----------------------------------------------------------------------------

  get focus_on_movies() {
    return this._focus_on_movies;
  }
  set focus_on_movies(movies) {
    this._focus_on_movies = movies
  }

  //----------------------------------------------------------------------------

  get selected_movies() {
    return this._selected_movies;
  }
  set selected_movies(movies) {
    this._selected_movies = movies
  }


  removeMovieFromSelection(movie) {
    if (this._selected_movies.includes(movie)) {
      this._selected_movies = this._selected_movies.filter(function(d) { return d != movie })
      var div = document.getElementById("div-" + movie.name.replace(" ", ""))
      d3.select(div).remove()

      var circle = d3.select("#scatterPlotPCA").selectAll("circle").filter(function(circle) {
        return circle.label.name == movie.name
      })

      if (circle) {
        circle.attr("stroke", null)
      }
    }
  }

  addMovieToSelection(movie) {
    if (!this._selected_movies.includes(movie)) {
      this._selected_movies.push(movie)
      //console.log(movie)
      d3.select("#selected-movies")
        .append("div")
        .text(movie.name)
        .attr("id", "div-" + movie.name.replace(" ", ""))
        .append("input")
        .attr("type", "button")
        .attr("value", "remove")
        .on("click", () => {
          this.removeMovieFromSelection(movie)
        })
    }
  }

  //----------------------------------------------------------------------------
  get selected_years() {
    return this._selected_years;
  }
  set selected_years(range) {
    this._selected_years = range
  }

  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------

  getFilteredData() {
    return this._movies_data.filter((d) => {
      return (this._selected_genres.length == 0 || this._selected_genres.includes(d.genre)) && (this._selected_ratings.length == 0 || this._selected_ratings.includes(d.rating)) && d.year >= this._selected_years[0] && d.year <= this._selected_years[1]
    })
  }

}

const unique = (value, index, self) => {
  return self.indexOf(value) === index
}
