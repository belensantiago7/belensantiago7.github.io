# Week 7

## Exercise 0

This part was missed last week. In `Canvas`'s constructor set `canvasElement`'s
`width` and `height` properties to `this.pixelWidth` and `this.pixelHeight`
respectively.

## Exercise 1: Draw Canvas grid

First thing we'll want to do is draw the canvas grid so that it looks like this:

![picture of canvas grid](/exercises/canvas_grid.png)

We're going to put our draw logic in `Canvas`'s `draw(cells)` method. 

*  Set `this.ctx`'s `lineWidth` property to 1 in `draw(cells)` (This will set the width of your lines to 1 pixel) 
*  Set the `strokeStyle` property to '#999' (This will give the stroke color to a light gray)

*  Set up a "for"-loop for drawing vertical lines within `this.ctx`
   *  Initialize the looping variable to `this.cellSize`
   *  Loop until `this.pixelHeight` 
   *  Increment the loop with a step size of `this.cellSize`
   *  For every loop iteration we will draw a vertical line in `this.ctx` beginning at `(index + 0.5, 0)` and ending at
`(index + 0.5, this.pixelHeight)`
      *  In the loop you can use a combination of these 4 methods on `this.ctx` to draw vertical lines:

         * `beginPath()` - starts the path [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
         * `lineTo(x, y)` - draws a line to a point [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)
         * `moveTo(x, y)` - moves to a start point [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)
         * `stroke()` - finishes a line [documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)

*  Once you've draw the vertical lines, you'll need to do the same thing for
the horizontal (Set up a "for"-loop for drawing horizontal lines within `this.ctx`

HINT: Swapping X and Y will transform vertical lines into horizontal lines.


## Exercise 2: Click handler

In `Controls.init(shapes)` add:

```
this.canvas.click((event) => {
});
```

In `Canvas`'s click function we'll need to add a click handler, that calls a
function with a clickEvent object that has a `cellX` property and a `cellY`
property with the x and y cell index of the click event (ex. `event.cellX`).
*  To add a click handler we'll need to call `addEventListener` on `this.obj`
   *  [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
*  We'll want to listen for the `'click'` event. 
   *  Click events have 2 important fields `clientX` and `clientY` (these are the X and Y coordinates of the click) 
   *  The X and Y coordinates are relative to your browser window and *not* the game of life canvas. In order to determine which cell was clicked we'll have to transform those coordinates to X and Y indexes.

There are a couple of other important methods.
*  `this.obj.getBoudningClientRect()` - will return an object with a `left` and `top`
   property that represent the X coordinate and Y coordinate of the left and top
   of the object. [documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)
*  `Math.floor` - will truncate to an integer value. [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

Once you've calculated your values call the `fn` function with clickEvent as the
only argument. To test your solution use `console.log` and/or the Chrome debugger.

HINT: This exercise is a visual math problem - it might help to get some paper and
draw it out.



## Exercise 3: Add cells to the grid using `toggle`

Inside the `click`'s [callback function](#exercise-2-click-handler) (from Exercise 2):
*  Call toggle with an array where the first value is `event.cellX` and the second value is `event.cellY`.
  *  `toggle` should push `cell` onto `this.current` by calling `this.current.push(cell)` 
     *  [push documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
  *  `toggle` should then call it's `redraw()` method.

*  Implement `Toggle.redraw` by calling `this.canvas.draw(this.current)`

At the bottom of `Canvas.draw`:
*  Set the `fillStyle` of our context object to `'yellow'`
*  Use `fillRect` for every cell in cells to draw a square given the cells first and second index values, which represent X and Y
   *  [fillRect documentation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect)



## Challenge

To add yellow squares to the board you push cells on to `this.current` how would
you remove yellow squares from the grid? Use the answer to this question to implement
`toggle` so that it toggles grid values. 

Hint: If you're stuck on trying to figure out how to alter `this.current` remember
that `this.current` is an Array and try using [google.com](http://google.com) to
find find the information you need.
