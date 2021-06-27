class Movies {
  constructor(data) {
    this.movies_data = data
    this.rating_filter = []
    this.year_fulter = []
    this.genre_filter = []
  }

  get movies_data() {
    return this._movies_data
  }

  set movies_data(data) {
    this._movies_data = data
  }

  printMoviesData() {
    console.log(this._movies_data)
  }
}
