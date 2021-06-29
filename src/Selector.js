class Selector {

  constructor(movies) {

    this.movies = movies
    this.genres_div = d3.select("#genres-div")
    this.years_div = d3.select("#years-div")
    this.ratings_div = d3.select("#ratings-div")


    this.movies._genres.map((d) => {
      this.genres_div.append("input")
        .attr("type", "button")
        .attr("id", "btn-" + d)
        .attr("value", d)
        .attr("class", "btn btn-light btn-selector")
        .on("click", function() {
          if (d3.select("#" + this.id).attr("class") == "btn btn-primary btn-selector") {
            d3.select("#" + this.id).attr("class", "btn btn-light btn-selector")
            movies.removeSelectedGenre(d)
          } else if (d3.select("#" + this.id).attr("class") == "btn btn-light btn-selector") {
            d3.select("#" + this.id).attr("class", "btn btn-primary btn-selector")
            movies.addSelectedGenre(d)
          }

        })
    })

    this.movies._ratings.map((d) => {
      this.ratings_div.append("input")
        .attr("type", "button")
        .attr("id", "btn-" + d.replace(" ", ""))
        .attr("value", d)
        .attr("class", "btn btn-light btn-selector")
        .on("click", function() {
          if (d3.select("#" + this.id).attr("class") == "btn btn-primary btn-selector") {
            d3.select("#" + this.id).attr("class", "btn btn-light btn-selector")
            movies.removeSelectedRating(d)
          } else if (d3.select("#" + this.id).attr("class") == "btn btn-light btn-selector") {
            d3.select("#" + this.id).attr("class", "btn btn-primary btn-selector")
            movies.addSelectedRating(d)
          }
        })
    })

    this.slider = createD3RangeSlider(1986, 2016, "#slider-container");
    this.slider.range(1986, 2016)

    // Listener gets added
    this.slider.onChange(function(newRange) {
      var minYear = newRange.begin
      var maxYear = newRange.end
      d3.select("#slider-label").text(minYear + "-" + maxYear)
      movies._selected_years = [minYear, maxYear]
    });

    d3.select("#btn-search").on("click", () => {


      reDrawScatterPlotPCA(movies.getFilteredData())
      updateTop10Movies(movies.getFilteredData(), movies._movies_data)


    })
    d3.select("#btn-reset").on("click", () => {
      this.genres_div.selectAll("input").attr("class", "btn btn-light btn-selector")
      movies._selected_genres = []
      this.ratings_div.selectAll("input").attr("class", "btn btn-light btn-selector")
      movies._selected_ratings = []
      this.slider.range(1986, 2016)
      d3.select("#slider-label").text(1986 + "-" + 2016)
      movies._selected_years = [1986, 2016]

      reDrawScatterPlotPCA(movies._movies_data)
      updateTop10Movies(movies._movies_data, movies._movies_data)
    })

  }

}