"use strict";


window.onload = () => {
  d3.csv("../data/movies.csv", function(data) {
    let movies = new Movies(data)
    let selector = new Selector(movies)

  })

}
