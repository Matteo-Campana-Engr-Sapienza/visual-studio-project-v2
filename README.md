# visual-studio-project-v2

This project aim to give to the user an overview over the movies presents in the database, and according to his/her tastes help to find an enjoyable movie for his/her free time.

### Overview  

The application is composed by 5 plots

- The bar plot represent the top movies selected ordered by votes.
- The pca-plot represents the selection of movies in a 2 components PCA.
- The circle-packing plots shows the moview categorized by year -> genre -> rating -> name.
- The selctor on the top right of the viewport is a filter promp that execute an or over the same categories and an intersection over the filtered results.
- The bottom right window shows the selected movies.

### Manual

- With the selctor is possible filter the movies according to year range, genre and rating, perfroming a click on the "Search" button.
- With the button "Reset", is possible reset the previos search and perform a new one.
- With the "Clear Selected Movies" is possible de-select all previoly movies selected.
- Clicking on one or more bar of the bar-plot, the selected movies will apperars in the selected movies window.
- Clicking on one or more points in the pca-plot, the selected movies will apperars in the selected movies window.

### Interactions between plots

- Each time a movie is selected a black stroke appear around the relative point in the pca plot, representing the given movie.
- Each time a movie is selected the relative circle inside the circle-packing-plot will be highlighted with the color of the relative point and bar.
- Clicking a circle inside the circle-packing-plot a zoom operation will be performed and a filter operation is applied on the bar-plot and the pca-plot.
- Clicking the button "Remove" inside the card of a selected movie in the selected-movie window, the replative movie will be remove from the selection, the stroke around the point in the pca-plot will dissapear, and the circle inside the cirlce-packing plot will be filled back with white color.
- Clicking the button "More Info" inside the card of a selected movie in the selected-movie window, will be displayed additional information on the mocvie and will appear another button "Close" to hide this additional information.
- Clicking on the button "Clear Selected Movies" all the movies in the selection-window will come deselected, the selected-movie window will results empy, the stroke over the points of the pca-plot will dissapear, and the cirlce relative to the selected movies will comes back to white color.
- Clicking on the button "Plot Selected Movies" all the movies in the selection-window will be plotted in the relative pca-plot, bar-plot and circle-packing-plot.
