"use strict";


window.onload = () => {
  d3.csv("../data/movies.csv", function(data) {
    let movies = new Movies(data)
    let selector = new Selector(movies)

    top10Movies(movies._movies_data)
    drawScatterPlotPCA(movies._movies_data)

    /*----------------------------------------------------------------------------*/
    /*------------------ Wait the finish of the resize input ---------------------*/
    /*----------------------------------------------------------------------------*/
    function resizeHandler() {
      //d3.select("#circle-packing-container").select("*").remove().exit()
      d3.select("#top10Movies").select("*").remove().exit()
      d3.select("#scatterPlotPCA").select("*").remove().exit()
      //drawCirclePacking(movies._movies_data)

      top10Movies(movies._movies_data)
      drawScatterPlotPCA(movies._movies_data)

      reDrawScatterPlotPCA(movies.getFilteredData())
      updateTop10Movies(movies.getFilteredData(), movies._movies_data)


    }

    var rtime;
    var timeout = false;
    var delta = 100;
    $(window).resize(function() {
      rtime = new Date();
      if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
      }
    });

    function resizeend() {
      if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
      } else {
        timeout = false;
        //alert('Done resizing');
        //console.log('Done resizing')
        resizeHandler()
      }
    }
  })

}
