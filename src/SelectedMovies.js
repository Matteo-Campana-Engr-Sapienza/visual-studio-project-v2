class SelectedMovies {
  constructor(movies) {
    this.movies = movies_data
    this.selected_movies = movies._selected_movies
    this.focus_on_movies = movies._focus_on_movies
    this.selected_movies_div = d3.select("#select-movies")
  }

  drawSelectedMovies() {
    this.genres_div.selectAll("p").remove()
    this._selected_movies.map((d) => {
      this.genres_div.append("p").text(d)
    })
  }
}
