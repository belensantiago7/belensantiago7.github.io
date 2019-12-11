# Week 9

At this point you should have a working Game of Life prototype. This week is our
last week and we'll leave it up to you to improve the Game of Life.

## Improvement ideas


### Play/Pause

Right now to play Game-of-Life you need to click "Next" for every iteration. Ideally
we want to have a Play/Pause or Start/Stop button. To do this we'll need to use
[setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) to create a
that executes the `Controls.next` method every 100 milliseconds.

#### Challenge

If you complete this try implement a [range slider](https://www.w3schools.com/tags/att_input_type_range.asp)
that controls the speed of iteration.


### Predefined designs

You'll notice in the full [Game of Life demo](https://bitstorm.org/gameoflife/)
there's a selector with predefined shapes. To implement the predefined designs we'll
need to create a set of shapes and add a [select](https://www.w3schools.com/tags/tag_select.asp)
that allows us to choose a particular shape.


#### Challenge

When you add a shape center the shape in the grid based on the Canvas's cellSize


### Grid size selector

The size of each square is based on `Canvas.cellSize`. By changing the `Canvas.cellSize`
property we can change the size of each square. Add a [range slider](https://www.w3schools.com/tags/att_input_type_range.asp)
to allow the user to choose their own grid size.


### ***COLORS!!!!!!***

Right now the grid is very grey... Use your own `fillStyle` and `strokStyle` colors
and update [style.css](/game-of-life/style.css).


#### Challenge

Use [CSS Animations](https://www.w3schools.com/css/css3_animations.asp) to animate
the next button. Try making the next button spin 360 degrees on a click.


### Update your music player

You can also make updates to your music player from week 2 - week 6


### Update your website

Don't forget that this whole repo is hosted at `https://<your-username>.github.io`
Make some updates to the [index.html](/index.html) file. One idea would be to browse
[codepen.io](https://codepen.io/popular/pens/) for something cool and try adding it to
your site.


### Other

Or feel free to do anything else you can think of, Adam and Jamie are happy to help
you with any coding idea you have.
