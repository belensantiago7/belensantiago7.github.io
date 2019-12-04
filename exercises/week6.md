# Week 6

## Class Demo

### Create a gameoflife.js file

First thing we'll need to do for Game of Life is to create a new `gameoflife.js`
file. We'll add this file to the [game-of-life/](/game-of-life) folder. Then
we'll load that file in our [index.html](/game-of-life/index.html) file.

1.  Create a new file called `gameoflife.js` in [game-of-life/](/game-of-life)
2.  Add `console.log('My new File!!!!!!!!!!');` to your new file
3.  On a new line below line 23 and `<\div>` create a new script tag that points
    to your gameoflife.js file.

    ```html
    <script src="gameoflife.js"></script>
    ```

4.  Open [index.html](/game-of-life/index.html) in your browser and developer
    tools then verify that 'My new File!!!!!!!!' is printed in the console.

### GameOfLife

The `GameOfLife` class constructor takes in **no input parameters** and has no
construction logic (the constructor should be empty).

## Exercise 1: Set up class skeletons

Your group should be assigned to a particular class. As a team, follow the
instructions below for the class you're assigned to.

### Canvas

The `Canvas` class contructor takes in a single parameter, `container`. Upon
construction, the `Canvas` class should:

*   Create a `canvasElement` variable using `document.createElement('canvas')`
*   store the canvasElement as `this.obj`
*   Store the width/height: `this.pixelWidth` and `this.pixelHeight.  For now,
    the values assigned should be 803 (width) and 506 (height).
*   Append the canvasElement to the container, using `appendChild`
*   Store the context: `this.ctx` (the canvas 2d context) which should be set
    to the canvas' context, via `getContext('2d')`
*   Call the class method `setGridSize` and pass in the argument `11`.

### Shape
The `Shape` class constructor takes in a single paramter, `canvas`. Upon
construction, the `Shape` class should:

*   Set `this.canvas` equal to the input parameter `canvas`
*   Set `this.current` equal to an empty array
*   Set `this.collection` equal to an empty object

### Controls
The `Controls` class constructor takes in a three parameters: `canvas`,
`shape`, and `gameoflife`. Upon construction, the `Controls` class should:

*   Store the three input parameters as `this.canvas`, `this.shape`, and
    `this.gameoflife`
*   Create a class variable `this.started` and set initially as `false`
*   Create a class variable `this.timer` and set initially to `null`
*   Create a class variable `this.generation` and set initially to 0

## Exercise 2: Add empty class methods

You should still be in your assigned group and class from Exercise 1. As a
team, add the empty class methods to the class.

### GameOfLife (demo'ed as a class)
*   Method name: `next`
    *   Input parameters: `shape`

### Canvas
*   Method name: `draw`
    *   Input parameters: N/A
*   Method name: `click`
    *   Input parameters: `fn`
*   Method name: `getDimension` 
    *   Input parameters: N/A
*   Method name: `getGridSize`
    *   Input parameters: N/A
*   Method name: `setGridSize`
    *   Input parameters: `gridSize`

### Shape
*   Method name: `get`
    *   Input parameters: N/A
*   Method name: `set`
    *   Input parameters: `shape`
*   Method name: `copy`
    *   Input parameters: `shape`
*   Method name: `redraw`
    *   Input parameters: N/A
*   Method name: `center`
    *   Input parameters: N/A
*   Method name: `offset`
    *   Input parameters: `dx`, `dy`
*   Method name: `toggle`
    *   Input parameters: `cell`

### Controls
*   Method name: `init`
    *   Input parameters: `shapes`
*   Method name: `setGeneration`
    *   Input parameters: `gen`
*   Method name: `animate`
    *   Input parameters: N/A
*   Method name: `next`
    *   Input parameters: N/A

## Exercise 3: Instantiation

As a team, work to instantiate the appropriate objects (class instances).

1.  *Find* and store the canvas as variable named `canvasElement`. You can
    *find* the element from the [index.html](/gameoflife/index.html), and using
    the method `document.getElementById`
2.  Create an instance of `Canvas`, which takes in the `canvasElement` (from Step 1)
3.  Create an instance of `Shape`, which takes in the `Canvas` instance created
    in Step 2
4.  Create an instance of `GameOfLife`, which takes in no input parameters.
5.  Create an instance of `Controls`, which takes in the `Canvas` instance (Step
    2), `Shape` instance (Step 3), and `GameOfLife` instance (Step 4)

## Challenge

Given the instructions at [bitstorm.org](https://bitstorm.org/gameoflife/) start
trying to implement the simulation. HINT: You'll want to enforce the rules in
`GameOfLife.next()`. `Shape` will be responsible for storing information about the
world. `Canvas` is responsible for drawing. `Controls` are responsible for user
events such  as clicks.
